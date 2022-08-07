import React from "react";

const ChatThread = ({position}) => {
  return (
    <div className={`flex items-end ${position} pt-2`}>
      <div className="  " style={{ maxWidth: '50%' }}>
        <div
          class="w-1/2 h-10 rounded-full  bg-gray-400 text-center text-sm flex justify-center items-center  "
          style={{ height: "30px", width: "30px" }}
        >
          <div className="font-bold">T</div>
        </div>
        <div class="bg-red-500 px-5 py-2 text-left ml-5 text-white rounded rounded-tr-3xl rounded-bl-3xl">
          message fsdfsdfsdfsdf sdffs dfsfs ffsdfsdfsf
        </div>
      </div>
    </div>
  );
};
export default ChatThread;
