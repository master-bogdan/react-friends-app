import React from 'react';
import './UserItem.css';
import { Card } from 'react-bootstrap';

const UserItem = ({ gender, name, image, age, city, country }) => {

    return (
        <Card>
            {gender === "MALE" 
                ? <Card.Title className="card-title-male"
                >{name}</Card.Title>
                : <Card.Title
                >{name}</Card.Title>
            }
            <Card.Body>
                <Card.Img variant="top" src={image} />
                <Card.Text>{gender}</Card.Text>
                <Card.Text>{age}</Card.Text>
                <Card.Text>{city}</Card.Text>
                <Card.Text>{country}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default UserItem;