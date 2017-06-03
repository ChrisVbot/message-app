import React from 'react';
import moment from 'moment';

const Message = (props) => 
    <li>{formatDate(props.date)}, {props.text}</li>


function formatDate(date) {
    return moment().format('MMMM Do YYYY, h:mm a');
}

export default Message;