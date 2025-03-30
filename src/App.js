import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Hero from './components/Hero.jsx';
import Specials from './components/Specials.jsx';
import Testimonials from './components/Testimonials.jsx';
import About from './components/About.jsx'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="header-container">
        <div className="header-content">
          <Header />
          <Nav />
        </div>
      </header>

      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
