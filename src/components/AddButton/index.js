import React, { Component } from 'react';
import './assets/add_button.css';

export default class AddButton extends Component {
  render() {
    return (
      <button className="add-btn" onClick={this.props.action}>
        <i className="material-icons">add</i>{this.props.title}
      </button>
    );
  }
}
