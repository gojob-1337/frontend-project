import * as React from 'react';
import { ICredentials } from 'src/models/Credentials';

interface IProps {
    handleSubmit(credentials: ICredentials): void;
}

interface IState {
    email?: string;
    password?: string;
}

export default class LoginForm extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    public render() {
        const { _handleChange, _handleSubmit } = this;
        return(
            <form>
                <label>Adresse email</label>
                <input type='text' name='email' value={this.state.email} onChange={_handleChange} />
                <label>Mot de passe</label>
                <input type='password' name='password' value={this.state.password} onChange={_handleChange} />
                <button type='submit' onSubmit={_handleSubmit}></button>
            </form>
        );
    }

    private _handleChange(e: React.ChangeEvent<any>): void {
        const target = e.target;
        this.setState({[target.name]: target.value});
    }

    private _handleSubmit(e: React.FormEvent<any>): void {
        e.preventDefault();
    
        const email: string = this.state.email ? this.state.email  : '';
        const password: string = this.state.password ? this.state.password : '';

        if ((email && !email.trim()) || (password && !password.trim())) {
        return;
        }

        this.setState({ email: '', password: '' });
        this.props.handleSubmit({ email, password });
    }
}