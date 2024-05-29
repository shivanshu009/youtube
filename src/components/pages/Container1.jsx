import React, { useState } from 'react'
import './Contact.css'; 


const smallImages = [
    {
        url: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/51/ac/86/51ac8627-7a61-4f51-a055-dde1e424d617/source/600x344sr.webp',
      
      title: 'Album 1',
      description: 'Description 1',
      link: 'https://youtu.be/rS3vW3uAXUQ?feature=shared'
    },
  
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/51/ac/86/51ac8627-7a61-4f51-a055-dde1e424d617/source/600x344sr.webp',
      title: 'Album 2',
      description: 'Description 2',
      link: 'https://youtu.be/rS3vW3uAXUQ?feature=shared'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/ec/cf/d7/eccfd76f-d043-0ba7-a181-cb1f468ef1a9/6ac45cc9-6322-4ccc-b9b0-03e732ef83a5.png/600x344sr.webp',
      title: 'Album 3',
      description: 'Description 3',
      link: 'https://youtu.be/rS3vW3uAXUQ?feature=shared'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e6/cb/46/e6cb467a-c557-3f19-7701-0597d55c5d08/a4b93c96-c77a-4d49-bfb5-dc9efd18c8c3.png/600x344sr.webp',
      title: 'Album 1',
      description: 'Description 1',
      link: 'https://youtu.be/rS3vW3uAXUQ?feature=shared'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/51/ac/86/51ac8627-7a61-4f51-a055-dde1e424d617/source/600x344sr.webp',
      title: 'Album 2',
      description: 'Description 2',
      link: 'https://youtu.be/rS3vW3uAXUQ?feature=shared'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/ec/cf/d7/eccfd76f-d043-0ba7-a181-cb1f468ef1a9/6ac45cc9-6322-4ccc-b9b0-03e732ef83a5.png/600x344sr.webp',
      title: 'Album 3',
      description: 'Description 3',
      link: 'https://youtu.be/rS3vW3uAXUQ?feature=shared'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e6/cb/46/e6cb467a-c557-3f19-7701-0597d55c5d08/a4b93c96-c77a-4d49-bfb5-dc9efd18c8c3.png/600x344sr.webp',
      title: 'Album 1',
      description: 'Description 1',
      link: 'https://youtu.be/rS3vW3uAXUQ?feature=shared'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/51/ac/86/51ac8627-7a61-4f51-a055-dde1e424d617/source/600x344sr.webp',
      title: 'Album 2',
      description: 'Description 2',
      link: 'https://youtu.be/rS3vW3uAXUQ?feature=shared'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/ec/cf/d7/eccfd76f-d043-0ba7-a181-cb1f468ef1a9/6ac45cc9-6322-4ccc-b9b0-03e732ef83a5.png/600x344sr.webp',
      title: 'Album 3',
      description: 'Description 3',
      link: 'https://youtu.be/rS3vW3uAXUQ?feature=shared'
    }
  ];



const Container1 = () => {
    const [showPrevButton, setShowPrevButton] = useState(false);
const [container4Index, setContainer4Index] = useState(0);

const goToNextContainer4Card = () => {
    setContainer4Index((prevIndex) => (prevIndex === smallImages.length - 1 ? 0 : prevIndex + 1));
    setShowPrevButton(true); // Show the previous button when navigating
  };

  // Function to navigate to the next card in Container4
  const goToPrevContainer4Card = () => {
    setContainer4Index((prevIndex) => (prevIndex === 0 ? smallImages.length - 1 : prevIndex - 1));
    setShowPrevButton(true); // Show the previous button when navigating
  };
  return (
    <div className="container4">
    <div className="row">
      <div className="col-md-12">
        <h1 className='mb-4'>Today's hit</h1>
        <div className="slider-container">
          <i className="arrow left-arrow" onClick={goToPrevContainer4Card}></i>
          <div className="slider" style={{ transform: `translateX(-${container4Index * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
            {smallImages.map((item, index) => (
              <div key={index} className="page-item small-card2">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="card small-card21">
                    <img src={item.url} alt={`Small Card ${index + 1}`} />
                    <div className="overlay">
                      <div className="overlay-content">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="nav-buttons">
            {showPrevButton && (
              <i onClick={goToPrevContainer4Card} className="fas prev fa-chevron-left"></i>
            )}
            <i  onClick={goToNextContainer4Card} className="fas next fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Container1