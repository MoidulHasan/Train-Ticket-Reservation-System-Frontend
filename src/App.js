import { useState } from 'react';
import './App.css';

import contextProvider from "./context";
import From from './pages/form';

function App() {

  return (
    <contextProvider>
      <From />
    </contextProvider>
  );
}

export default App;

