import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';

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
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.onBackdropClickHandler}>
        <ModalWindow>{this.props.children}</ModalWindow>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
