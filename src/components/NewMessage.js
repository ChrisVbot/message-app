import React, { Component } from 'react';

class NewMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { message } = this.state;

        fetch('https://chrisv-test.herokuapp.com/messages/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
                text: message
            })
        }).then(result => console.log(result));
        

    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Message: 
                        <input type="text" value={this.state.message} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default NewMessage;