import React, {Component} from 'react';
import './Header.css';
import { Navbar } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        let user = 'Bogdan';
        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="unchor_is_valid">Friends App</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    Signed in as: <a href="unchor_is_valid">{user}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}