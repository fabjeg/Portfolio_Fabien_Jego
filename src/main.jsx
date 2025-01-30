import { StrictMode } from 'react'; // Importe React et StrictMode
import { createRoot } from 'react-dom/client'; // Importe createRoot
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from './components/container/container.jsx';
import '../il8n.js'; // Assure-toi d'importer aussi i18n
import '../style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Container />
    </Router>
  </StrictMode>
);
