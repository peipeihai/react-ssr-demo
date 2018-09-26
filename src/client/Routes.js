import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
        </div>
    );
};