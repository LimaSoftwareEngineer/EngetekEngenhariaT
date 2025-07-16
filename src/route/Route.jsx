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
        <Route path="/Home" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Services" element={<Servicos />} />
        <Route path="/AboutUs" element={<Sobre />} />
        <Route path="/Contact" element={<Contato />} />
      </Routes>
    </Router>
  );
}
 
export default App;