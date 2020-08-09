import React, {Component} from 'react';
import './Header.css';
import { Navbar } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <Navbar className='header' bg="light" variant="light">
                <Navbar.Brand href="unchor_is_valid">Friends App</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    Signed in as: <a href="unchor_is_valid">{this.props.name}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}