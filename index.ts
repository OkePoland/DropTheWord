interface SpacesInString {
  text: string;
  dropWordList: string[];
}
interface SpacesInCssSelector {
  cssSelector: string;
  dropWordList: string[];
}

export const replaceSpacesInCssSelector = ({
  cssSelector,
  dropWordList
}: SpacesInCssSelector) => {
  const elementsToChange = document.querySelectorAll(cssSelector);
  elementsToChange.forEach((element: any) => {
    dropWordList.forEach(word => {
      let textToReplace = element.value;
      let textSplit: any = textToReplace.split(" " + word + " ");
      textToReplace = textSplit.join(" " + word + "\u00a0");
      element.value = textToReplace;
    });
  });
};

export const replaceSpacesInString = ({
  text,
  dropWordList
}: SpacesInString) => {
  let newText: string = "";
  let textToReplace = text;
  dropWordList.forEach(word => {
    let textSplit: string[] = textToReplace.split(" " + word + " ");
    textToReplace = textSplit.join(" " + word + "\u00a0");
    newText = textToReplace;
  });
  return newText;
};
