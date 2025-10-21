import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password })
    
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-71px)]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 h-fit">
        <h1 className="font-bold text-3xl text-gray-700 mt-10 mb-7 text-center">
          Login your account
        </h1>
        <hr className="my-container text-gray-200" />
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset mb-4">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
              required
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Login
            </button>
          </fieldset>

          <div className=" text-center">
            <span>
              Don't have an Account?{" "}
              <Link
                className="text-secondary hover:underline"
                to={"/auth/register"}
              >
                Register
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
