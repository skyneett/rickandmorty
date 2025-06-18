import React from "react";

const Footer = () => (
  <footer style={{ background: '#111827', color: 'white', textAlign: 'center', padding: '1rem', marginTop: '2rem' }}>
    <p>© {new Date().getFullYear()} Rick and Morty App. Todos los derechos reservados.</p>
  </footer>
);

export default Footer;
