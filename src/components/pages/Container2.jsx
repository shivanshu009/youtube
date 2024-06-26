import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component
import './page.css'; // Assuming you have CSS styles for your slider

import 'bootstrap/dist/css/bootstrap.min.css'; 

const smallImages = [
  {
    url: 'https://i.ytimg.com/vi/MQrsTxl-lTk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAC_Z9pmhCaX74xpValqIXPqGaQ6Q',
    title: 'Album 1',
    description: 'Description 1',
    videoId: 'MQrsTxl-lTk'
  },
  {
    url: 'https://i.ytimg.com/vi/H6SRC6V1ChQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKBJ_JCgk6F9Tz_VFOZK4_i8iNHw',
    title: 'Album 1',
    description: 'Description 1',
    videoId: 'H6SRC6V1ChQ'
  },
  {
    url: 'https://i.ytimg.com/vi/C1AwRy-94zg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVvGo-4CMI8KPYX_MUi5RwiAX_jQ',
    title: 'Album 1',
    description: 'Description 1',
    videoId: 'C1AwRy-94zg'
  },
  {
    url: 'https://i.ytimg.com/vi/BMhHR614Tbw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiF2RhqLHoQ6Z5g_412n12kLSVkw',
    title: 'Album 1',
    description: 'Description 1',
    videoId: 'BMhHR614Tbw'
  },
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
  // Add more images as needed...
];

const Container2 = () => {
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
    <div className="container-fluid container4">
      <div className="row">
        <div className="col-12">
          <h1 className="mb-4 text-center">Today's hit container2</h1>
          <div className="slider-container position-relative" >
            <i className="arrow left-arrow" onClick={goToPrevContainer4Card}></i>
            <div className="slider " style={{ transform: `translateX(-${container4Index * (100 / visibleCards)}%)` }}>
              {smallImages.map((item, index) => (
                <div key={index} className="page-item small-card2 col-12 col-sm-6 col-md-4 col-lg-3" onClick={() => openModal(item.videoId)}>
                  <div className="card small-card21 ">
                    <img src={item.url} alt={`Small Card ${index + 1}`} className="card-img-top img-fluid" />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="nav-buttons d-flex justify-content-between w-100">
              {showPrevButton && (
                <i onClick={goToPrevContainer4Card} className="fas prevc2 fa-chevron-left"></i>
              )}
              <i onClick={goToNextContainer4Card} className="fas nextc2 fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onClose={closeModal} videoUrl={currentVideoUrl} />
    </div>
  );
}

export default Container2;
