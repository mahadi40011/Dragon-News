import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-71px)] my-15 text-gray-800">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 h-fit">
        <h1 className="font-bold text-3xl text-gray-700 mt-10 mb-7 text-center">
          Register your account
        </h1>
        <hr className="my-container text-gray-200" />
        <div className="card-body">
          <form>
            <fieldset className="fieldset mb-4">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Name"
              />
              {/* Photo */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Photo URL"
              />
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
              <button className="btn btn-primary mt-4">Register</button>
            </fieldset>

            <div className=" text-center">
              <span>
                Already have an Account?{" "}
                <Link
                  className="text-secondary hover:underline"
                  to={"/auth/login"}
                >
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;