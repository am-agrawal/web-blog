import React from 'react';
import { Navbar } from './';

const LayoutV2 = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default LayoutV2;
