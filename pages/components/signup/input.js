import React from 'react'

class Component extends React.Component {
    constructor(props) {
        super(props);

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(e) {
        this.props.updateEmail(e.target.value);
    }

    handlePasswordChange(e) {
        this.props.updatePassword(e.target.value);
    }
    render() {
        return (
            <div className='inputs'>
                <div className='input'>
                    <input type='text' onChange={this.handleEmailChange} placeholder='email'/>
                </div>

                <div className='input'>
                    <input type='text' onChange={this.handlePasswordChange} placeholder='password'/>
                </div>
            </div>
        )
    }
}

export default Component;