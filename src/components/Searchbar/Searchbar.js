import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';

import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

const initialValues = { searchField: '' };

export function Searchbar({ onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        onSubmit(values.searchField);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {({ isSubmitting }) => {
        return (
          <SearchbarContainer>
            <SearchForm>
              <SearchFormButton type="submit" disabled={isSubmitting}>
                <GoSearch />
                <SearchFormButtonLabel>Search</SearchFormButtonLabel>
              </SearchFormButton>
              <SearchFormInput
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name="searchField"
              ></SearchFormInput>
            </SearchForm>
          </SearchbarContainer>
        );
      }}
    </Formik>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
