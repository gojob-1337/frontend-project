/**
 * Definition of application state
 */
export interface IState {
    email?: string;
    isAuth: boolean;
    isPending: boolean;
    loginSuccess: boolean;
    loginError: boolean;
    message?: string;
};
/**
 * Applications default state
 */
export const defaultState: IState = {
    email: '',
    isAuth: false,
    isPending: false,
    loginSuccess: false,
    loginError: false,
    message: ''
};
