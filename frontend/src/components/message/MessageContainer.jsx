import React from "react";
import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx'
const MessageContainer = () => {
  return (
    <div className=" md:min-w-[450px] flex flex-col">
      <div className=" bg-sky-400/50 px-4 py-2 mb-2">
        <span className=" label-text text-white">To:</span>{" "}
        <span className=" text-white font-bold">Natthaphon</span>
      </div>
      <Messages/>
      <MessageInput />
    </div>
  );
};

export default MessageContainer;
