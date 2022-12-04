import React, { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscHandler);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscHandler);
  }

  onEscHandler = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClickHandler = event => {
    if (event.currentTarget.nodeName === event.target.nodeName) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="overlay" onClick={this.onBackdropClickHandler}>
        <div className="modal">{this.props.children}</div>
      </div>
    );
  }
}
