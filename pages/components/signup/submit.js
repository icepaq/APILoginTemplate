import React from 'react'

class Component extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick() {
        await this.props.submit();
    }

    render() {
        return (
            <div className='submit' onClick={this.handleClick}>
                <div className='text'>Sign Up</div>
            </div>
        )
    }
}

export default Component;