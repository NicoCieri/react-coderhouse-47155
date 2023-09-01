import PropTypes from "prop-types";
// import { Fragment } from "react";

// Conditional inline
const TextComponent2 = ({ condition }) => {
  return (
    <>
      {condition && <h2>Condition is true</h2>}
      {!condition && <h2>Condition is false</h2>}
    </>
  );
};

TextComponent2.propTypes = {
  condition: PropTypes.bool.isRequired,
};

export default TextComponent2;
