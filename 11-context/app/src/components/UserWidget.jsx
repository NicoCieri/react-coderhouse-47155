import UserContext from "../context/UserContext";

const UserWidget = () => {
  return (
    <UserContext.Consumer>
      {({ user }) => (
        <div>
          <span>Hola, {user.name}!</span>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default UserWidget;
