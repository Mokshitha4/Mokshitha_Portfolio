import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import ContentRow from './ContentRow';
import '../styles/HomePage.css';

const HomePage = ({ data, onItemClick, onProfileSelect }) => {
  // Create a featured item for the hero section
  const featuredItem = {
    title: "Mokshitha Mandadi — My Professional Saga",
    image: require('../assets/images/background.png'),
    synopsis: "Explore my professional journey through a Netflix-inspired portfolio. Use the navigation tabs above to browse my work experience, projects, hackathon adventures, research, and personal interests.",
    genres: ["Software Developer", "Innovator", "Problem Solver"]
  };

  // Group items by category for content rows
  const workItems = data.work.flatMap(company => company.projects);
  const projectItems = data.projects;
  const hackathonItems = data.hackathons;
  const personalItems = data.personal;

  // Create sections for special categories
  const techItems = [
    ...workItems.filter(item => 
      item.genres && item.genres.some(genre => 
        ['AI/ML', 'Cloud', 'Data Visualization', 'IoT'].includes(genre)
      )
    ),
    ...projectItems.filter(item => 
      item.genres && item.genres.some(genre => 
        ['AI/ML', 'Cloud', 'Data Visualization', 'IoT'].includes(genre)
      )
    ),
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="homepage">
      {/* Hero Banner */}
      <Hero 
        featuredItem={featuredItem} 
        onButtonClick={() => onProfileSelect("work")} 
        isMainHero={true}
        buttonText="Explore My Portfolio"
      />
      
      {/* Content Rows */}
      <motion.div 
        className="homepage-rows"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Trending Now */}
        <ContentRow 
          title="Trending Now"
          items={[...projectItems.slice(0, 2), ...hackathonItems.slice(0, 2), ...workItems.slice(0, 2)]}
          onPosterClick={onItemClick}
          isLargeRow={true}
        />
        
        {/* Work Experience */}
        <ContentRow 
          title="Professional Journey"
          items={workItems}
          onPosterClick={onItemClick}
        />
        
        {/* Projects */}
        <ContentRow 
          title="Mflix Originals"
          items={projectItems}
          onPosterClick={onItemClick}
        />
        
        {/* Hackathons */}
        <ContentRow 
          title="Hackathon Adventures"
          items={hackathonItems}
          onPosterClick={onItemClick}
        />
        
        {/* Technology Specials */}
        <ContentRow 
          title="Tech Specials"
          items={techItems}
          onPosterClick={onItemClick}
        />
        
        {/* Personal Interests */}
        <ContentRow 
          title="Because You Enjoyed Creativity"
          items={personalItems}
          onPosterClick={onItemClick}
        />
      </motion.div>
      
      {/* Footer */}
      <footer className="netflix-footer">
        <div className="footer-content">
          <div className="footer-logo">Mflix.</div>
          <div className="footer-links">
            <a href="mailto:mokshithamandadi14@gmail.com" aria-label="Contact me">Contact</a>
            <a href="https://docs.google.com/document/d/10A5XEE76xZNedbSMlt4fea2uHbewrTjx/edit?usp=sharing&ouid=115946271941509584747&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" aria-label="View resume">Resume</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/Mokshitha4" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mokshitha-mandadi-652804233/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <p className="copyright">© 2025 Mokshitha Mandadi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;