import React, { Component } from "react";

import { extractArray, makeNumberArray } from "./logic/extractArray";
import { findMax, findMin } from "./logic/findMaxMin";
import { findAverage } from "./logic/findAverage";

class Task2 extends Component {
  state = {
    text: "",
    array: [],
    numberArray: [],
    max: "",
    min: "",
    average: ""
  };

  onChange = e => {
    this.setState({
      text: e.target.value,
      array: extractArray(this.state.text)
    });
  };

  findMaxMin = () => {
    this.setState({
      numberArray: makeNumberArray(this.state.array),
      max: findMax(this.state.numberArray),
      min: findMin(this.state.numberArray)
    });
  };

  findAverage = () => {
    this.setState({
      numberArray: makeNumberArray(this.state.array),
      average: findAverage(this.state.numberArray)
    });
  };

  render() {
    const answer1 = this.state.max != "" && (
      <div>
        <div>
          <span>Максимальный элемент: {this.state.max}</span>
        </div>
        <div>
          <span>Минимальный элемент: {this.state.min}</span>
        </div>
      </div>
    );

    const answer2 = this.state.average != "" && (
      <div>
        <div>
          <span>Среднеарифимитиечского: {this.state.average}</span>
        </div>
      </div>
    );

    return (
      <div>
        <div>
          <span>Введите последовательность чисел</span>
          <input onChange={this.onChange} />
        </div>
        <div>
          <button onClick={this.findMaxMin}>
            Найти наибольший/наименьший элемент
          </button>
        </div>
        <div>
          <button onClick={this.findAverage}>
            Поиск среднеарифимитиечского значения
          </button>
        </div>
        <div>{answer1}</div>
        <div>{answer2}</div>
      </div>
    );
  }
}

export default Task2;
