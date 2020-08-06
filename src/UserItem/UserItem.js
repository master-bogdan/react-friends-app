import React, { Component } from 'react';
import './UserItem.css';
import { Card } from 'react-bootstrap';

export default class UserItem extends Component {
    render() {
        return (
            <Card>
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>{this.props.gender}</Card.Text>
                    <Card.Text>{this.props.age}</Card.Text>
                    <Card.Text>{this.props.city}</Card.Text>
                    <Card.Text>{this.props.country}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}