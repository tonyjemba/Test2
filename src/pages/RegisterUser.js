import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/RegisteUser";
import { Link } from "react-router-dom";

const RegisterUser = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-indigo-100 h-screen flex  flex-col items-center justify-center">
      <div className="font-bold text-2xl mb-10">Register</div>
      <form onSubmit={handleSubmit}>
        <input
          className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="Enter your name"
          type="text"
          onChange={(e) => {
            dispatch(register(e.target.value));
          }}
        />
        <Link to="/chat">
        <button
          type="submit"
          className="px-8 rounded-r-lg bg-indigo-400  text-gray-800 font-bold p-4 uppercase border-indigo-500 border-t border-b border-r"
        >
          Submit
        </button>
        </Link>
        
      </form>
    </div>
  );
};
export default RegisterUser;
