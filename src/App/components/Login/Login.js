import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Login.css';

const Login = ({ name, setName, setIsLogin }) => {

    const setLoginName = (event) => {
        setName(event.target.value);
    }

    const loginHandler = (event) => {
        if (name !== '') {
            setIsLogin(true);
        } 
        else {
            alert('Please enter your name');
        }
        event.preventDefault();
    }

    return(
        <Container className="login-container">
            <Form className="login-form" onSubmit={loginHandler}>
                <Form.Group>
                    <Form.Label>
                        Enter your Name
                    </Form.Label>
                    <Form.Control
                        onChange={setLoginName}
                        type="text" placeholder="name"
                    />
                    <Button
                        className="login-btn"
                        type="submit" 
                        variant="primary"
                    >
                        Login
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default Login;