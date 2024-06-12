import React, { useState, useEffect } from 'react';
import Modal from './Modal'; // Import the Modal component
import './page.css'; // Assuming you have CSS styles for your slider
import 'bootstrap/dist/css/bootstrap.min.css'; 

const smallImages = [
    {
        url: 'https://i.ytimg.com/vi/Cmp09QhSmtI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-_NvvwBXtMBXDFdVHtwsbG73Jzw',
        title: 'Album 1',
        description: 'Description 1',
        videoId: 'Cmp09QhSmtI'
      },
      {
        url: 'https://i.ytimg.com/vi/DqT63JA0T5g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5_INdKxRNQvKaWOpEfewTb6IFYw',
        title: 'Album 1',
        description: 'Description 1',
        videoId: 'DqT63JA0T5g'
      },
      {
        url: 'https://i.ytimg.com/vi/rS3vW3uAXUQ/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhlIFAoSTAP&rs=AOn4CLD2UtYLciQwlKeLgjySqlkvcRtfUw',
        title: 'Album 1',
        description: 'Description 1',
        videoId: '_VOXxKDNCuM'
      },
      {
        url: 'https://i.ytimg.com/vi/YpOCI6d_JkU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXTMFj-_0R7FCVFcPWhJ_3EtDc1w',
        title: 'Album 1',
        description: 'Description 1',
        videoId: 'DMCnscq4yHw'
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
    url: 'https://i.ytimg.com/vi/6cKErCWrb44/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDs19eOVG2fYnfoW63lQ--tsNUsNg',
    title: 'Album 1',
    description: 'Description 1',
    videoId: '6cKErCWrb44'
  },
  // Add more images as needed...
];

const Container2_1 = () => {
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [container2Index, setContainer2Index] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const goToNextContainer2Card = () => {
    setContainer2Index((prevIndex) => (prevIndex === smallImages.length - 1 ? 0 : prevIndex + 1));
    setShowPrevButton(true); // Show the previous button when navigating
  };

  const goToPrevContainer2Card = () => {
    setContainer2Index((prevIndex) => (prevIndex === 0 ? smallImages.length - 1 : prevIndex - 1));
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

  useEffect(() => {
    // Add any necessary side effects here
  }, []);

  return (
    <div className="container-fluid container4">
      <div className="row">
        <div className="col-12">
          <h1 className="mb-4 text-center">Today's hit container2</h1>
          <div className="slider-container position-relative">
            <div className="slider" style={{ transform: `translateX(-${container2Index * (100 / visibleCards)}%)` }}>
              {smallImages.map((item, index) => (
                <div key={index} className="page-item small-card2 col-12 col-sm-6 col-md-4 col-lg-3" onClick={() => openModal(item.videoId)}>
                  <div className="card small-card21">
                    <img src={item.url} alt={`Small Card ${index + 1}`} className="card-img-top img-fluid" />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="nav-buttons d-flex justify-content-between w-100">
            {showPrevButton && (
              <i onClick={goToPrevContainer2Card} className="fas prevc2 fa-chevron-left"></i>
            )}
            <i onClick={goToNextContainer2Card} className="fas nextc2 fa-chevron-right"></i>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onClose={closeModal} videoUrl={currentVideoUrl} />
    </div>
  );
}

export default Container2_1;
