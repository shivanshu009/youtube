import React, { useState } from 'react';
import './page.css';
import Modal from './Modal';
import img1 from '../images/Screenshot (238).png'

const smallImages = [
  {
    url: 'https://i.ytimg.com/vi/Unt1IoH_H2Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOquCPs9p-xWnWmBI_VCg-0akMXw',
    title: 'Album 1',
    description: 'Description 1',
    videoId: 'rS3vW3uAXUQ',
  },
  {
    url: img1,
    title: 'Album 2',
    description: 'Description 2',
    videoId: 'rS3vW3uAXUQ',
  },
  {
    url: 'https://i.ytimg.com/vi/8qnVy8QBb90/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBg-pwIYWJ2SMcUInnd3pS7R5Jv3A',
    title: 'Album 3',
    description: 'Description 3',
    videoId: 'rS3vW3uAXUQ',
  },
  {
    url: 'https://i.ytimg.com/vi/YpOCI6d_JkU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXTMFj-_0R7FCVFcPWhJ_3EtDc1w',
    title: 'Album 1',
    description: 'Description 1',
    videoId: 'rS3vW3uAXUQ',
  },
  {
    url: 'https://i.ytimg.com/vi/8DMF0U6xV78/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAa3f295uFGdjXsWdPBUpaeQiUB2g',
    title: 'Album 2',
    description: 'Description 2',
    videoId: 'rS3vW3uAXUQ',
  },
  {
    url: 'https://i.ytimg.com/vi/xLWtmaAV5Mo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQbE7HJVDApz0SB5XNo2FNoQn2Vg',
    title: 'Album 1',
    description: 'Description 1',
    videoId: 'rS3vW3uAXUQ',
  },
  {
    url: 'https://i.ytimg.com/vi/6J9okctVu58/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZWIm4UhGaFk_P7qF8PnPob9E6sg',
    title: 'Album 2',
    description: 'Description 2',
    videoId: 'rS3vW3uAXUQ',
  },
  
  // Add more items as needed...
];

const Container4 = () => {
  const [container3Index, setContainer3Index] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const goToPrevSmallCard = () => {
    setContainer3Index((prevIndex) => (prevIndex === 0 ? smallImages.length - 1 : prevIndex - 1));
  };

  const goToNextSmallCard = () => {
    setContainer3Index((prevIndex) => (prevIndex === smallImages.length - 1 ? 0 : prevIndex + 1));
  };

  const openModal = (videoId) => {
    setCurrentVideoUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentVideoUrl('');
  };

  const visibleCards = 3; // Number of cards visible at a time
  const totalCards = smallImages.length;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="mb-4">Motivational songs</h1>
          <div className="slider-container">
            <i className="arrow left-arrow" onClick={goToPrevSmallCard}></i>
            <div className="slider" style={{ transform: `translateX(-${container3Index * (100 / visibleCards)}%)` }}>
              {smallImages.map((item, index) => (
                <div key={index} className="page-item">
                  <div className="card small-card121 " onClick={() => openModal(item.videoId)}>
                    <img src={item.url} alt={`Small Card ${index + 1}`} className="img-fluid" />
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
            <i className="arrow right-arrow" onClick={goToNextSmallCard}></i>
          </div>
          <div className="nav-buttons d-flex justify-content-between w-100 mt-2">
            <button className="prev-btn btn-sm" onClick={goToPrevSmallCard}>
              <i className="fas fa-chevron-left"></i> Previous
            </button>
            <button className="next-btn btn-sm" onClick={goToNextSmallCard}>
              Next <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={closeModal} videoUrl={currentVideoUrl} />
    </div>
  );
};

export default Container4;
