import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-image">
          <img src="./assets/restaurant.jpg" alt="Little Lemon Resturant" loading="lazy" />
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>123 Lemon Street</p>
          <p>Chicago, IL</p>
          <p>(312) 555-0199</p>
          <p>contact@littlelemon.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h4>Social Media</h4>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
