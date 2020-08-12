import React, { Component } from 'react';
import './UserList.css';
import { Container, Row, Col } from 'react-bootstrap';

import UserItem from '../UserItem/UserItem';
import Error from '../Error/Error';
import AgeFilterService from '../FilterService/AgeFilterService';
import NameFilterService from '../FilterService/NameFilterService';

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

    handlerSort = (value) => {
        this.setState({
            users: value
        })
    }
    

    render() {
        if(this.state.hasError) {
            return <Error error={this.state.error} />
        }
        return(
            <Container fluid>
                <Row>
                    <Col 
                        className="filter"
                        xs={3} 
                        md={2}
                        >
                        <div className="sort">
                            <h4>FILTER</h4>
                            <AgeFilterService 
                                users={this.state.users}
                                handlerSort={this.handlerSort}
                            />
                            <NameFilterService 
                                users={this.state.users}
                                handlerSort={this.handlerSort}
                            />
                        </div>
                    </Col>
                    <Col 
                        className="friends-list" 
                        xs={9} 
                        md={10}>
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