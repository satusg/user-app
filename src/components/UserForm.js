import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
function UserForm({ refreshUserGrid  }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [preferences, setPreferences] = useState("");
    const [affiliate, setAffiliate] = useState("false");

    const handleSubmit = (event) => {
        event.preventDefault();

        // Convierte el string de preferencias en una lista de números
        const preferencesList = preferences;

        // Crea el objeto usuario
        const user = {
            name: name,
            email: email,
            preferences: preferencesList,
            affiliate: affiliate === "true",
        };

        // Enviar la solicitud POST a la API
        fetch('http://127.0.0.1:8000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            refreshUserGrid();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control 
                  type="text" 
                  placeholder="Introduce tu nombre" 
                  value={name} 
                  onChange={e => setName(e.target.value)}
                  required
              />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control 
                  type="email" 
                  placeholder="Introduce tu email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)}
                  required
              />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>Preferencias:</Form.Label>
              <Form.Control 
                  type="text" 
                  placeholder="Introduce tus preferencias" 
                  value={preferences} 
                  onChange={e => setPreferences(e.target.value)}
                  required
              />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Check 
                  type="checkbox" 
                  label="Afiliado"
                  checked={affiliate} 
                  onChange={e => setAffiliate(e.target.checked)}
              />
          </Form.Group>

          <Button variant="primary" type="submit">
              Submit
          </Button>
      </Form>
  );
}

export default UserForm;
