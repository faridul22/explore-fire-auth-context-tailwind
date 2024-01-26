import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";


const Login = () => {

    const { signIn, googleLogin } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="min-h-screen bg-base-200">
            <h1 className="text-5xl font-bold text-center mb-10">Login now!</h1>
            <div className="card w-3/12 mx-auto shadow-2xl bg-base-100 ">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-secondary" type="submit" value="Login" />
                    </div>
                    <p>
                        <small>New to Authentic plus please <Link className="text-blue-600 underline" to="/register">Register</Link></small>
                    </p>

                    <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline text-xl mx-auto">G</button>

                </form>
            </div>
        </div>
    );
};

export default Login;