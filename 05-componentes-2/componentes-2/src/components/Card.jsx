const Card = (props) => {
  console.log(props);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 10,
        boxShadow: "0 0 10px #ccc",
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: props.color || "#fff",
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
