'use client';

import React, { useEffect } from 'react';

const TestComponent = () => {
  useEffect(() => {
    // Test if the designesia.js functions are available
    if (typeof window !== 'undefined' && window.initTemplate) {
      console.log('Template initialized successfully');
    }
  }, []);

  return (
    <div>
      <h3>Component Test</h3>
      <p>If you can see this text, the component is working correctly.</p>
    </div>
  );
};

export default TestComponent;