import React from 'react';
import { AppRoutes } from '../routes/AppRoutes';
import { StoreContextProvider } from '../contexts/StoreContextProvider';

import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <ToastProvider>
      <StoreContextProvider>
        <AppRoutes />
      </StoreContextProvider>
    </ToastProvider>
  );
}

export default App;
