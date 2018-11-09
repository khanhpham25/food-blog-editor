import React, { Component } from 'react';
import './assets/primary_button.css';

export default class PrimaryButton extends Component {
  render() {
    return (
      <button className="primary-btn" onClick={this.props.action}
        style={{ background: this.props.background, color: this.props.color, padding: this.props.padding }} >
        {this.props.title}
      </button>
    );
  }
}
