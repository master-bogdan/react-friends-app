import React, { Component } from 'react';
import './UserList.css';
import { Container, Row } from 'react-bootstrap';

import UserItem from '../UserItem/UserItem';

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.getResource();
    }
    
    
    getResource = () => {
        fetch('https://randomuser.me/api/?results=12&nat=DE,GB,AU&page=1&seed=a')
        .then(data => data.json())
        .then(data => this.setState({users: data.results}));
    }

    sortByAge = () => {
        // let data = [...this.state.users];
        // return data.sort((a, b) =>  a.dob.age - b.dob.age);
        this.setState({users: this.state.users.sort((a, b) =>  a.dob.age - b.dob.age)});
    }

    render() {
        console.log(this.state.users);
        return(
            <Container>
                <button onClick={() => this.sortByAge()}>Sort by age</button>
                <Row>
                    {this.state.users.map((item, index) => { 
                        return <UserItem
                                key={index} 
                                name={`${item.name.first} ${item.name.last}`}
                                image={item.picture.large}
                                gender={`Gender: ${item.gender}`} 
                                age={`Age: ${item.dob.age} years`}
                                city={`City: ${item.location.city}`}
                                country={`Country: ${item.location.country}`}
                                />
                    })}
                </Row>
            </Container>
        )
    }
}