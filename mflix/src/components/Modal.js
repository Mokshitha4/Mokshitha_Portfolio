import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Modal.css';

const Modal = ({ item, isOpen, onClose }) => {
  // Handle clicking outside the modal to close
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      onClose();
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8 
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      transition: { 
        duration: 0.2,
        ease: "easeIn" 
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleBackdropClick}
        >
          <motion.div 
            className="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button className="close-button" onClick={onClose}>✕</button>
            
            <div className="modal-content">
              <div className="modal-header">
                {item.image && (
                  <div className="modal-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                )}
                <div className="modal-header-info">
                  <h2 className="modal-title">{item.title}</h2>
                  {item.tagline && <p className="modal-tagline">{item.tagline}</p>}
                  
                  {item.genres && (
                    <div className="modal-genres">
                      {item.genres.map((genre, index) => (
                        <span key={index} className="modal-genre">{genre}</span>
                      ))}
                    </div>
                  )}
                  
                  {item.date && <p className="modal-date">{item.date}</p>}
                </div>
              </div>
              
              <div className="modal-body">
                {item.synopsis && (
                  <div className="modal-synopsis">
                    <h3>Synopsis</h3>
                    <p>{item.synopsis}</p>
                  </div>
                )}
                
                {item.episodes && item.episodes.length > 0 && (
                  <div className="modal-episodes">
                    <h3>Episodes</h3>
                    <ul>
                      {item.episodes.map((episode, index) => (
                        <li key={index} className="episode-item">
                          <div className="episode-info">
                            <h4>{episode.title}</h4>
                            <p>{episode.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {item.links && item.links.length > 0 && (
                  <div className="modal-links">
                    <h3>Links</h3>
                    <div className="links-container">
                      {item.links.map((link, index) => (
                        <a 
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-button"
                        >
                          {link.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;