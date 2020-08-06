import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
// import UsersService from '../Services/UsersService';
import UserList from '../UserList/UserList';

class App extends Component {
    // getUsers = new UsersService();
    constructor(props) {
        super(props);
        this.state = {

        };
        // this.getUsers.getUsers();
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <UserList/>
            </div>
        );
    }
}

export default App;
