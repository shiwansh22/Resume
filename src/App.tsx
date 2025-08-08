// // src/App.tsx
// import React from 'react';
// import ResumeSite from './ResumeSite';
// import './index.css';

// const App: React.FC = () => {
//   return <ResumeSite />;
// };

// export default App;
// src/App.tsx (updated code)
import React from 'react';
import ResumeSite from './ResumeSite'; // Import your component
import './index.css'; // Make sure this is imported for global styles

const App: React.FC = () => {
  return <ResumeSite />;
};

export default App;