import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Portfolio from '../pages/portfolio/Portfolio';
import Servicos from '../pages/services/Services';
import Sobre from '../pages/aboutUs/AboutUs';
import Contato from '../pages/contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Servicos />} />
        <Route path="/aboutus" element={<Sobre />} />
        <Route path="/contact" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
