import { Button } from "@mui/material";
import React, { useState } from "react";
import './App.css';



function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

    console.log(input);
    console.log(messages);

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
         <input value={input} onChange={event => setInput(event.target.value)}/>
         <Button variant="outlined" type="submit" onClick={sendMessage}>Send Message</Button>
      </form>
      
      {/* messages themselves */}

      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
