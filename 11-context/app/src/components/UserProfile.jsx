import UserDetail from "./UserDetail";
import UserEdit from "./UserEdit";

const UserProfile = () => {
  return (
    <div className="container">
      <h1>Perfil del usuario</h1>

      <UserDetail />

      <hr />

      <UserEdit />
    </div>
  );
};

export default UserProfile;
