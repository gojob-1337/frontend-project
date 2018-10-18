import * as React from 'react';
import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { ICredentials } from 'src/models/Credentials';
import { signIn } from 'src/store/actions';
import { State } from 'src/store';
import { IState } from 'src/store/state';

const mapStateToProps = (state: IState) => ({
    user: state.isAuth && !state.isPending ? state.email : '',
    message: state.message,
    loginSuccess: state.loginSuccess,
    loginError: state.loginError
});

const mapDispatchToProps = (dispatch: any) => ({
    handleSubmit: (credentials: ICredentials) => signIn(credentials, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);