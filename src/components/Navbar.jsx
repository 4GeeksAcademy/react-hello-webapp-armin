import { Link } from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-light bg-light">
        <div className="container">
            <Link to="/">
                <span className="navbar-brand mb-0 h1 btn btn-info">Home List</span>
            </Link>
            <Link to="/addcontact">
                <button className="btn btn-success">Add new contact</button>
            </Link>
        </div>
    </nav>
);