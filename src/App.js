import { Button, FormControl, InputLabel, Input } from "@mui/material";
import React, { useState, useEffect } from "react";
import './App.css';
import Message from "./Message";



function App() {

  const [input, setInput] = useState("");  
  const [messages, setMessages] = useState([ 
    {username: 'simona', text: 'hello guys!'},
    {username: 'yawar',  text: 'hi simona!'}, 
  ]);
  const [username, setUsername] = useState("");

  //useState - variable in react, "short time memory" //
  //useEffect - run a code on a condition. //
  // 2 most powerful hooks: useState + useEffect. //

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
      //all the logic to send a message goes here.
      event.preventDefault();
      setMessages([
        ...messages, {username: username, text: input}
      ]);
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
          <Message username={message.username} text={message.text}/>
        ))
      }
    </div>
  );
}

export default App;
