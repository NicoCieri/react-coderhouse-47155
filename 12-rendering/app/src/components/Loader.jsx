import PropTypes from "prop-types";
import styles from "./Loader.module.css";

const Loader = ({ loading = false }) => {
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (loading) {
  //   return (
  //     <div className="d-flex justify-content-center">
  //       <div className="spinner-border text-primary" role="status">
  //         <span className="visually-hidden">Loading...</span>
  //       </div>
  //     </div>
  //   );
  // }

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <i className={`bi bi-arrow-repeat text-primary ${styles.spinner}`} />
      </div>
    );
  }

  return null;
};

Loader.propTypes = {
  loading: PropTypes.bool,
};

export default Loader;
