

const Login = () => {
    const handleLogin = event => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)
    }
    return (
        <div className="min-h-screen bg-base-200">
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
                        <button className="btn btn-secondary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;