import React, { Component } from "react";
import Card from "./Card";
import blogs from "../../../models/blogs.json";

class BlogWrapper extends Component {
  state = {
    blogs
  };
  render() {
    return (
      <div className="blog-wrapper">
        {this.state.blogs.map(blog => (
          <Card
            id={blog.id}
            key={blog.id}
            title={blog.title}
            datePosted={blog.datePosted}
            author={blog.author}
            authorRole={blog.authorRole}
            image={blog.image}
            summary={blog.summary}
            details={blog.details}
          />
        ))}
      </div>
    );
  }
}

export default BlogWrapper;
