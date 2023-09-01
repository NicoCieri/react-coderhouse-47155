import PropTypes from "prop-types";

const SaludoComponent = ({ name }) => <h2>Hola {name}!</h2>;

const DespedidaComponent = ({ name }) => <h2>Chau {name}!</h2>;

const Message = ({ type, name }) => {
  const Component = type === "saludo" ? SaludoComponent : DespedidaComponent;

  return (
    <div>
      <h2>Message</h2>
      <Component name={name} />
    </div>
  );
};

Message.propTypes = {
  type: PropTypes.oneOf(["saludo", "despedida"]).isRequired,
  name: PropTypes.string.isRequired,
};

export default Message;
