import React from "react";
import {  useSelector } from "react-redux";

const ChatThread = ({position,message}) => {

  const user = useSelector((state) => state.registeredUser.userName);
  const letter= user.charAt(0).toUpperCase();
  return (
    <div className={`flex items-end ${position} pt-2 w-full  `}>
      <div className="  " style={{ maxWidth: '50%' }}>
        <div
          className="w-1/2 h-10 rounded-full  bg-indigo-500 text-center text-sm flex justify-center items-center  "
          style={{ height: "30px", width: "30px" }}
        >
          <div className="font-bold">{letter}</div>
        </div>
        <div className="bg-indigo-300 px-5 py-2 text-left ml-5 text-white rounded rounded-tr-3xl rounded-bl-3xl">
          { message }
        </div>
      </div>
    </div>
  );
};
export default ChatThread;
