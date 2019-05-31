import React, { Component } from "react";

import { extractArray, makeNumberArray } from "./logic/extractArray";
import { sortByInsert } from "./logic/insertionArray";

class Task3 extends Component {
  state = {
    text: "",
    array: "",
    numberArray: [],
    insertionArray: []
  };

  onChange = e => {
    this.setState({
      text: e.target.value,
      array: extractArray(this.state.text)
    });
  };

  onInsertSort = () => {
    this.setState({
      insertionArray: sortByInsert(this.state.array)
    });
  };

  render() {
    const insertArray = this.state.insertionArray !== [] && (
      <div>
        <span>
          Отсортированный массив по принципу прямого включения:{" "}
          {this.state.insertionArray}
        </span>
      </div>
    );

    return (
      <div>
        <div>
          <span>Введите последоваиельность чисел</span>
          <input onChange={this.onChange} />
        </div>
        <div>
          <button onClick={this.onInsertSort}>
            Сортировка прямого включения
          </button>
        </div>
        <div>
          <button>Сортировка прямого включения</button>
        </div>
        {insertArray}
      </div>
    );
  }
}

export default Task3;
