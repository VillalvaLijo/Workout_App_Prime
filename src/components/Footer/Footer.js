import React from 'react';
import './Footer.css'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer>
    {/* &copy; Apex Athletics */}
    {/* &copy; Victory Athletics */}
    {/* &copy; Triumph Fitness */}
    {/* &copy; Victory Fitness */}
    &copy; Apex Systems

  </footer>
);

export default Footer;
