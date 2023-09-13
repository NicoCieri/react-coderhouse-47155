import PropTypes from "prop-types";
import styles from "./Field.module.css";

const Field = ({ label, name, onChange }) => {
  return (
    <div className={`${styles.formControl}`}>
      <label className={styles.label}>{label}</label>
      <input name={name} type="text" onChange={onChange} />
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Field;
