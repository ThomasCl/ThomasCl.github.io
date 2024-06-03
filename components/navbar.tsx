import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Wie is wie</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'Teal',
    padding: '10px',
    textAlign: 'center' as const,
    marginBottom: '20px',
  },
  title: {
    color: 'white',
    margin: 0,
  },
};

export default Header;