import React, { useState } from 'react';

import Header from './components/Header';
import Login from './components/Login';
import UserList from './components/UserList';


const App = () => {
    const [name, setName] = useState();
    const [isLogin, setIsLogin] = useState(false);

    if (!isLogin) {
        return (
            <Login 
                name={name}
                setName={setName}
                login={isLogin}
                setIsLogin={setIsLogin}
            />
        )
    }
    
    return (
        <div className="App">
            <Header name={name}/>
            <UserList/>
        </div>
    );
}

export default App;
