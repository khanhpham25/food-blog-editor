import React, { Component } from 'react';
import AddButton from 'components/AddButton';
import { withRouter } from 'react-router-dom';

class BlogIndexContainer extends Component {
  constructor(props) {
    super(props);

    this.createNewBlog = this.createNewBlog.bind(this);
  }

  createNewBlog() {
    this.props.history.push('/new-blog');
  }

  render() {
    return (
      <div className="blog-index-container">
        <header className="container-header">
          <h1>Food Blog</h1>
        </header>
        <hr />
        <AddButton title="New Blog" action={this.createNewBlog} />
      </div>
    );
  }
}

export default withRouter(BlogIndexContainer);
