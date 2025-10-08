import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Header.css';

const Header = ({ activeProfile, onProfileChange, onHomeClick }) => {
  const profiles = [
    { key: "work", label: "Work" },
    { key: "projects", label: "Projects" },
    { key: "hack", label: "Hackathon Diaries" },
    { key: "research", label: "Research" },
    { key: "me", label: "Me" }
  ];

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-left">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onHomeClick}
        >
          M
        </motion.div>
        <h1 onClick={onHomeClick}>Mflix.</h1>
      </div>
      
      <nav className="header-nav">
        <ul className="profile-tabs">
          {profiles.map((profile) => (
            <li key={profile.key}>
              <button
                className={`profile-tab ${activeProfile === profile.key ? 'active' : ''}`}
                onClick={() => onProfileChange(profile.key)}
                aria-pressed={activeProfile === profile.key}
              >
                {profile.label}
                {activeProfile === profile.key && (
                  <motion.div 
                    className="active-indicator"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="header-right">
        <button className="icon-button" onClick={onHomeClick} aria-label="Home">
          <i className="fas fa-home"></i>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;