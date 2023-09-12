import React, { ChangeEventHandler, useState } from 'react';
import { FormControl, Button, Link, Label, Text, Input } from '../../uiComponents';
import {
  Wrapper,
  CenteredWrapper,
  LoginFormWrapper,
  LoginFormContentWrapper,
} from './Login.styles';

const handleSignIn = async ({ email, password }: { email: string; password: string }) => {
  const SIGN_IN_URL = 'http://127.0.0.1:3001/login';

  const response = await fetch(SIGN_IN_URL, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if (response.ok) {
    const result = await response.json();

    console.log(result);
  }
};

export const Login = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isPassword, setIsPassword] = useState(true);

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = event => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = event => {
    setPasswordValue(event.target.value);
  };

  const handleShowPassword = () => setIsPassword(value => !value);

  return (
    <Wrapper>
      <LoginFormWrapper>
        <LoginFormContentWrapper>
          <form id="login-form">
            <FormControl>
              <Label htmlFor="email-input">
                Email
              </Label>
              <Input type="email" id="email-input" onChange={handleEmailChange} placeholder='email' />
            </FormControl>
            <FormControl>
              <Label htmlFor="password-input">
                Password
              </Label>
              <Input type={isPassword ? 'password' : 'text'} id="password-input" onChange={handlePasswordChange} placeholder='password' />
              <Button onClick={handleShowPassword}>Show/Hide Password</Button>
            </FormControl>
          </form>
          <Link href="#">
            <Button onClick={(e) => {
              e.preventDefault();
              handleSignIn({ email: emailValue, password: passwordValue })
            }}>
              <Text color="#fff">Sign in</Text>
            </Button>
          </Link>
          </LoginFormContentWrapper>
      </LoginFormWrapper>
      <CenteredWrapper />
    </Wrapper>
  );
};
