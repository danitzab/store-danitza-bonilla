import React from 'react';
import { AppRoutes } from '../routes/AppRoutes';
import { StoreContextProvider } from '../contexts/StoreContextProvider';

function App() {
  return (
    <StoreContextProvider>
      <div>
        <AppRoutes />
      </div>
    </StoreContextProvider>
  );
}

export default App;
