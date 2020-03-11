"use strict";
exports.__esModule = true;
exports.replaceSpacesInCssSelector = function (_a) {
    var cssSelector = _a.cssSelector, dropWordList = _a.dropWordList;
    var elementsToChange = document.querySelectorAll(cssSelector);
    elementsToChange.forEach(function (element) {
        dropWordList.forEach(function (word) {
            var textToReplace = element.value;
            var textSplit = textToReplace.split(" " + word + " ");
            textToReplace = textSplit.join(" " + word + "\u00a0");
            element.value = textToReplace;
        });
    });
};
exports.replaceSpacesInString = function (_a) {
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
