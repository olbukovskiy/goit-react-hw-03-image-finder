import PropTypes from 'prop-types';

export function LoadMoreBtn({ onClick }) {
  return (
    <button className="button" onClick={onClick}>
      Load more
    </button>
  );
}

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
