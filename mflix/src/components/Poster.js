import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Poster.css';

const Poster = ({ item, onClick, isLarge = false }) => {
  const posterVariants = {
    hover: {
      scale: 1.1,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className={`poster ${isLarge ? 'poster-large' : ''}`}
      onClick={onClick}
      whileHover="hover"
      variants={posterVariants}
    >
      <div className="poster-image-container">
        <img 
          src={item.image || 'https://via.placeholder.com/300x450/111111/E50914?text=' + item.title} 
          alt={item.title}
          className="poster-image" 
          loading="lazy"
        />
        {item.badge && <span className="poster-badge">{item.badge}</span>}
      </div>
      <div className="poster-info">
        <h3 className="poster-title">{item.title}</h3>
        {item.tagline && <p className="poster-tagline">{item.tagline}</p>}
        {item.genres && (
          <div className="genre-badges">
            {item.genres.slice(0, 3).map((genre, index) => (
              <span key={index} className="genre-badge">{genre}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Poster;