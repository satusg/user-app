import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import { Card, Container, Row, Col, Spinner } from 'react-bootstrap';

function UserGrid({ refreshKey }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('http://127.0.0.1:8000/users')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data['users'])) {
                    setUsers(data['users']);
                } else {
                    throw new Error('Unexpected response data');
                }
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [refreshKey]); // Dependencia agregada

    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        );
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <Container fluid>
            <Row>
                {users.map(user => (
                    <Col md={4} key={user.email} className="mb-4">
                        <UserCard user={user} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default UserGrid;
