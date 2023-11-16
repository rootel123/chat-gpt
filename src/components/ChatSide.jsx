import ChatSideCard from "./ChatSideCard";

const ChatSide = ({ chatList }) => {
  return (
    <ul className="bg-gray-300 w-52 p-4 border-x-2 border-gray-500">
      <div className="bg-black text-white rounded-md px-1 mb-1 text-center">
        질문
      </div>
      {chatList?.map((v, i) => (
        <ChatSideCard key={i} question={v.question} answer={v.answer} />
      ))}
    </ul>
  );
};

export default ChatSide;
