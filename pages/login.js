import React from 'react'
import Cookie from 'universal-cookie'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.submit = this.submit.bind(this);
    }

    updateUsername(e) {
        this.setState({ username: e.target.value });
    }

    updatePassword(e) {
        this.setState({ password: e.target.value });
    }

    submit() {
        let cookie = new Cookie();
        console.log('http://localhost:3000/api/login?email=' + this.state.username + '&password=' + this.state.password);
        fetch('http://localhost:3000/api/login?email=' + this.state.username + '&password=' + this.state.password)
            .then(res => res.json())
            .then((response) => {
                console.log(response.result);
                cookie.set('logintoken', response.result, { maxAge: 60 })
            });

    }

    render() {
        return (
            <center>
                <div className='login'>
                    <input className='username' onChange={this.updateUsername} placeholder='username' /> <br></br>
                    <input className='password' onChange={this.updatePassword} placeholder='password' /> <br></br>
                    <div className='button' onClick={this.submit}>Log In</div>
                </div>
            </center>
        )
    }
}

export default Login;