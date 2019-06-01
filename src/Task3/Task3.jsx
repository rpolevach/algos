import React, { Component } from "react";

import { extractArray, makeNumberArray } from "./logic/extractArray";
import { sortByInsert, bubbleSort } from "./logic/insertionArray";

class Task3 extends Component {
  state = {
    text: "",
    array: "",
    numberArray: [],
    insertionArray: [],
    bubbleArray: []
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

  onBubbleSort = () => {
    this.setState({
      bubbleArray: bubbleSort(this.state.array)
    });
  };

  render() {
    const { insertionArray, bubbleArray } = this.state;

    const insertArray = insertionArray.length !== 0 && (
      <div>
        <span>Отсортированный массив по принципу прямого включения:</span>
        {insertionArray.map((value, index) => (
          // eslint-disable-next-line no-unused-expressions
          <span key={index}>{value} </span>
        ))}
      </div>
    );

    const bubble = bubbleArray.length !== 0 && (
      <div>
        <span>Отсортированный массив по принципу пузырька:</span>
        {bubbleArray.map((value, index) => (
          <span key={index}>{value} </span>
        ))}
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
          <button onClick={this.onBubbleSort}>Сортировка пузырьком</button>
        </div>
        {insertArray}
        {bubble}
      </div>
    );
  }
}

export default Task3;
