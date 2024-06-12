import React, { useState } from 'react';
import './Contact.css';
import Modal from './Modal';

const smallImages = [
  {
    url: 'https://i.ytimg.com/vi/1G0tpiX8uF0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDmCbzMV-0wGuxypgvkhDFIJ02JQ',
    title: 'Album 1',
    description: 'Description 1',
    videoId: 'hYiDSPB1hlI'
  },
  {
    url: 'https://i.ytimg.com/vi/NwDsgqIFJZ4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoQpnqeLOJGo8GL2d-S0OfRLBcXw',
    title: 'Album 1',
    description: 'Description 1',
    videoId: 'NwDsgqIFJZ4'
  },
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
  {
    url: 'https://i.ytimg.com/vi/inEu2qQuGZ8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCR5aYXlaCi5G3YeFkfeWLiFdTpEQ',
    title: 'Album 1',
    description: 'Description 1',
    videoId: 'inEu2qQuGZ8'
  },
  {
    url: 'https://i.ytimg.com/vi/qWnzMwT6SKo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUhgNbnfYGHYDs1sKF7qK7ZBlEzg',
    title: 'Album 1',
    description: 'Description 1',
    videoId: 'qWnzMwT6SKo'
  },
  {
    url: 'https://i.ytimg.com/vi/0Fegb4Ew8SM/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IDEoczAP&rs=AOn4CLAPhfDmGfkcWSSfuo5dLpNC3z55sg',
    title: 'Album 1',
    description: 'Description 1',
    videoId: '0Fegb4Ew8SM'
  },
  {
    url: 'https://i.ytimg.com/vi/Zu61PQyvLf8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjqT2U6TrjEQekkhXM0yh3vYAMuQ',
    title: 'Album 1',
    description: 'Description 1',
    videoId: 'Zu61PQyvLf8'
  },

];

const Container1 = () => {
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [container4Index, setContainer4Index] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const goToNextContainer4Card = () => {
    setContainer4Index((prevIndex) => (prevIndex === smallImages.length - 1 ? 0 : prevIndex + 1));
    setShowPrevButton(true); // Show the previous button when navigating
  };

  const goToPrevContainer4Card = () => {
    setContainer4Index((prevIndex) => (prevIndex === 0 ? smallImages.length - 1 : prevIndex - 1));
    setShowPrevButton(true); // Show the previous button when navigating
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
    <div className="container c contact my-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className='mb-4'>Today's hit</h1>
          <div className="slider-container">
            <i className="arrow left-arrow" onClick={goToPrevContainer4Card}></i>
            <div className="slider " style={{ transform: `translateX(-${container4Index * (100 / visibleCards)}%)` }}>
              {smallImages.map((item, index) => (
                <div key={index} className="page-item small-card2 col-12 col-md-4" onClick={() => openModal(item.videoId)}>
                  <div className="card small-card21">
                    <img src={item.url} alt={`Small Card ${index + 1}`} />
                    <div className="overlay">
                      <div className="overlay-content">
                        {/* <h1>{item.title}</h1> */}

                      <i className="fas fa-play-circle play-button"></i>

                        {/* <p>{item.description}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="nav-buttons">
              {showPrevButton && (
                <i onClick={goToPrevContainer4Card} className="fas prevc2 fa-chevron-left"></i>
              )}
              <i onClick={goToNextContainer4Card} className="fas nextc2 fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={closeModal} videoUrl={currentVideoUrl} />
    </div>
  );
}

export default Container1;
