import { Link } from 'react-router-dom';
import  './Hero.css'

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button>Reserve a Table</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src="/assets/bruchetta.svg" alt="Bruschetta" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
