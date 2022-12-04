import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

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
          <header className="searchbar">
            <Form className="form">
              <button type="submit" className="button" disabled={isSubmitting}>
                <span className="button-label">Search</span>
              </button>
              <Field
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name="searchField"
              ></Field>
            </Form>
          </header>
        );
      }}
    </Formik>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
