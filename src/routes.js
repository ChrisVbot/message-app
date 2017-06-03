import React from 'react';
import { Router, Route } from 'react-router';
import MessageList from './components/MessageList'
import MessageDetail from './components/MessageDetail';
import NewMessage from './components/NewMessage';

import App from './App';
// import MessageDetail from './components/MessageDetail';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component ={App} />
        <Route path="/messages/" component={MessageList} />
        <Route path="/messages/new" component={NewMessage} />
        <Route path="/messages/:id" component={MessageDetail} />
    </Router>
);

export default Routes;