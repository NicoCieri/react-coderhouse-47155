import UserWidget from "./UserWidget";

const Navbar = () => {
  return (
    <div className="navbar bg-dark text-white">
      <div className="container">
        <h1>Context</h1>
        <div>
          <UserWidget />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
