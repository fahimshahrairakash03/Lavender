import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div>
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-96 p-7">
          <h2 className="text-xl text-center font-bold ">Login</h2>
          <form onSubmit={handleSubmit()}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                })}
              />
              {errors.email && (
                <p className="text-red-600 font-semibold">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="password"
                {...register("password", {
                  required: "Password  is required",
                })}
              />
              {errors.password && (
                <p className="text-red-600 font-semibold">
                  {errors.password?.message}
                </p>
              )}
              <label className="label">
                <span className="label-text">Forget Password?</span>
              </label>
            </div>

            <input
              className="btn btn-accent w-full"
              value="Login"
              type="submit"
            />
            <div></div>
          </form>
          <p className="text-danger  ">{error}</p>
          <p>
            New User?{" "}
            <Link className="text-blue-600" to="/register">
              Create new Account.
            </Link>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-success w-full">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
