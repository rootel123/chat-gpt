const ChatCard = ({ answer, question }) => {
  return (
    <li className="flex flex-col gap-4 mb-24">
      <div className="self-start mx-4 p-1 rounded-md shadow-lg speech-bubble-l whitespace-pre-wrap">
        {question}
      </div>
      <div className="self-end mx-4 p-1 rounded-md shadow-lg speech-bubble whitespace-pre-wrap ">
        {answer}
      </div>
    </li>
  );
};

export default ChatCard;
