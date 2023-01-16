import { Typography, CardContent, Card } from '@mui/material';
import React from 'react';

function Message(props) {
  return (
       <Card>
         <CardContent>
           <Typography
           color="white"
           variant="h5"
           component="h2"
           >
            {props.username} : {props.text}
           </Typography>
         </CardContent>
       </Card>
  )
}

export default Message;