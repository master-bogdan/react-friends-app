import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import Login from '../Login/Login';
import UserList from '../UserList/UserList';


class App extends Component {
    // getUsers = new UsersService();
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            login: false
        };
    }

    handleLogin = (nameValue, loginValue) => {
        console.log(nameValue, loginValue);
        this.setState({ name: nameValue })
        this.setState({ login: loginValue })
    }

    render() {
        if (!this.state.login) {
            return (
                <Login 
                    handleLogin={this.handleLogin} 
                    name={this.state.name}
                    login={this.state.login}
                />
            )
        } else {
            return (
                <div className="App">
                    <Header name={this.state.name}/>
                    <UserList/>
                </div>
            );
        }
    }
}

export default App;
