import { useState } from "react";
import Chatbar from "./components/Chatbar";
import ChatSide from "./components/ChatSide";
import ChatView from "./components/ChatView";

const App = () => {
  const [chatList, setChatList] = useState([]);

  return (
    <div className="min-h-screen max-w-screen-md mx-auto flex">
      <ChatSide chatList={chatList} />
      <div className="grow flex flex-col relative">
        <ChatView chatList={chatList} />
        <Chatbar chatList={chatList} setChatList={setChatList} />
      </div>
    </div>
  );
};

export default App;
