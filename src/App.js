import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Homepage from './pages/Homepage.jsx';
import BookingPage from './pages/BookingPage.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header-container">
          <div className="header-content">
            <Header />
            <Nav />
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
