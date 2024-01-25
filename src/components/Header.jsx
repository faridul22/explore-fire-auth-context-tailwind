import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";


const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.log(error) })
    }
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <h4 className="btn btn-ghost text-xl">daisyUI</h4>
                <div className="mx-auto">
                    <Link className="text-lg mx-2 font-semibold" to="/">Home</Link>
                    <Link className="text-lg mx-2 font-semibold" to="/login">Login</Link>
                    <Link className="text-lg mx-2 font-semibold" to="/register">Register</Link>
                </div>

                {user ? <> <span>{user.email}</span> <button onClick={handleLogOut} className="btn btn-xs">LogOut</button>
                </> : <Link className="btn btn-xs" to="/login">Login</Link>}

            </div>
        </div>
    );
};

export default Header;