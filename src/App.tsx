import { useState } from 'react';

import { Home, Dashboard, Onboarding } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/onboarding" element={<Onboarding />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
