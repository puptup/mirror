import React from 'react';
import { RouterProvider } from 'react-router-dom';
import browserRouter from 'routers';

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
