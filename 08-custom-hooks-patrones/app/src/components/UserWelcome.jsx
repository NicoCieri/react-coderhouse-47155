import PropTypes from "prop-types";
import withUser from "../hoc/withUser";

export const UserWelcome = ({ user, color }) => {
  return (
    <div>
      <h1 style={{ color }}>Welcome user {user.name}!!!</h1>
    </div>
  );
};

UserWelcome.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  color: PropTypes.string.isRequired,
};

const UserWelcomeWithUser = withUser(UserWelcome);

export default UserWelcomeWithUser;
