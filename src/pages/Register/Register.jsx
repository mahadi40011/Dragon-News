import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const navigate = useNavigate()
  const { createUser, setLoading, updateUserProfile } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((res) => {
        updateUserProfile({ displayName, photoURL })
          .then((res) => {
            navigate("/")
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-71px)] my-15 text-gray-800">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 h-fit">
        <h1 className="font-bold text-3xl text-gray-700 mt-10 mb-7 text-center">
          Register your account
        </h1>
        <hr className="my-container text-gray-200" />
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset mb-4">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Name"
              required
            />
            {/* Photo */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Photo URL"
              required
            />
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
            <button type="submit" className="btn btn-primary mt-4">
              Register
            </button>
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
  );
};

export default Register;
