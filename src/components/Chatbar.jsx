import axios from "axios";
import { useState } from "react";
import { ImSpinner3 } from "react-icons/im";

const ChatBar = ({ chatList, setChatList }) => {
  const [newQuestion, setNewQuestion] = useState("");
  const [isLoading, setISLoading] = useState(false);

  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();

      if (!newQuestion) return;

      setISLoading(true);

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: newQuestion,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_KEY}`,
          },
        }
      );

      console.log(response);

      setChatList([
        ...chatList,
        {
          question: newQuestion,
          answer: response.data.choices[0].message.content,
        },
      ]);
      setNewQuestion("");
      setISLoading(false);
    } catch (error) {
      console.error(error);

      setISLoading(false);
    }
  };

  return (
    <div className="bg-teal-100 h-24 absolute bottom-0 w-full">
      <form className="h-full flex items-center px-4" onSubmit={onSubmitChat}>
        <input
          className={`grow py-1 px-2 focus:outline-none border-2 focus:border-teal-400 mr-4 rounded-md border-teal-200 ${
            isLoading && "bg-gray-100 text-gray-500"
          } `}
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          disabled={isLoading}
          placeholder="무엇이든 물어보세요."
        />
        <button
          className="w-28 py-[6px] text-sm bg-cyan-400 active:bg-cyan-600 rounded-lg text-white font-semibold flex justify-center"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <ImSpinner3 className="animate-spin-slow text-black" size={22} />
          ) : (
            "검색"
          )}
        </button>
      </form>
    </div>
  );
};

export default ChatBar;
