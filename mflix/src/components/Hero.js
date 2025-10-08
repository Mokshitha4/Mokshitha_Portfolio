import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = ({ featuredItem, onButtonClick, isMainHero = false, buttonText = "More Info" }) => {
  const hasLink = featuredItem?.links && featuredItem.links.length > 0 && featuredItem.links[0]?.url;
  
  return (
    <div className={`hero-section ${isMainHero ? 'main-hero' : 'profile-hero'}`}>
      <div className="hero-backdrop" style={{ backgroundImage: `url(${featuredItem?.image || 'https://i.imgur.com/pTZ2dbc.jpg'})` }}>
        <div className="hero-gradient"></div>
      </div>
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="hero-title">{featuredItem?.title || "Untitled"}</h1>
          {featuredItem?.tagline && <h2 className="hero-tagline">{featuredItem.tagline}</h2>}
          <p className="hero-description">{featuredItem?.synopsis || ""}</p>
          
          <div className="hero-buttons">
            <motion.button 
              className="hero-btn primary"
              onClick={() => onButtonClick(featuredItem)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={buttonText}
            >
              <i className={`fas ${isMainHero ? 'fa-play' : 'fa-info-circle'}`}></i> {buttonText}
            </motion.button>
            
            {hasLink && !isMainHero && (
              <motion.button 
                className="hero-btn secondary"
                onClick={() => window.open(featuredItem.links[0].url, '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Visit site"
              >
                <i className="fas fa-external-link-alt"></i> Visit
              </motion.button>
            )}
          </div>
          
          {featuredItem?.genres && featuredItem.genres.length > 0 && (
            <div className="hero-genres">
              {featuredItem.genres.map((genre, index) => (
                <span key={index} className="hero-genre">{genre}</span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;