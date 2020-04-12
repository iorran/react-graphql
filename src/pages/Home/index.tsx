import React, { useState, useEffect } from "react";

import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { History } from "history";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

type Props = {
  history: History;
};

export const CREATE_USER = gql`
  mutation($email: String!) {
    createUser(email: $email) {
      id
      email
    }
  }
`;

export default function Home({ history }: Props) {
  const [email, setEmail] = useState("");
  const [createUser, { data }] = useMutation(CREATE_USER);

  useEffect(() => {
    if (data) {
      const {
        createUser: { id },
      } = data;
      history.push("/dashboard", { id });
    }
  }, [data, history]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleLogin = async () => {
    if (!email) {
      return;
    } 
    createUser({ variables: { email } });
    setEmail("");
  };

  return (
    <Box 
      display="flex" 
      height="100vh" 
      justifyContent="center" 
      alignContent="center" 
      flexDirection="column">
      <Box 
        display="flex"   
        justifyContent="center" 
        alignContent="center" 
        padding={1}>
        <TextField
          id="email"
          label="Email"
          value={email}
          fullWidth
          onChange={handleChange}
        />
      </Box>
      <Box 
        display="flex"  
        padding={1}>
        <Button 
          onClick={handleLogin} 
          variant="contained" 
          color="primary"
          fullWidth>
          Login
        </Button>
      </Box>
    </Box>
  );
}
