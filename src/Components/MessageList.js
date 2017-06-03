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
                    {this.state.messages.results.map((message) => {
                        return <div key={message.id}>{formatDate(message.created_at)}, {message.text}</div>
                    })}
                </div>
            )
        }
       
    }
}

function formatDate(date) {
    return moment(date).format('MMMM Do YYYY, h:mm a');
}

export default MessageList;