import React from "react";
import MessageInput from "../components/MessageInput";
import ChatThread from "../components/ChatThread";
const Chat = () => {
  return (
    <div className="h-screen   bg-indigo-100 pr-2 ">
      <div className="max-w-2xl   h-full mx-auto ">
        <div className="flex flex-1 flex-col  h-full  overflow-auto w-full">
          <div className=" h-full pb-28  flex  min-h-min flex-col-reverse overflow-auto  content-end  pl-1     ">
            <ChatThread position="justify-end" />
            <ChatThread position="justify-start" />
            <ChatThread position="justify-start" />
            <ChatThread position="justify-end" />
            <ChatThread position="justify-start" />
            <ChatThread position="justify-start" />
            <ChatThread position="justify-end" />
            <ChatThread position="justify-start" />
            <ChatThread position="justify-start" />
          </div>
          <div className=" fixed w-full    inset-x-0 bottom-0  ">
            <MessageInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
