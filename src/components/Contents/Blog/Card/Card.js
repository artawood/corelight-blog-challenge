import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Blog title</h2>
          <p className="card-subtitle mb-2 text-muted">Date Posted</p>
          <details>
            <summary>Summary of the Article</summary>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </details>
          <a href="#" class="card-link">
            Like
          </a>
          <a href="#" class="card-link">
            Comment
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
