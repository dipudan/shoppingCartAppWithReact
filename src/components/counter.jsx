import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>
          <span className={this.getBadgeClasses()}>{this.formatcount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-lg"
          >
            Increment
          </button>

          <button
            className="btn btn-danger btn-lg m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </h1>
      </div>
    );
  }

  formatcount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
