import { Button, FormControl, InputLabel, Input } from "@mui/material";
import React, { useState } from "react";
import './App.css';
import Message from "./Message";



function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const sendMessage = (event) => {
      //all the logic to send a message goes here.
      event.preventDefault();
      setMessages([...messages, input]);
      setInput('');
  }

  return (
    <div className="App">
      <h1> Hello There!</h1>

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
          <Message text={message}/>
        ))
      }
    </div>
  );
}

export default App;
