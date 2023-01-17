import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';
import { FormControl, Input } from '@mui/material';
import firebase from 'firebase';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

import db from 'firebase';
import Message from './Message';

import './App.css';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

 
  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, []);
  
  
  useEffect(() => {
   setUsername(prompt('Please enter your name'));
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img className="app-image" src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="Facebook-messenger-logo" />
      <h1 className="app-title">
        Seja Bem-Vindo aos maiorais <strong className="user">{username}</strong> <strong className="emoji">😉😌 </strong>!
      </h1>

      <form className="app-form">
        <FormControl className="app-formControl">
          <Input className="app-input" placeholder='Enter a mensage...' value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app-iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;