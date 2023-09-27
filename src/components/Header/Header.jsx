import { NavLink } from 'react-router-dom';
const Header = ({ toggleModal }) => {
  return (
    <nav className="navbar bg-dark mb-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand mb-0 h1 text-success" to="/">
          Navbar
        </NavLink>
        <NavLink className="mb-0 h3 text-white" to="/todos">
          Todos
        </NavLink>
        <NavLink className="mb-0 h3 text-white" to="/products">
          Products
        </NavLink>
        <button onClick={toggleModal} className="btn btn-outline-success">
          Open Modal
        </button>
      </div>
    </nav>
  );
};

export default Header;
