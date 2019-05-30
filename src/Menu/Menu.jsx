import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <h1>Task 1 (done)</h1>
        <Link to="/task2">
          <h1>Task 2</h1>
        </Link>
      </div>
    );
  }
}

export default Menu;
