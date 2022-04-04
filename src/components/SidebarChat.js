import { Avatar } from '@mui/material';
import React from 'react';
import db from './firebase';
import './SidebarChat.css';

function SidebarChat({ addNewChat, id, name }) {

  const createChat = () => {
    const roomName = prompt('Please enter name for chat');

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ?  (
    <div className="sidebarChat">
      <Avatar src="https://nfts.wtf/wp-content/uploads/2021/09/Lows-Ape-bdd363e4c3b5d86da69b280ba1442dd7.png" />
      <div className="sidebarChat-info">
        <h2>{name}</h2>
        <p>Last Message...</p> 
      </div>    
    </div>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Create a new chat</h2>
    </div>
  )
}

export default SidebarChat;