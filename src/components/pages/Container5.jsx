import React, { useState } from 'react';
import './page.css';
import Modal from './Modal';

const smallImages = [
  {
    url: 'https://i.ytimg.com/vi/H0uL9-8nUCk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCq8mMrqecTFBaRxglvlpvUaWuXJw',
    title: 'Album 1',
    description: 'Description 1',
    videoId: 'H0uL9-8nUCk'
  },
 
  {
    url: 'https://i.ytimg.com/vi/CU1tFtk_NFY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1p04dXHwrbfEPskqKcXq4iBhSmA',
    title: 'Album 1',
    description: 'Description 1',
    videoId: 'CU1tFtk_NFY'
  },
  {
    url: 'https://i.ytimg.com/vi/TQR70KKYMmQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjuYpSHfMqgtDerVVmr6ldUCN-lQ',
    title: 'Album 1',
    description: 'Description 1',
    videoId: 'TQR70KKYMmQ'
  },
  {
    url: 'https://i.ytimg.com/vi/_VOXxKDNCuM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAGvissvmMSEeDks7LTFrv1nas3A',
    title: 'Album 1',
    description: 'Description 1',
    videoId: '_VOXxKDNCuM'
  },
  {
    url: 'https://i.ytimg.com/vi/DMCnscq4yHw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAo7mhdYSDorAg39qFhuXiQE-ij2Q',
    title: 'Album 1',
    description: 'Description 1',
    videoId: 'DMCnscq4yHw'
  },
  {
    url: 'https://i.ytimg.com/vi/6cKErCWrb44/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDs19eOVG2fYnfoW63lQ--tsNUsNg',
    title: 'Album 1',
    description: 'Description 1',
    videoId: '6cKErCWrb44'
  },
];

const Container5 = () => {
  const [container4Index, setContainer4Index] = useState(0);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const visibleCards = 3; // Number of cards visible at a time
  const totalCards = smallImages.length;

  const goToNextContainer4Card = () => {
    setContainer4Index((prevIndex) => (prevIndex === totalCards - visibleCards ? 0 : prevIndex + 1));
    setShowPrevButton(true);
  };

  const goToPrevContainer4Card = () => {
    setContainer4Index((prevIndex) => (prevIndex === 0 ? totalCards - visibleCards : prevIndex - 1));
    setShowPrevButton(true);
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="mb-4">Most Played</h1>
          <div className="slider-container">
            <i className="arrow left-arrow" onClick={goToPrevContainer4Card}></i>
            <div className="slider" style={{ transform: `translateX(-${container4Index * (100 / visibleCards)}%)` }}>
              {smallImages.map((item, index) => (
                <div key={index} className="page-item small-card2" onClick={() => openModal(item.videoId)}>
                  <div className="card small-card">
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
            <i className="arrow right-arrow" onClick={goToNextContainer4Card}></i>
          </div>
          <div className="nav-buttons">
            {showPrevButton && (
              <button className="prev-btn" onClick={goToPrevContainer4Card}><i className="fas fa-chevron-left"></i></button>
            )}
            <button className="next-btn" onClick={goToNextContainer4Card}><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={closeModal} videoUrl={currentVideoUrl} />
    </div>
  );
};

export default Container5;
