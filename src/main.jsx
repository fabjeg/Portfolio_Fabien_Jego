import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from './components/container/container.jsx';
import '../i18n.js'; 
import '../style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Container />
    </Router>
  </StrictMode>
);
