import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component
import './Contact.css'; // Assuming you have CSS styles for your slider
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../includes/Footer';


const featuredVideos = [
  {
    url: 'https://i.ytimg.com/vi/inEu2qQuGZ8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCR5aYXlaCi5G3YeFkfeWLiFdTpEQ',
    title: 'Top Hits 2024',
    description: 'Enjoy the top hits of 2024!',
    videoId: 'inEu2qQuGZ8'
  },
  {
    url: 'https://i.ytimg.com/vi/qWnzMwT6SKo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUhgNbnfYGHYDs1sKF7qK7ZBlEzg',
    title: 'Chill Vibes',
    description: 'Relax with these chill tunes.',
    videoId: 'qWnzMwT6SKo'
  },
  {
    url: 'https://i.ytimg.com/vi/0Fegb4Ew8SM/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IDEoczAP&rs=AOn4CLAPhfDmGfkcWSSfuo5dLpNC3z55sg',
    title: 'Workout Mix',
    description: 'Get pumped with this workout mix.',
    videoId: '0Fegb4Ew8SM'
  },
  {
    url: 'https://i.ytimg.com/vi/Zu61PQyvLf8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjqT2U6TrjEQekkhXM0yh3vYAMuQ',
    title: 'Party Playlist',
    description: 'Party all night with this playlist.',
    videoId: 'Zu61PQyvLf8'
  },
  {
    url: 'https://i.ytimg.com/vi/1G0tpiX8uF0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDmCbzMV-0wGuxypgvkhDFIJ02JQ',
    title: 'Acoustic Sessions',
    description: 'Unplug and enjoy these acoustic sessions.',
    videoId: 'hYiDSPB1hlI'
  },
  {
    url: 'https://i.ytimg.com/vi/NwDsgqIFJZ4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoQpnqeLOJGo8GL2d-S0OfRLBcXw',
    title: 'Hip-Hop Hits',
    description: 'The best hip-hop hits of the year.',
    videoId: 'NwDsgqIFJZ4'
  },
  {
    url: 'https://i.ytimg.com/vi/H0uL9-8nUCk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCq8mMrqecTFBaRxglvlpvUaWuXJw',
    title: 'Classic Rock',
    description: 'Timeless classic rock anthems.',
    videoId: 'H0uL9-8nUCk'
  },
  {
    url: 'https://i.ytimg.com/vi/CU1tFtk_NFY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1p04dXHwrbfEPskqKcXq4iBhSmA',
    title: 'Jazz Essentials',
    description: 'Essential jazz tracks for any collection.',
    videoId: 'CU1tFtk_NFY'
  },
  {
    url: 'https://i.ytimg.com/vi/TQR70KKYMmQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjuYpSHfMqgtDerVVmr6ldUCN-lQ',
    title: 'Pop Perfection',
    description: 'The biggest pop hits.',
    videoId: 'TQR70KKYMmQ'
  },
  {
    url: 'https://i.ytimg.com/vi/_VOXxKDNCuM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAGvissvmMSEeDks7LTFrv1nas3A',
    title: 'Indie Hits',
    description: 'Discover the best indie hits.',
    videoId: '_VOXxKDNCuM'
  },
  {
    url: 'https://i.ytimg.com/vi/DMCnscq4yHw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAo7mhdYSDorAg39qFhuXiQE-ij2Q',
    title: 'Reggae Rhythms',
    description: 'Chill out with reggae rhythms.',
    videoId: 'DMCnscq4yHw'
  },
  {
    url: 'https://i.ytimg.com/vi/6cKErCWrb44/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDs19eOVG2fYnfoW63lQ--tsNUsNg',
    title: 'Electronic Essentials',
    description: 'Essential electronic tracks.',
    videoId: '6cKErCWrb44'
  },
  // Add more videos as needed...
];



const Feature = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const openModal = (videoId) => {
    setCurrentVideoUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentVideoUrl('');
  };

  return (
    <div className="container c">
      <h1 className="text-center mt-5 mb-4">Featured Videos</h1>
      <div className="row">
        {featuredVideos.map((video, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card" onClick={() => openModal(video.videoId)}>
              <img src={video.url} className="card-img-top" alt={video.title} />
              <div className="card-body">
                <h5 className="card-title font-weight-bold" style={{ fontFamily: 'Roboto, sans-serif', color: '#353232'}}>{video.title}</h5>
                <p className="card-text card-description">{video.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <Modal show={showModal} onClose={closeModal} videoUrl={currentVideoUrl} />
      )}
  <Footer/>

    </div>
    
  );
};

export default Feature;
