import { IState, defaultState } from '../state';
import {ELoginAction, IActionsLogin} from 'src/store/actions';

const replaceMe = (state: IState = defaultState, action: IActionsLogin):IState => {
    switch(action.type){
        case ELoginAction.LOGIN_REQUEST:
            return {
                email: '',
                isAuth: false,
                isPending: false,
                loginSuccess: false,
                loginError: false,
                message: ''
            }
        case ELoginAction.LOGIN_SUCCESS:
            return {
                email: action.email,
                isAuth: true,
                isPending: false,
                loginSuccess: true,
                loginError: false,
                message: ''
            }
        case ELoginAction.LOGIN_FAILED:
            return {
                email: '',
                isAuth: false,
                isPending: false,
                loginSuccess: false,
                loginError: true,
                message: ''
            }
    }
};
/**
 * Application root reducer
 */
export default replaceMe;
