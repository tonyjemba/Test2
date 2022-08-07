import React from "react";
import MessageInput from "../components/MessageInput";
import ChatThread from "../components/ChatThread";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/RegisteUser";

const Chat = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.registeredUser.message);
  const messages = useSelector((state) => state.registeredUser.messages);
  return (
    <div className="h-screen   bg-indigo-100 pr-2 ">
      <div className="max-w-2xl   h-full mx-auto ">
        <div className="flex flex-1 flex-col  h-full  overflow-auto w-full">
          <div className=" h-full pb-28  flex  min-h-min flex-col-reverse overflow-auto  content-end  pl-1     ">
            
            {
              messages.map((msg,index)=><ChatThread key={index} message={`${msg}`}/>)
            }
          </div>
          <div className=" fixed w-full    inset-x-0 bottom-0  ">
            <MessageInput sendMessage={()=>dispatch(addMessage(message))}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
