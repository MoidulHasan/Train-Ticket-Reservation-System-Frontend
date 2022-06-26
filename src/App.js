import { useState } from 'react';
import './App.css';

import ContextProvider from "./context";
import From from './pages/form';


function App() {

  return (
    <ContextProvider>
      <From />
    </ContextProvider>
  );
}

export default App;

