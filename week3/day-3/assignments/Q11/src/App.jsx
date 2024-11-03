import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;