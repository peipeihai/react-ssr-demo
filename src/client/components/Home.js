import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                Home Component!
                <button onClick={() => console.log('click me')}>click me!</button>
            </div>
        );
    }
   
};

module.exports = Home;