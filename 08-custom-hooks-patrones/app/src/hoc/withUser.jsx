const getUserMock = () => {
  return {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  };
};

const withUser = (Component) => {
  return function WithUserComponent(props) {
    const user = getUserMock();

    console.log(props);

    return <Component {...props} user={user} />;
  };
};

export default withUser;
