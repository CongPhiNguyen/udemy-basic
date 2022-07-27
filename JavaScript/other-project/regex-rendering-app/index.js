class RegexRendering {
  currentCondition;
  checkString(str) {
    console.log(this.currentCondition);
    return this.currentCondition.test(str);
  }
}

class SideCondition {}
class ListItem {
  _listSelectionItem;
  constructor() {
    this._listSelectionItem = [];
  }
}
class ListSelectionItem {
  _name;
  _alias;
  _pattern;
  _patternInsertDOM;
  _optionDOM;
  constructor(name, alias, patternDOM) {
    this._name = name;
    this._alias = alias;
    this._patternInsertDOM = patternDOM;

    return this.createOptionDOM();
  }
  handling() {
    console.log("Run");
  }
  createOptionDOM() {
    this._optionDOM = `
      <option value="${this._alias}" class="selection-item">
        ${this._name}
      </option>
    `;
    return this._optionDOM;
  }
}

let listSelectItemMain1 = new ListSelectionItem(
  "Khớp với ký tự đầu chuỗi",
  "begin",
  `<div id="match-first-character" class="input-container">
    <label for="input-pattern" class="input-label"
      >Ký tự đầu tiên</label
    >
    <input type="text" id="input-pattern" class="input-box" />
  </div>`
);

let listSelectItemMain2 = new ListSelectionItem(
  "Khớp với ký tự cuối chuỗi",
  "last",
  `<div id="match-first-character" class="input-container">
    <label for="input-pattern" class="input-label"
      >Ký tự cuối</label
    >
    <input type="text" id="input-pattern" class="input-box" />
  </div>`
);

let listItemMain = new ListItem();
listItemMain._listSelectionItem.push(listSelectItemMain1);
listItemMain._listSelectionItem.push(listSelectItemMain2);

let regexRendering = new RegexRendering();

regexRendering.currentCondition = RegExp("^r");

document.querySelector("#check-button").onclick = () => {
  const stringToTest = document.querySelector("#string-test").value;
  console.log("a");
  if (regexRendering.checkString(stringToTest)) {
    document.querySelector("#check-result").textContent = "TRUE";
    document.querySelector("#check-result").style.color = "blue";
  } else {
    document.querySelector("#check-result").textContent = "FALSE";
    document.querySelector("#check-result").style.color = "red";
  }
};

const selectionDOM = document.querySelector("#selection-list");

const renderOption = () => {
  listItemMain._listSelectionItem.forEach((val) => {
    selectionDOM.innerHTML += val._optionDOM;
  });
};

renderOption();
const selectionSectionDOM = document.querySelector("#selection-section");
selectionDOM.onchange = (e) => {
  console.log(e.target.value);
  listItemMain._listSelectionItem.forEach((val) => {
    console.log(val._alias, e.target.value);
    if (val._alias === e.target.value) {
      selectionSectionDOM.innerHTML += val._patternInsertDOM;
    }
  });
};
