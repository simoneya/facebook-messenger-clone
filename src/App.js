import { Button, FormControl, InputLabel, Input } from "@mui/material";
import React, { useState, useEffect } from "react";
import './App.css';
import firebase from 'firebase';
import db from "./firebase";
import Message from "./Message";




function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  //roda só quando o app carregar os componentes
  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, []);
  
  // capturar o nome e entrar como um user
  useEffect(() => {
   //const name = prompt('Please enter your name');
   setUsername(prompt('Please enter your name'));
  }, [])

  // função para enviar as menssagens
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
      <h1> Hello There!</h1>
      <h2>Welcome {username}</h2>

      <form>
      <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input} variant="contained" type="submit" onClick={sendMessage}>Send Message</Button>
      </FormControl>
      </form>
      
      {/* messages themselves */}

      {
        messages.map(message => (
          <Message username={username} message={message}/>
        ))
      }
    </div>
  );
}

export default App;
