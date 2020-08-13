import React, {Component} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            login: false
        };
    }

    setName = (event) => {
        this.setState({ name: event.target.value})
    }

    onLogin = (event) => {
        if(this.state.name !== '') {
            this.setState({ login: true });
            this.props.handleLogin(this.state.name, true);
        } 
        else 
        {
            alert('Please enter your name');
        }
        event.preventDefault();
    }

    render() {
        return(
            <Container className="login-container">
                <Form className="login-form" onSubmit={this.onLogin}>
                    <Form.Group>
                        <Form.Label>Enter your Name</Form.Label>
                        <Form.Control
                            onChange={this.setName}
                            type="text" placeholder="name"/>
                        <Button
                            className="login-btn"
                            type="submit" 
                            variant="primary">
                            Login
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
    
}

export default Login;