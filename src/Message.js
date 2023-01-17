import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import "./Message.css";

function Message({ message, username }) {
  const isUser = username === message.username;
   
  
  return (
      <div className={`message__card ${isUser && 'message__user'}`}>
        <Card className={isUser ? "message__userCard" : "message__guestCard"}>
          <CardContent>
            <Typography
              color="white"
              variant="h5"
              component="h2"
            >
              {!isUser && `${message.username || 'Unknow user'}: `} {message.message}
            </Typography>
          </CardContent>
        </Card>
      </div>
  )
  }

export default Message;