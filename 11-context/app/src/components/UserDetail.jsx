import { useContext } from "react";
import UserContext from "../context/UserContext";

const UserDetail = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <p>Nombre: {user.name}</p>
      <p>Edad: {user.age}</p>
    </div>
  );
};

export default UserDetail;
