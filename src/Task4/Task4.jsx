import React, { Component } from "react";

import { extractArray } from "../Task3/logic/extractArray";
import { quickSort, cocktailSort } from "./logic/sort";

class Task4 extends Component {
  state = {
    text: "",
    array: "",
    quickArray: [],
    cocktailArray: []
  };

  onChange = e => {
    this.setState({
      text: e.target.value,
      array: extractArray(this.state.text)
    });
  };

  onQuickSort = () => {
    this.setState({
      quickArray: quickSort(this.state.array)
    });
  };

  onCocktailSort = () => {
    this.setState({
      cocktailArray: cocktailSort(this.state.array)
    });
  };

  render() {
    const { quickArray, cocktailArray } = this.state;

    const quickSort = quickArray.length != 0 && (
      <div>
        <span>Отсортированный массив по принципу быстрой сортировки:</span>
        {quickArray.map((value, index) => (
          <span key={index}>{value} </span>
        ))}
      </div>
    );

    const coctailSort = cocktailArray.length != 0 && (
      <div>
        <span>Отсортированный массив по принципу шейкерной сортировки:</span>
        {cocktailArray.map((value, index) => (
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
          <button onClick={this.onQuickSort}>Быстрая сортировка</button>
        </div>
        <div>
          <button onClick={this.onCocktailSort}>Шейкерная сортировка</button>
        </div>
        {quickSort}
        {coctailSort}
      </div>
    );
  }
}

export default Task4;
