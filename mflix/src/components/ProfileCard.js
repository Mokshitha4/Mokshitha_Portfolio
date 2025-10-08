import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ProfileCard.css';

const ProfileCard = ({ profile, onClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 20px rgba(0,0,0,0.15)"
    },
    tap: { 
      scale: 0.95 
    }
  };

  return (
    <motion.div 
      className="profile-card"
      onClick={onClick}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
    >
      <div className="profile-image-container">
        <img src={profile.image} alt={profile.title} className="profile-image" />
      </div>
      <div className="profile-info">
        <h3 className="profile-title">{profile.title}</h3>
        {profile.subtitle && <p className="profile-subtitle">{profile.subtitle}</p>}
        <p className="profile-description">{profile.description}</p>
      </div>
    </motion.div>
  );
};

export default ProfileCard;