import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component

const albums = [
  {
    url: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e6/cb/46/e6cb467a-c557-3f19-7701-0597d55c5d08/a4b93c96-c77a-4d49-bfb5-dc9efd18c8c3.png/600x344sr.webp',
    title: 'Album 1',
    videoId: 'rS3vW3uAXUQ'

  },
  {
    url: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/51/ac/86/51ac8627-7a61-4f51-a055-dde1e424d617/source/600x344sr.webp',
    title: 'Album 2',
    videoId: 'rS3vW3uAXUQ'

  },
  {
    url: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e6/cb/46/e6cb467a-c557-3f19-7701-0597d55c5d08/a4b93c96-c77a-4d49-bfb5-dc9efd18c8c3.png/600x344sr.webp',
    title: 'Album 1',
    videoId: 'rS3vW3uAXUQ'

  },
  {
    url: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/51/ac/86/51ac8627-7a61-4f51-a055-dde1e424d617/source/600x344sr.webp',
    title: 'Album 2',
    videoId: 'rS3vW3uAXUQ'

  },
  {
    url: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e6/cb/46/e6cb467a-c557-3f19-7701-0597d55c5d08/a4b93c96-c77a-4d49-bfb5-dc9efd18c8c3.png/600x344sr.webp',
    title: 'Album 1',
    videoId: 'rS3vW3uAXUQ'

  },
  {
    url: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/51/ac/86/51ac8627-7a61-4f51-a055-dde1e424d617/source/600x344sr.webp',
    title: 'Album 2',
    videoId: 'rS3vW3uAXUQ'

  },
  {
    url: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e6/cb/46/e6cb467a-c557-3f19-7701-0597d55c5d08/a4b93c96-c77a-4d49-bfb5-dc9efd18c8c3.png/600x344sr.webp',
    title: 'Album 1',
    videoId: 'rS3vW3uAXUQ'

  },
  {
    url: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/51/ac/86/51ac8627-7a61-4f51-a055-dde1e424d617/source/600x344sr.webp',
    title: 'Album 2',
    videoId: 'rS3vW3uAXUQ'

  },
   {
    url: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e6/cb/46/e6cb467a-c557-3f19-7701-0597d55c5d08/a4b93c96-c77a-4d49-bfb5-dc9efd18c8c3.png/600x344sr.webp',
    title: 'Album 1',
    videoId: 'rS3vW3uAXUQ'

  },
 
  // Add more albums with videoIds as needed...
];

const Albums = ({ albums }) => {
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
      <div className="row additional-content">
        <div className="col-md-12">
          <h1 className="mb-4 text-center">100 Best Albums</h1>
          <div className="albums-row">
            {albums.map((album, index) => (
              <div key={index} className="album-item" onClick={() => openModal(album.videoId)}>
                <img className="img-fluid" src={album.url} alt={album.title} />
                <p>{album.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal show={showModal} onClose={closeModal} videoUrl={currentVideoUrl} />
    </div>
  );
};

const App = () => {
  return <Albums albums={albums} />;
};

export default App;
