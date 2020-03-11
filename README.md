# DropTheWord

## Install

```javascript
npm install droptheword
```

## Usage

```javascript
import { replaceSpacesInString, replaceSpacesInCssSelector } from "droptheword";
```

#### Usage with strings

```javascript
const myOldString =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const wordsToDrop = ["is", "of", "and", "the"];

const myNewString = replaceScacesInString({
  text: myOldString,
  dropWordList: wordsToDrop
});
```

#### Usage with CSS selector

```javascript
const myCssSelector = "[data-text=my-paragraphs]";
const wordsToDrop = ["is", "of", "and", "the", "no"];

replaceSpacesInCssSelector({
  cssSelector: myCssSelector,
  dropWordList: wordsToDrop
});
```
