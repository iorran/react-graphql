import React, { useMemo } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Skeleton from '@material-ui/lab/Skeleton';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Message from "../../components/Message";
import { IMessage } from "../../models/message";
import { Box } from "@material-ui/core";

const GET_ALL_MESSAGES = gql`
  query {
    findAllMessages {
      id
      content,
      user {
        id,
        email
      }
    }
  }
`;

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Board() {
  const { loading, error, data } = useQuery(GET_ALL_MESSAGES);

  const messages = useMemo<IMessage[]>(() => {
    return data?.findAllMessages;
  }, [data]);

  return ( 
    <Box 
      display="flex" 
      alignItems="center" 
      flexDirection="column">
        {loading && (
          <Skeleton variant="rect" width={210} height={118} />
        )}
        {messages?.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        {error && (
          <Alert severity="error">{JSON.stringify(error)}</Alert>
        )}
    </Box>
  );
}
