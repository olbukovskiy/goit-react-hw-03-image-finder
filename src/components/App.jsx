import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FindImages } from './services/API';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './Button/Button';
import { Loader } from './Loader/Loader';

const KEY = '30885515-e5cd8644896c6a7d3960ad51e';

export class App extends Component {
  state = {
    error: false,
    page: 1,
    searchQuery: '',
    images: [],
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      this.state.page !== prevState.page ||
      (this.state.searchQuery !== prevState.searchQuery &&
        this.state.searchQuery !== '')
    ) {
      try {
        this.setState({ isLoading: true });
        const newUrl = `?q=${this.state.searchQuery}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
        const response = await FindImages(newUrl);

        if (response.length === 0) {
          toast.error('Nothing found for your request', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }

        const imagesData = response.map(item => {
          return {
            id: item.id,
            tags: item.tags,
            webformatURL: item.webformatURL,
            largeImageURL: item.largeImageURL,
          };
        });

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...imagesData],
          };
        });
      } catch (error) {
        this.setState({ error: true });
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  setSearchQuery = query => {
    if (query.trim().length === 0) {
      toast.warn('Sorry, search field if empty :(', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      this.setState({ images: [], page: 1, searchQuery: '' });
      return;
    }

    if (query.trim().length > 0) {
      this.setState({ images: [], page: 1, searchQuery: query });
    }
  };

  pageIncrement = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.setSearchQuery} />
        <ImageGallery images={this.state.images} />
        {this.state.images.length > 0 && (
          <LoadMoreBtn onClick={this.pageIncrement} />
        )}
        {this.state.isLoading && <Loader />}
        <ToastContainer />
      </div>
    );
  }
}
