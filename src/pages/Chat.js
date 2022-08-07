import React from "react";
import MessageInput from "../components/MessageInput";
import ChatThread from "../components/ChatThread";
const Chat = () => {
  return (
    <div className="h-screen">
      <div className="h-full sticky bg-indigo-200">
        
        <div className=" pl-1 pr-1 absolute inset-x-0 bottom-0  pb-8">
        <div className="max-w-2xl  mx-auto bg-red-600">
            <div className="w-100 bg-yellow-100 ml-1 mr-1 mb-10  ">
                <ChatThread position="justify-end"/>
                <ChatThread position="justify-start"/>
                <ChatThread position="justify-end"/>
                <ChatThread position="justify-start"/>
                <ChatThread position="justify-end"/>
                <ChatThread position="justify-start"/>
                <ChatThread position="justify-end"/>
                <ChatThread position="justify-start"/>
            </div>
        </div>
          <MessageInput />
          
        </div>
      </div>
    </div>
  );
};

export default Chat;
