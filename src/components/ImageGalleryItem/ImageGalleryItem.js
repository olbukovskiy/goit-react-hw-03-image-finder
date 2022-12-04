import React, { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = { modalOpen: false };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { id, tags, webformatURL, largeImageURL } = this.props.item;
    return (
      <li id={id} className="gallery-item" onClick={this.openModal}>
        <img src={webformatURL} alt={tags} />
        {this.state.modalOpen && (
          <Modal onClose={this.closeModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </li>
    );
  }
}
