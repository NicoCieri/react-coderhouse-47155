import { useParams } from "react-router-dom";

const users = [
  { id: "1", name: "John Doe", email: "john@gmail.com" },
  { id: "2", name: "Jane Doe", email: "jane@gmail.com" },
  { id: "3", name: "Jack Doe", email: "jack@gmail.com" },
];

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const ItemDetail = () => {
  const { id } = useParams();

  const user = getUser(id);

  if (!user) {
    return <h1>Usuario no encontrado</h1>;
  }

  return (
    <div>
      <h1>ItemDetail id: {id}</h1>
      <p>
        <b>Usuario:</b> {user.name}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
};

export default ItemDetail;
