import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import ProfileContent from './components/ProfileContent';
import HomePage from './components/HomePage';
import Modal from './components/Modal';
import portfolioData from './data/portfolioData';
import './App.css';

function App() {
  // Main state variables according to the new flow
  const [profileKey, setProfileKey] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filters, setFilters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Check localStorage for saved profile on initial load
  useEffect(() => {
    const savedProfile = localStorage.getItem('mflix-profile');
    if (savedProfile) {
      setProfileKey(savedProfile);
    }
  }, []);
  
  // Save profile selection to localStorage when it changes
  useEffect(() => {
    if (profileKey) {
      localStorage.setItem('mflix-profile', profileKey);
    }
  }, [profileKey]);

  // Handle profile selection
  const handleProfileSelect = (key) => {
    setProfileKey(key);
    setSelectedItem(null);
    setIsModalOpen(false);
    
    // Scroll to top when changing profiles
    window.scrollTo(0, 0);
  };
  
  // Handle going to homepage
  const handleHomeClick = () => {
    setProfileKey(null);
    setSelectedItem(null);
    setIsModalOpen(false);
    window.scrollTo(0, 0);
  };
  
  // Handle opening item modal
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  
  // Handle closing modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  // Handle filter changes
  const handleFilterChange = (filterArray) => {
    setFilters(filterArray);
  };

  // Add Netflix-like font
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;400;500;700&display=swap';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="app">
      {/* Header is always present */}
      <Header 
        activeProfile={profileKey}
        onProfileChange={handleProfileSelect}
        onHomeClick={handleHomeClick}
      />
      
      <AnimatePresence mode="wait">
        {!profileKey ? (
          <motion.div
            key="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="page-container"
          >
            <HomePage 
              data={portfolioData} 
              onItemClick={handleItemClick}
              onProfileSelect={handleProfileSelect}
            />
          </motion.div>
        ) : (
          <motion.div
            key={`profile-${profileKey}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="page-container"
          >
            <ProfileContent 
              profileId={profileKey}
              data={portfolioData}
              onItemClick={handleItemClick}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Modal component */}
      <AnimatePresence>
        {selectedItem && isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Modal 
              item={selectedItem}
              isOpen={isModalOpen}
              onClose={handleCloseModal}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
