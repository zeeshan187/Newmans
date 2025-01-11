import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0' }}>
      {children}
    </div>
  );
};

export default Wrapper;
