import PropTypes from "prop-types";

// IF con return temprano
const TextComponent1 = ({ condition }) => {
  if (condition) {
    return <h2>Condition is true</h2>;
  }

  return <h2>Condition is false</h2>;
};

TextComponent1.propTypes = {
  condition: PropTypes.bool.isRequired,
};

export default TextComponent1;
