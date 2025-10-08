import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContentRow from './ContentRow';
import Hero from './Hero';
import '../styles/ProfileContent.css';

const ProfileContent = ({ profileId, data, onItemClick, filters, onFilterChange }) => {
  const [featuredItem, setFeaturedItem] = useState(null);

  // Set featured item based on profile ID when it changes
  useEffect(() => {
    if (data && profileId) {
      // Create profile-specific hero content
      let featuredContent = null;
      
      // Select a featured item based on profile type
      switch(profileId) {
        case 'work':
          if (data.work && data.work.length > 0 && data.work[0].projects.length > 0) {
            featuredContent = {
              title: "Professional Journey",
              image: require('../assets/images/Work background.png'),
              synopsis: "Explore my professional experience and the projects I've worked on throughout my career. From enterprise software to innovative solutions, discover the highlights of my professional path.",
              genres: ["Work Experience", "Professional Growth", "Career"]
            };
          }
          break;
        case 'projects':
          if (data.projects && data.projects.length > 0) {
            featuredContent = {
              title: "Mflix Originals",
              image: require('../assets/images/Projects background.png'),
              synopsis: "Browse my featured projects and applications. These are personal and professional projects showcasing my skills, creativity, and problem-solving approach.",
              genres: ["Projects", "Applications", "Development"]
            };
          }
          break;
        case 'hack':
          if (data.hackathons && data.hackathons.length > 0) {
            featuredContent = {
              title: "Hackathon Diaries",
              image: require('../assets/images/Hacakthons Background.png'),
              synopsis: "Innovation under pressure - these projects were created during intense hackathons, showcasing rapid ideation, development, and presentation skills.",
              genres: ["Hackathons", "Rapid Development", "Competition"]
            };
          }
          break;
        case 'research':
          if (data.research && data.research.length > 0) {
            featuredContent = {
              title: "Research & Publications",
              image: require('../assets/images/Research background.png'),
              synopsis: "Dive into my research interests and academic publications. Exploring the frontiers of knowledge and contributing to technological advancement.",
              genres: ["Research", "Academic", "Publications"]
            };
          }
          break;
        case 'me':
          if (data.personal && data.personal.length > 0) {
            featuredContent = {
              title: "What Makes Me, Me",
              image: require('../assets/images/Me Background.png'),
              synopsis: "Beyond code and career, these are the passions and interests that define me as a person. From travel adventures to creative pursuits, this is my personal side.",
              genres: ["Hobbies", "Interests", "Lifestyle"]
            };
          }
          break;
        default:
          featuredContent = null;
      }
      
      setFeaturedItem(featuredContent);
    }
  }, [profileId, data]);

  // Content based on profile ID
  const renderProfileContent = () => {
    switch (profileId) {
      case 'work':
        return (
          <>
            {data.work && data.work.map((category, index) => (
              <ContentRow
                key={index}
                title={category.company}
                items={category.projects}
                onPosterClick={onItemClick}
              />
            ))}
          </>
        );
      
      case 'projects':
        return (
          <>
            <ContentRow
              title="Featured Projects"
              items={data.projects || []}
              onPosterClick={onItemClick}
              isLargeRow={true}
            />
            <ContentRow
              title="Web Applications"
              items={(data.projects || []).filter(item => item.category === "web")}
              onPosterClick={onItemClick}
            />
            <ContentRow
              title="Mobile Applications"
              items={(data.projects || []).filter(item => item.category === "mobile")}
              onPosterClick={onItemClick}
            />
          </>
        );
      
      case 'hack':
        return (
          <>
            <ContentRow
              title="Hackathon Projects"
              items={data.hackathons || []}
              onPosterClick={onItemClick}
              isLargeRow={true}
            />
          </>
        );
      
      case 'research':
        return (
          <>
            <ContentRow
              title="Research Papers"
              items={data.research || []}
              onPosterClick={onItemClick}
              isLargeRow={true}
            />
          </>
        );
      
      case 'me':
        return (
          <>
            <ContentRow
              title="Hobbies & Interests"
              items={data.personal || []}
              onPosterClick={onItemClick}
              isLargeRow={true}
            />
          </>
        );
      
      default:
        return <div>Select a profile to view content</div>;
    }
  };
  
  // Define animation variants for content
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="profile-content">
      {/* Hero section with the featured item */}
      {featuredItem && (
        <Hero 
          featuredItem={featuredItem} 
          onButtonClick={onItemClick} 
          buttonText="More Info"
        />
      )}
      
      <motion.div 
        className="content-container"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        {renderProfileContent()}
      </motion.div>
    </div>
  );
};

export default ProfileContent;