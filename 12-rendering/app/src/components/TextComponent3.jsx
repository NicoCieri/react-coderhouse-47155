import PropTypes from "prop-types";
import { Fragment } from "react";

// Conditional inline con ternaria
const TextComponent3 = ({ condition }) => {
  return (
    <Fragment>
      {/* {condition ? <h2>Condition is true</h2> : <h2>Condition is false</h2>} */}
      <h2>Condition is {condition ? "true" : "false"}</h2>
    </Fragment>
  );
};

TextComponent3.propTypes = {
  condition: PropTypes.bool.isRequired,
};

export default TextComponent3;
