import PropTypes from "prop-types";

const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #333",
        boxShadow: "0 2px 8px #ccc",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
