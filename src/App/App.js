import React, { Component } from 'react';

import Header from '../Header/Header';
import Login from '../Login/Login';
import UserList from '../UserList/UserList';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            login: false
        };
    }

    handleLogin = (nameValue, loginValue) => {
        this.setState({ 
            name: nameValue,  
            login: loginValue
         })
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
