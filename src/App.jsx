import { useState } from "react";
import Chatbar from "./components/Chatbar";
import ChatView from "./components/ChatView";

const App = () => {
  const [chatList, setChatList] = useState([]);

  return (
    <div className="min-h-screen max-w-screen-md mx-auto flex">
      <div className="bg-blue-100 w-52">Side</div>
      <div className="grow flex flex-col">
        <ChatView chatList={chatList} />
        <Chatbar chatList={chatList} setChatList={setChatList} />
      </div>
    </div>
  );
};

export default App;
