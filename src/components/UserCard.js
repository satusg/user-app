import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// Asumiendo que tienes un objeto de esta forma para mapear las preferencias a imágenes


function UserCard({ user }) {
  return (
    <Card bg={user.affiliate ? "success" : "secondary"} text="white" style={{ width: '18rem', marginBottom: '1rem' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          <a href={`mailto:${user.email}`} style={{ color: 'inherit' }}>{user.email}</a>
        </Card.Text>
        <ListGroup variant="flush">
          {user.preferences.sort().map(preference => (
            <ListGroup.Item key={preference}>
              <span>{preference}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
