import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: {},
            results: []
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount() {
        fetch('https://chrisv-test.herokuapp.com/messages/')
            .then(data => data.json())
            .then(messages => {
                this.setState({
                    messages,
                    results: messages.results
                });
            })
    }

    renderMessages(messages) {
       console.log(messages)
    }


    handleDelete(messageID) {
        fetch(`https://chrisv-test.herokuapp.com/messages/${messageID}`, {
            method: 'DELETE',
        }).then(response => this.removeDeletedMessages(messageID));
    }

    removeDeletedMessages(messageID) {
        // Filters out the deleted message and sets state with filtered result
        const filteredMessages = this.state.messages.results.filter((message) => 
            message.id !== messageID
        );
        this.setState({
            results: filteredMessages
        });
    }

    render() {
        if (!this.state.results) {
            return (
                <div>Awaiting messages</div>
            )
        } else {
            return (
                <div>
                    {this.state.results.map((message) => {
                        return (
                            <div key={message.id}>
                                {formatDate(message.created_at)}: {message.text}
                                <p>
                                    <Link to={`/messages/${message.id}`}>Click for details</Link>
                                </p>
                                <button onClick={() => {
                                    this.handleDelete(message.id)}}>Delete</button>
                            </div>)
                    })}
                </div>
            )
        }
       
    }
}

// Helper function to format date
function formatDate(date) {
    return moment(date).format('MMMM Do YYYY, h:mm a');
}

export default MessageList;