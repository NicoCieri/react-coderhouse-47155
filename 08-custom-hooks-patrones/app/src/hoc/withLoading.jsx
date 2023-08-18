import PropTypes from "prop-types";

const withLoading = (Component) => {
  function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    return <Component {...props} />;
  }

  WithLoadingComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };

  return WithLoadingComponent;
};

export default withLoading;
