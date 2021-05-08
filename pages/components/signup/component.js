import React from 'react'
import Input from './input.js'
import Submit from './submit.js'

class Component extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.submit = this.submit.bind(this);
    }

    updateEmail(e) {
        this.setState({email: e});
    }

    updatePassword(e) {
        this.setState({password: e});
    }

    async submit() {
        console.log('Submitting');
        fetch('http://localhost:3000/api/signup?email=' + this.state.email + '&password=' + this.state.password)
        .then(
            (res => res.json()))
                .then( 
                    (result) => {
                        console.log(result.result);
            });
    }

    render() {
        console.log(this.state.email);
        console.log(this.state.password);
        return (
            <div className='box'>
                <h1>Sign Up</h1>

                <Input updateEmail={this.updateEmail} updatePassword={this.updatePassword}/>
                <Submit submit={this.submit}/>
            </div>
        )
    }
}

export default Component;