import React from 'react'
import Cookie from 'universal-cookie'

class Secure extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            verified: 'WAIT',
            token: 'WAIT'
        };

        this.verified = this.verified.bind(this);

        this.verified();

        setInterval(this.verified, 10000);
    }

    verified() {
        let cookie = new Cookie();
        let token = cookie.get('logintoken');
        
        let r;

        fetch("http://localhost:3000/api/verified?token=" + token)
            .then(res => res.json())
                .then((result) => {
                    console.log(result.result);
                    r = result.result;
                }).then(() => {
                    this.setState({
                        verified: r.toString(),
                        token: token
                    });
                });

        
        

        console.log(this.state.token);
        console.log(this.state.verified);
    }

    render() {
        

        return (
            <div>
                <h1>Key: {this.state.token}</h1>
                <h1>Verified: {this.state.verified}</h1>
            </div>
        )
    }
}

export default Secure;