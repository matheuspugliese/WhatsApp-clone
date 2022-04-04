import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
  Mic,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./Chat.css";

function Chat() {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar src="https://nfts.wtf/wp-content/uploads/2021/09/Lows-Ape-bdd363e4c3b5d86da69b280ba1442dd7.png" />
        <div className="chat-headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat-headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        <p className={`chat-message ${true && "chat-receiver"}`}>
          <span className="chat-name">Nome</span>
          Hey Guys!
          <span className="chat-timestamp">3:52 pm</span>
        </p>
      </div>
      <div className="chat-footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button type="submit" onClick={sendMessage}>
            Send Message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
