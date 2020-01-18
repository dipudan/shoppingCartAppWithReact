import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="htt://google.com">
            <h1>
              <span className="badge badge-pill badge-success">
                Prodcuts in cart : {this.props.totalCount}
              </span>
            </h1>
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
