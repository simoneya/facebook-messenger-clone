import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

import { Container } from './styles';

const Message = forwardRef(({ message, username }, ref) => {

  const isUser = username === message.username;

  return (
    <Container>
      <div ref={ref} className={`message__card ${isUser && 'message__user'}`}>
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
    </Container>
  )
})

export default Message;