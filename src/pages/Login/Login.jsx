import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-71px)]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 h-fit">
        <h1 className="font-bold text-3xl text-gray-700 mt-10 mb-7 text-center">
          Login your account
        </h1>
        <hr className="my-container text-gray-200" />
        <div className="card-body">
          <form>
            <fieldset className="fieldset mb-4">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
              />

              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-primary mt-4">Login</button>
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
    </div>
  );
};

export default Login;
