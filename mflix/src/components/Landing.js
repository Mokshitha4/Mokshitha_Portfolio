import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';
import '../styles/Landing.css';

const Landing = ({ onProfileSelect }) => {
  const profiles = [
    {
      id: 'work',
      title: 'Work',
      image: 'https://i.imgur.com/8qW1buP.jpg', // Placeholder image
      description: 'Professional experience & roles'
    },
    {
      id: 'projects',
      title: 'Projects',
      subtitle: 'Mflix Originals',
      image: 'https://i.imgur.com/LEZ8E3h.jpg', // Placeholder image
      description: 'Featured projects & applications'
    },
    {
      id: 'hackathons',
      title: 'Hackathon Diaries',
      image: 'https://i.imgur.com/aRT8My7.jpg', // Placeholder image
      description: 'Hackathon adventures & challenges'
    },
    {
      id: 'personal',
      title: 'What Makes Me, Me',
      subtitle: 'Special Features',
      image: 'https://i.imgur.com/L9bDVEA.jpg', // Placeholder image
      description: 'Hobbies & personal interests'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div className="landing-container">
      <h1 className="landing-title">Who's Browsing?</h1>
      <motion.div 
        className="profiles-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {profiles.map(profile => (
          <ProfileCard 
            key={profile.id}
            profile={profile}
            onClick={() => onProfileSelect(profile.id)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Landing;