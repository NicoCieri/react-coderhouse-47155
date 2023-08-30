import { useContext } from "react";
import UserContext from "../context/UserContext";

const UserEdit = () => {
  const { user, updateUser } = useContext(UserContext);

  const handleChange = (e) => {
    updateUser(e.target.value, user.age);
  };

  const getOlder = () => {
    updateUser(user.name, user.age + 1);
  };

  return (
    <div>
      <h2>Editar Usuario</h2>
      <input type="text" onChange={handleChange} value={user.name} />
      <button onClick={getOlder}>Envejecer</button>
    </div>
  );
};

export default UserEdit;
