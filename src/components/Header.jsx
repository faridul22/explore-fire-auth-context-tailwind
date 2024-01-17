import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <h4 className="btn btn-ghost text-xl">daisyUI</h4>
                <div className="mx-auto">
                    <Link className="text-lg mx-2 font-semibold" to="/">Home</Link>
                    <Link className="text-lg mx-2 font-semibold" to="/login">Login</Link>
                    <Link className="text-lg mx-2 font-semibold" to="/register">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;