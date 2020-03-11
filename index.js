var formInput = document.querySelector("[data-form=word-input]");
var userInputContent = document.querySelector("[data-form=user-content]");
var userOutputContent = document.querySelector("[data-form=user-output]");
var wordListBox = document.querySelector("[data-form=wordBox]");
var addButton = document.querySelector("[data-form=addButton]");
var runButton = document.querySelector("[data-form=runButton]");
var forbiddenWords = [];
var addWordInputValue;
var duplicate = [];
window.onload = function () {
    addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", function (event) { return appendNewWord(event); });
    formInput === null || formInput === void 0 ? void 0 : formInput.addEventListener("change", function (event) {
        addWordInputValue = event.target.value;
    });
    runButton === null || runButton === void 0 ? void 0 : runButton.addEventListener("click", function () { return handleRunClick(); });
    document.onkeyup = function (event) {
        event.preventDefault();
        event.keyCode == 13 && appendNewWord(event);
    };
};
var handleRunClick = function () {
    var oldText = userInputContent.value;
    var newText = replaceSpacesInString({
        text: oldText,
        dropWordList: forbiddenWords
    });
    userOutputContent.value = newText;
};
var setNewWordAttributes = function (_a) {
    var newWordBoxElement = _a.newWordBoxElement, addWordInputValue = _a.addWordInputValue;
    var buttonID = Math.random().toFixed(10);
    newWordBoxElement.setAttribute("class", "wordList__wordBox__element");
    newWordBoxElement.setAttribute("data-form", "word-element");
    newWordBoxElement.setAttribute("type", "button");
    newWordBoxElement.setAttribute("value", addWordInputValue);
    newWordBoxElement.setAttribute("id", buttonID);
    newWordBoxElement.addEventListener("click", function (e) { return deleteWord(e); });
};
var setNewWordTextContent = function (newWord) {
    newWord.textContent = addWordInputValue;
};
var appendNewWordToBox = function (newWord) {
    !duplicate.length && (wordListBox === null || wordListBox === void 0 ? void 0 : wordListBox.appendChild(newWord));
};
var pushNewWordToForbiddenArray = function (word) {
    var newWordTextValue = word.value;
    duplicate = forbiddenWords.filter(function (element) { return element == newWordTextValue; });
    !duplicate.length && forbiddenWords.push(newWordTextValue);
};
var resetInputValue = function () {
    formInput.value = "";
    addWordInputValue = "";
};
var appendNewWord = function (event) {
    event.preventDefault();
    if (addWordInputValue.length > 0) {
        var newWord = document.createElement("button");
        setNewWordAttributes({ newWordBoxElement: newWord, addWordInputValue: addWordInputValue });
        setNewWordTextContent(newWord);
        resetInputValue();
        pushNewWordToForbiddenArray(newWord);
        appendNewWordToBox(newWord);
    }
};
var deleteWord = function (event) {
    wordListBox === null || wordListBox === void 0 ? void 0 : wordListBox.removeChild(event.target);
    forbiddenWords = forbiddenWords === null || forbiddenWords === void 0 ? void 0 : forbiddenWords.filter(function (e) { return e != event.target.value; });
};
var replaceSpacesInString = function (_a) {
    var text = _a.text, dropWordList = _a.dropWordList;
    var newText = "";
    var textToReplace = text;
    dropWordList.forEach(function (word) {
        var textSplit = textToReplace.split(" " + word + " ");
        textToReplace = textSplit.join(" " + word + "\u00a0");
        newText = textToReplace;
    });
    return newText;
};
