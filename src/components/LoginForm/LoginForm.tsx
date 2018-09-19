import * as React from 'react';

import { hot } from 'react-hot-loader';

import Input from '../Input';

export type LoginFormProps = {
    //callback
    
};

export type LoginFormState = {
};

export class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  state: LoginFormState = {};
  
  render() {
    return (
        <div className="loginForm">
            <Input
                placeholder="Login" 
            />

            <Input 
                defaultValue="" 
                placeholder="Password" 
                type="password" 
            />

            <Input 
                className="sendInput" 
                defaultValue="Send" 
                type="button" 
                onClick={() => alert('sendRequest')} 
            />
        </div>
        );
    }
}

export default hot(module)(LoginForm);