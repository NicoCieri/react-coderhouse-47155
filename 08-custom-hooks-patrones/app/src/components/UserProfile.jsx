import PropTypes from "prop-types";
import withUser from "../hoc/withUser";

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

const UserProfileWithUser = withUser(UserProfile);

export default UserProfileWithUser;
