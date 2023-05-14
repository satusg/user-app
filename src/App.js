import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserGrid from './components/UserGrid';
import { Container } from 'react-bootstrap';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshUserGrid = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: '1 1 33%', overflow: 'auto' }}>
        <Container>
          <UserForm refreshUserGrid={refreshUserGrid} />
        </Container>
      </div>
      <div style={{ flex: '1 1 66%', overflow: 'auto' }}>
        <Container>
          <UserGrid refreshKey={refreshKey} />
        </Container>
      </div>
    </div>
  );
}

export default App;
