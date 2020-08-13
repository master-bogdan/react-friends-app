import React, { Component } from 'react';
import './UserItem.css';
import { Card } from 'react-bootstrap';

export default class UserItem extends Component {
    render() {
        return (
            <Card>
                {this.props.gender === "MALE" 
                    ? <Card.Title className="card-title-male"
                    >{this.props.name}</Card.Title>
                    : <Card.Title
                    >{this.props.name}</Card.Title>
                }
                <Card.Body>
                    <Card.Img variant="top" src={this.props.image} />
                    <Card.Text>{this.props.gender}</Card.Text>
                    <Card.Text>{this.props.age}</Card.Text>
                    <Card.Text>{this.props.city}</Card.Text>
                    <Card.Text>{this.props.country}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}