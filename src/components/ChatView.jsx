import ChatCard from "./ChatCard";
import { useEffect, useRef } from "react";

const ChatView = ({ chatList }) => {
  const ulRef = useRef();

  useEffect(() => {
    ulRef.current.scroolTop = ulRef.current.scrollHeight;
  }, [chatList]);

  return (
    <div className="bg-blue-100 h-screen max-w-[560px] flex flex-col justify-end border-r-2 border-gray-500">
      <ul ref={ulRef} className="mb-24 overflow-y-auto">
        {chatList.length === 0 ? (
          <div className="text-7xl overflow-hidden font-semeborder text-indigo-400">
            채팅이 없습니다.
          </div>
        ) : (
          chatList.map((v, i) => (
            <ChatCard key={i} answer={v.answer} question={v.question} />
          ))
        )}
      </ul>
    </div>
  );
};

export default ChatView;
