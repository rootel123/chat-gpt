import ChatCard from "./ChatCard.jsx";
import { useEffect, useRef } from "react";

const ChatView = ({ chatList }) => {
  const ulRef = useRef();

  useEffect(() => {
    ulRef.current.scroolTop = ulRef.current.scrollHeight;
  }, [chatList]);

  return (
    <div className="bg-zinc-600 h-[900px] flex justify-center items-center">
      <ul
        ref={ulRef}
        className="mb-24 overflow-y-auto w-[400px] mr-16 h-[600px] scrollbar-hide"
      >
        {chatList.length === 0 ? (
          <div className="text-3xl overflow-hidden font-semeborder flex flex-col items-center">
            <img
              src="./images/gpt.png"
              alt="gpt.png"
              className="w-24 h-24 rounded-full mb-4"
            />
            <div className="text-white">오늘 어떻게 도와드릴까요?</div>
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
