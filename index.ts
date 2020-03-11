const formInput: HTMLInputElement | null = document.querySelector(
  "[data-form=word-input]"
);
const userInputContent: HTMLInputElement | null = document.querySelector(
  "[data-form=user-content]"
);
const userOutputContent: HTMLInputElement | null = document.querySelector(
  "[data-form=user-output]"
);
const wordListBox: Element | null = document.querySelector(
  "[data-form=wordBox]"
);
const addButton: Element | null = document.querySelector(
  "[data-form=addButton]"
);
const runButton: Element | null = document.querySelector(
  "[data-form=runButton]"
);

let forbiddenWords: Array<string> = [];
let addWordInputValue: string;
let duplicate: Array<string> = [];

window.onload = () => {
  addButton?.addEventListener("click", (event: any) => appendNewWord(event));
  formInput?.addEventListener("change", event => {
    addWordInputValue = (<HTMLInputElement>event.target).value;
  });
  runButton?.addEventListener("click", () => handleRunClick());
  document.onkeyup = event => {
    event.preventDefault();
    event.keyCode == 13 && appendNewWord(event);
  };
};

const handleRunClick = () => {
  const oldText = userInputContent!.value;
  const newText = replaceSpacesInString({
    text: oldText,
    dropWordList: forbiddenWords
  });
  userOutputContent!.value = newText;
};

const setNewWordAttributes = ({
  newWordBoxElement,
  addWordInputValue
}: any) => {
  const buttonID = Math.random().toFixed(10);
  newWordBoxElement.setAttribute("class", "wordList__wordBox__element");
  newWordBoxElement.setAttribute("data-form", "word-element");
  newWordBoxElement.setAttribute("type", "button");
  newWordBoxElement.setAttribute("value", addWordInputValue);
  newWordBoxElement.setAttribute("id", buttonID);
  newWordBoxElement.addEventListener("click", (e: any) => deleteWord(e));
};

const setNewWordTextContent = (newWord: HTMLButtonElement) => {
  newWord.textContent = addWordInputValue;
};

const appendNewWordToBox = (newWord: HTMLButtonElement) => {
  !duplicate.length && wordListBox?.appendChild(newWord);
};

const pushNewWordToForbiddenArray = (word: HTMLButtonElement) => {
  let newWordTextValue = word.value;
  duplicate = forbiddenWords.filter(element => element == newWordTextValue);
  !duplicate.length && forbiddenWords.push(newWordTextValue);
};

const resetInputValue = () => {
  (<HTMLInputElement>formInput).value = "";
  addWordInputValue = "";
};

const appendNewWord = (event: any) => {
  event.preventDefault();
  if ((<string>addWordInputValue).length > 0) {
    const newWord: HTMLButtonElement = document.createElement("button");
    setNewWordAttributes({ newWordBoxElement: newWord, addWordInputValue });
    setNewWordTextContent(newWord);
    resetInputValue();
    pushNewWordToForbiddenArray(newWord);
    appendNewWordToBox(newWord);
  }
};

const deleteWord = (event: any) => {
  wordListBox?.removeChild(event.target);
  forbiddenWords = forbiddenWords?.filter(e => e != event.target.value);
};

const replaceSpacesInString = ({
  text,
  dropWordList
}: {
  text: string;
  dropWordList: string[];
}) => {
  let newText: string = "";
  let textToReplace = text;
  dropWordList.forEach(word => {
    let textSplit: string[] = textToReplace.split(" " + word + " ");
    textToReplace = textSplit.join(" " + word + "\u00a0");
    newText = textToReplace;
  });
  return newText;
};
