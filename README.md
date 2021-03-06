# DropTheWord

## Install

```javascript
npm install droptheword
```

## Demo

https://pedantic-benz-27df81.netlify.com/

## Usage

```javascript
import { replaceSpacesInString, replaceSpacesInCssSelector } from "droptheword";
```

#### Usage with strings

###### Function will transform provided string to string with "hard spaces" after each word provided in an array.

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

###### Function will search the page for css selector occurrences and it will transform text content of it to string with hard spaces.

```javascript
const myCssSelector = "[data-text=my-paragraphs]";
const wordsToDrop = ["is", "of", "and", "the", "no"];

replaceSpacesInCssSelector({
  cssSelector: myCssSelector,
  dropWordList: wordsToDrop
});
```
