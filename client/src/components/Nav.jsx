import React, { Component } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div className="container">
        <div className="nav">
          <Link to="/home">
            <button className="boton">Home</button>
          </Link>

          <Link to="/about">
            <button>About</button>
          </Link>

          <Link to="/favorites">
            <button>Favorites</button>
          </Link>

          <SearchBar onSearch={this.props.onSearch} />
        </div>
      // </div>
    );
  }
}
