import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singin, errors: singinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    singin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex flex-col gap-3 w-full max-w-sm bg-zinc-700 rounded-md shadow-md py-6 px-9"
        onSubmit={onSubmit}
      >
        {singinErrors.map((error, i) => (
          <div
            key={i}
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-2"
            role="alert"
          >
            {error}
          </div>
        ))}

        <h1 className="text-2xl font-bold border-b-2 border-fuchsia-600 p-3 text-center">
          Login
        </h1>

        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md border border-fuchsia-600 focus:outline-none focus:border-fuchsia-700 mb-2"
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-red-500">Username is required</p>
        )}

        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md border border-fuchsia-600 focus:outline-none focus:border-fuchsia-700 mb-2"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}

        <button
          type="submit"
          className="w-full bg-fuchsia-600 text-white px-4 py-2 rounded-md hover:bg-fuchsia-700 focus:outline-none focus:bg-fuchsia-700"
        >
          Login
        </button>

        <p className="flex gap-x-2 justify-between">
          Don't have an account?{" "}
          <Link to="/register" className="text-sky-500">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
