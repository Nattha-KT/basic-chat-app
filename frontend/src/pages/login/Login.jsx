import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hook/useLogin.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center  min-w-96 mx-auto">
      <div
        className=" w-full p-6 shadow-md  rounded-lg bg-clip-padding backdrop-filter
       backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-100">
          Login
          <span className="text-sky-500/70"> ChatApp</span>
        </h1>

        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor=" username" className=" label p-2">
              <span className=" text-base label-text">Username</span>
            </label>
            <input
              name="username"
              type="text"
              placeholder="Enter username"
              className=" w-full input input-bordered h-10"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor=" password" className=" label">
              <span className=" text-base label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              className=" w-full input input-bordered h-10"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline  hover:text-sky-400 mt-2 inline-block"
          >
            {`Don't`} have an account?
          </Link>

          <div>
            <button className="btn btn-block  btn-neutral  btn-sm mt-2">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;