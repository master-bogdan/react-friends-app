import React, { Component } from 'react';
import './UserList.css';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { SortUpAlt, SortDownAlt } from 'react-bootstrap-icons';

import UserItem from '../UserItem/UserItem';
import Error from '../Error/Error';

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            hasError: false,
            error: ''
        };
        this.getResource();
    }
    
    
    getResource = () => {
        fetch('https://randomuser.me/api/?results=12&nat=DE,GB,AU&page=1&seed=c')
        .then(data => data.json())
        .then(data => this.setState({users: data.results}))
        .catch(err =>  this.setState({hasError: true, error: `${err}` }))
    }

    sortByYoungestAge = () => {
        this.setState({users: this.state.users.sort((a, b) =>  a.dob.age - b.dob.age)});
    }

    sortByOldestAge = () => {
        this.setState({users: this.state.users.sort((a, b) =>  b.dob.age - a.dob.age)});
    }

    render() {
        if(this.state.hasError) {
            return <Error error={this.state.error} />
        }
        return(
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <div className="sort">
                            <h4>Filter</h4>
                            <div>
                                <p>By Age</p>
                                <ButtonGroup aria-label="Sort By Age">
                                    <Button variant="outline-warning" onClick={() => this.sortByYoungestAge()}><SortDownAlt /></Button>
                                    <Button variant="outline-warning" onClick={() => this.sortByOldestAge()}><SortUpAlt /></Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </Col>
                    <Col className="friends-list" md={9}>
                        {this.state.users.map((item, index) => { 
                            return <UserItem
                                    key={index}
                                    name={`${item.name.first} ${item.name.last}`}
                                    image={item.picture.large}
                                    gender={`${item.gender.toUpperCase()}`} 
                                    age={`Age: ${item.dob.age} years`}
                                    city={`City: ${item.location.city}`}
                                    country={`Country: ${item.location.country}`}
                                    />
                        })}
                    </Col>
                </Row>
            </Container>
        )
    }
}