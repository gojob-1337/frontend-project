import {ICredentials} from 'src/models/Credentials';
import { Dispatch } from 'redux';
/**
 * Application actions
 */
export enum ELoginAction {
    LOGIN_REQUEST = 'LOGIN_REQUEST',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILED = 'LOGIN_FAILED',
}

export interface IActionsLogin {
    type: ELoginAction;
    credentials?: ICredentials;
    email?: string;
    message?: string;
}

export const loginRequest = (credentials: ICredentials): IActionsLogin => {
    return {
        type: ELoginAction.LOGIN_REQUEST,
        credentials
    }
}

export const loginSuccess = (email: string): IActionsLogin => {
    return {
        type: ELoginAction.LOGIN_SUCCESS,
        email
    }
}

export const loginFailed = (message: string): IActionsLogin => {
    return {
      type: ELoginAction.LOGIN_FAILED,
      message
    };
  };
  
  export const signIn = (credentials: ICredentials, dispatch: Dispatch<any>): void => {
    dispatch(loginRequest(credentials));

    fetch('').then(() => {
        return dispatch(loginSuccess(credentials.email));
    }).catch(() => {
        return dispatch(loginFailed('Wrong credentials'));
    });
  };