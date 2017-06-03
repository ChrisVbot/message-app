import React, { Component } from 'react';
import moment from 'moment';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: {},
        }
    }
    componentDidMount() {
        fetch('https://chrisv-test.herokuapp.com/messages/')
            .then(data => data.json())
            .then(messages => {
                this.setState({
                    messages
                });
            })
    }

    renderMessages(messages) {
       console.log(messages)
    }



    render() {
        if (!this.state.messages.results) {
            return (
                <div>Awaiting messages</div>
            )
        } else {
            return (
                <div>
                    <ul>
                    {this.state.messages.results.map((message) => {
                        return <li key={message.id}>{formatDate(message.date)}, {message.text}</li>
                    })}
                    </ul>
                </div>
            )
        }
       
    }
}

// Helper function to format dates
function formatDate(date) {
    return moment().format('MMMM Do YYY, h:mm a');
}

export default MessageList;