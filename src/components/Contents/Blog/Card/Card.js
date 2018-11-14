import React from "react";

const Card = props => (
  <div className="card mb-3">
    <div className="card-body">
      <h2 className="card-title font-weight-bold">{props.title}</h2>
      <p className="mb-4 text-muted">{props.datePosted}</p>
      <h3 className="card-subtitle mb-1">{props.author}</h3>
      <p className="mb2">{props.authorRole}</p>
      <img
        className={props.image === "" ? "display-none" : "card-img mb-2"}
        src={props.image}
        alt={props.id}
      />
      <details>
        <summary>{props.summary}</summary>
        <p className="card-text">{props.details}</p>
      </details>
      <a href="" class="card-link">
        Like
      </a>
      <a href="" class="card-link">
        Comment
      </a>
    </div>
  </div>
);

export default Card;
