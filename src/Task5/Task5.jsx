import React, { Component } from "react";

import { extractArray } from "../Task3/logic/extractArray";
import { mergeSort } from "./logic/mergeSort";

class Task5 extends Component {
  state = {
    text: "",
    array: "",
    mergeArray: []
  };

  onChange = e => {
    this.setState({
      text: e.target.value,
      array: extractArray(this.state.text)
    });
  };

  onMergeSort = () => {
    this.setState({
      mergeArray: mergeSort(this.state.array)
    });
  };

  render() {
    const answer = this.state.mergeArray.length != 0 && (
      <div>
        <span>Отсортированный массив по принципу простого слияния:</span>
        {this.state.mergeArray.map((value, index) => (
          <span key={index}>{value} </span>
        ))}
      </div>
    );

    return (
      <div>
        <div>
          <span>Введите последовательность чисел</span>
          <input onChange={this.onChange} />
        </div>
        <div>
          <button onClick={this.onMergeSort}>Сортировка слиянием</button>
        </div>
        {answer}
      </div>
    );
  }
}

export default Task5;
