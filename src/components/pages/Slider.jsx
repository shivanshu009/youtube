import React, { useState,useEffect } from 'react';
// import './Slider.css'; // Assuming you have CSS styles for your slider
import Modal from './Modal'; // Import the Modal component
import './page.css'; // Assuming you have CSS styles for your slider

const images = [
  {
    url: 'https://i.ytimg.com/vi/pQQ3YE5psj0/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhlIFEoRTAP&rs=AOn4CLC1Ai1dd__9yrulSrlhtipqwM8jbw',
    title: 'Title 1',
    description: 'Description 1',
    videoId: 'pQQ3YE5psj0'
    // Add the corresponding video ID for each image
  },
  {
    url: 'https://i.ytimg.com/vi/rS3vW3uAXUQ/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhlIFAoSTAP&rs=AOn4CLD2UtYLciQwlKeLgjySqlkvcRtfUw',
    title: 'Title 1',
    description: 'Description 1',
    videoId: 'rS3vW3uAXUQ' // Add the corresponding video ID for each image
  },
  {
    url: 'https://i.ytimg.com/vi/9-gu94yT0ag/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBELwLH-KmhVVAqxALcSreg1ImTUQ',
    title: 'Title 1',
    description: 'Description 1',
    videoId: '9-gu94yT0ag' // Add the corresponding video ID for each image
  },
  {
    url: 'https://i.ytimg.com/vi/8qnVy8QBb90/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBg-pwIYWJ2SMcUInnd3pS7R5Jv3A',
    title: 'Title 1',
    description: 'Description 1',
    videoId: '8qnVy8QBb90' // Add the corresponding video ID for each image
  },
  {
    url: 'https://i.ytimg.com/vi/YpOCI6d_JkU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXTMFj-_0R7FCVFcPWhJ_3EtDc1w',
    title: 'Title 1',
    description: 'Description 1',
    videoId: 'YpOCI6d_JkU' // Add the corresponding video ID for each image
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

    useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNextCard();
    },2000 );

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex]);
  const goToPrevCard = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  const goToNextCard = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const openModal = (videoId) => {
    setCurrentVideoUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentVideoUrl('');
  };

  return (
    <div className="slider-container">
      <i className="fas fa-chevron-left arrow left-arrow" onClick={goToPrevCard}></i>
      
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 30}%)`, transition: 'transform 0.7s ease-in-out' }}>
        {images.map((item, index) => (
          <div key={index} className="page-item" onClick={() => openModal(item.videoId)}>
            <div className="card card1 img">
              <img src={item.url} alt={`Card ${index + 1}`} />
              <div className="overlay">
                <div className="overlay-content">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>  
          </div>
        ))}
      </div>
      <i className="fas fa-chevron-right arrow right-arrow" onClick={goToNextCard}></i>

      {/* Modal */}
      <Modal show={showModal} onClose={closeModal} videoUrl={currentVideoUrl} />
    </div>
  );
};

export default Slider;
