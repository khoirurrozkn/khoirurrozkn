import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Animasi from './pages/Animasi';
import Interaktif from './pages/Interaktif';
import Simple from './pages/Simple';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/simple" element={<Simple />} />
        <Route exact path="/interaktif" element={<Interaktif />} />
        <Route exact path="/animasi" element={<Animasi />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
