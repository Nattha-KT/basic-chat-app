import React,{useState} from "react";
import GenderCheckbox from "./GenderCheckbox.jsx";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  // const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  // const handleSubmit = async (e) => {
  // 	e.preventDefault();
  // 	await signup(inputs);
  // };

  return (
    <div className=" flex flex-col justify-center items-center min-w-96 mx-auto">
      <div
        className="w-full p-6 shadow-md bg-gray-400 rounded-lg bg-clip-padding backdrop-filter
       backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-100">
          Sign Up
          <span className="text-sky-500/70">ChatApp</span>
        </h1>

        <form action="">
          <div>
            <label htmlFor="fullname" className=" label p-2">
              <span className=" text-base label-text"> Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className=" w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label htmlFor="username" className=" label p-2">
              <span className=" text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className=" w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label htmlFor="password" className=" label ">
              <span className=" text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className=" w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label htmlFor="confirm password" className=" label">
              <span className=" text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className=" w-full input input-bordered h-10"
            />
          </div>
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
          <a
            href="#"
            className=" text-sm hover:underline hover:text-sky-400 mt-4 inline-block"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block  btn-neutral  btn-sm mt-2">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
