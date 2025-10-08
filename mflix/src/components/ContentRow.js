import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Poster from './Poster';
import '../styles/ContentRow.css';

const ContentRow = ({ title, items = [], onPosterClick, isLargeRow = false }) => {
  const rowRef = useRef(null);

  // Don't render if there are no items
  if (items.length === 0) {
    return null;
  }

  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className={`content-row ${isLargeRow ? 'large-row' : ''}`}>
      <h2 className="row-title">{title}</h2>
      <div className="row-container">
        {items.length > 4 && (
          <button className="scroll-button left" onClick={scrollLeft}>
            &lt;
          </button>
        )}
        <div className="posters-container" ref={rowRef}>
          {items.map((item, index) => (
            <Poster 
              key={index} 
              item={item} 
              onClick={() => onPosterClick(item)}
              isLarge={isLargeRow}
            />
          ))}
        </div>
        {items.length > 4 && (
          <button className="scroll-button right" onClick={scrollRight}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentRow;