import { memo } from "react";
import PropTypes from "prop-types";

const ItemList = memo(({ items }) => {
  console.log("ItemList rendered");

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});
ItemList.displayName = "ItemList";

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ItemList;
