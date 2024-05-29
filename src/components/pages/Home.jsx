  import React, { useState } from 'react';
  import './page.css';
  import Footer from '../includes/Footer';
  import Aditional from './Aditional';
import Container1 from './Container1';
import Container2 from './Container2';


  const images = [
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/18/35/5f/18355f63-e02c-bc04-c2db-452f415d36fc/f94e093b-c3bf-4186-8915-e727d92930a6.png/600x344sr.webp',
      title: 'Title 1',
      description: 'Description 1'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/3a/fc/b2/3afcb2a7-559a-54a3-ca49-27275133247f/3b0189ca-bdf2-4fa3-be88-b02ba8fcbd57.png/600x344sr.webp',
      title: 'Title 2',
      description: 'Description 2'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/18/35/5f/18355f63-e02c-bc04-c2db-452f415d36fc/f94e093b-c3bf-4186-8915-e727d92930a6.png/600x344sr.webp',
      title: 'Title 3',
      description: 'Description 3'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/8d/e0/53/8de0534f-bfb2-7bc2-39db-a63da333d06b/source/600x344sr.webp',
      title: 'Title 4',
      description: 'Description 4'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/f8/43/7c/f8437ca9-faa3-8b2a-59b6-bdf2a87a3fc0/d7382fc4-f436-4fc0-802f-91d42e99a69f.png/600x344sr.webp',
      title: 'Title 5',
      description: 'Description 5'
    },
  ];

  const albums = [
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e6/cb/46/e6cb467a-c557-3f19-7701-0597d55c5d08/a4b93c96-c77a-4d49-bfb5-dc9efd18c8c3.png/600x344sr.webp',
      title: 'Album 1'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/51/ac/86/51ac8627-7a61-4f51-a055-dde1e424d617/source/600x344sr.webp',
      title: 'Album 2'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/ec/cf/d7/eccfd76f-d043-0ba7-a181-cb1f468ef1a9/6ac45cc9-6322-4ccc-b9b0-03e732ef83a5.png/600x344sr.webp',
      title: 'Album 3'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e6/cb/46/e6cb467a-c557-3f19-7701-0597d55c5d08/a4b93c96-c77a-4d49-bfb5-dc9efd18c8c3.png/600x344sr.webp',
      title: 'Album 1'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/51/ac/86/51ac8627-7a61-4f51-a055-dde1e424d617/source/600x344sr.webp',
      title: 'Album 2'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/ec/cf/d7/eccfd76f-d043-0ba7-a181-cb1f468ef1a9/6ac45cc9-6322-4ccc-b9b0-03e732ef83a5.png/600x344sr.webp',
      title: 'Album 3'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e6/cb/46/e6cb467a-c557-3f19-7701-0597d55c5d08/a4b93c96-c77a-4d49-bfb5-dc9efd18c8c3.png/600x344sr.webp',
      title: 'Album 1'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/51/ac/86/51ac8627-7a61-4f51-a055-dde1e424d617/source/600x344sr.webp',
      title: 'Album 2'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/ec/cf/d7/eccfd76f-d043-0ba7-a181-cb1f468ef1a9/6ac45cc9-6322-4ccc-b9b0-03e732ef83a5.png/600x344sr.webp',
      title: 'Album 3'
    },
    {
      url: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/e6/cb/46/e6cb467a-c557-3f19-7701-0597d55c5d08/a4b93c96-c77a-4d49-bfb5-dc9efd18c8c3.png/600x344sr.webp',
      title: 'Album 1'
    },
  ];

  const smallImages = [
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



  const Slider = ({ images, currentIndex, cardClass, goToPrev, goToNext }) => (
    <div className="slider-container">
      <i className="arrow left-arrow" onClick={goToPrev}></i>
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
        {images.map((item, index) => (
          <div key={index} className={`page-item ${cardClass}`}>
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
      <i className="fas fa-chevron-left arrow left-arrow" onClick={goToPrev}></i>
      <i className="fas fa-chevron-right arrow right-arrow" onClick={goToNext}></i>
    </div>
  );

  const Albums = ({ albums }) => (
    <div className="row additional-content">
      <div className="col-md-12">
        <h3>100 Best Albums</h3>
        <div className="albums-row">
          {albums.map((album, index) => (
            <div key={index} className="album-item">
              <img className="img-fluid" src={album.url} alt={album.title} />
              <p>{album.title}</p>
            </div>
          ))}
          <h6>many more....</h6>
        </div>
      </div>
    </div>
  );

  const Home = () => {
    const [showPrevButton, setShowPrevButton] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [container3Index, setContainer3Index] = useState(0);

    // State for managing the index of the currently displayed card in Container4
    const [container4Index, setContainer4Index] = useState(0);

    const goToPrevCard = () => {
      setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextCard = () => {
      setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const goToPrevSmallCard = () => {
      setContainer3Index(prevIndex => (prevIndex === 0 ? smallImages.length - 1 : prevIndex - 1));
      setShowPrevButton(true); // Show the previous button when navigating
    };

    const goToNextSmallCard = () => {
      setContainer3Index(prevIndex => (prevIndex === smallImages.length - 1 ? 0 : prevIndex + 1));
      setShowPrevButton(true); // Show the previous button when navigating
    };
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
      <div className="container c">
        <div className="row">
          <div className="col-md-12">
            <Slider
              images={images}
              currentIndex={currentIndex}
              cardClass=""
              goToPrev={goToPrevCard}
              goToNext={goToNextCard}
            />
            <Albums albums={albums} />
            <Container2/>
            <Container2/>

            <div className="container2">
      <div className="row">
      <div className="col-7">
          <h1 className="mb-4">Our Latest Videos</h1>
          <p className="mb-4">
            Discover our latest video content covering various projects, updates, and insights. Watch the videos below to stay informed and inspired.
          </p>
          <p className="mb-4">
            Discover our latest video content covering various projects, updates, and insights. Watch the videos below to stay informed and inspired.
          </p><p className="mb-4">
            Discover our latest video content covering various projects, updates, and insights. Watch the videos below to stay informed and inspired.
          </p><p className="mb-4">
            Discover our latest video content covering various projects, updates, and insights. Watch the videos below to stay informed and inspired.
          </p>
          <div className="row">
           
              <div className="card shadow-sm small-card11">
                <div className="card-body ">
                  <a href="https://youtu.be/rS3vW3uAXUQ?feature=shared" target="_blank" rel="noopener noreferrer" className="video-link">
                    <img src="https://i.ytimg.com/vi/DqT63JA0T5g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5_INdKxRNQvKaWOpEfewTb6IFYw" alt="Video Thumbnail" className="img-fluid"/>
                    <div className="play-button"></div>
                  </a>
                </div>
              </div>
           
            
              <div className="card shadow-sm small-card11">
                <div className="card-body">
                  <a href="https://youtu.be/anotherVideoLink" target="_blank" rel="noopener noreferrer" className="video-link">
                    <img src="https://i.ytimg.com/vi/puKD3nkB1h4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnlCVwYGtsqzPJ8VzWb3bVseAZfA" alt="Video Thumbnail" className="img-fluid"/>
                    <div className="play-button"></div>
                  </a>
                </div>
              </div>
            
            
              <div className="card shadow-sm small-card11">
                <div className="card-body">
                  <a href="https://youtu.be/yetAnotherVideoLink" target="_blank" rel="noopener noreferrer" className="video-link">
                    <img src="https://i.ytimg.com/vi/Cmp09QhSmtI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&amp;rs=AOn4CLA_dVps-YevJ_8XF1XlNkIsyZP3_g" alt="Video Thumbnail" className="img-fluid"/>
                    <div className="play-button"></div>
                  </a>
                </div>
             
            </div>
          </div>
        </div>
        <div className="col-5">
          <a href="https://youtu.be/rS3vW3uAXUQ?feature=shared" target="_blank" rel="noopener noreferrer" className="video-link1">
            <img src="https://i.ytimg.com/vi/pQQ3YE5psj0/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhlIFEoRTAP&rs=AOn4CLC1Ai1dd__9yrulSrlhtipqwM8jbw" alt="Video Thumbnail" className="img-fluid"/>
            <div className="play-button"></div>
          </a>
        </div>
      </div>
    </div>
            <div className="container2.1">
              <div className="row">
                <div className="col-5">
                  <a href="https://youtu.be/rS3vW3uAXUQ?feature=shared" target="_blank" className="video-link1">
                    <img src="https://i.ytimg.com/vi/J0WDRrXNFD4/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhyIFgoHzAP&rs=AOn4CLC3wURHU3tW6G30tCO3AJBdF3DXrA" alt="Video Thumbnail" className="img-fluid"/>
                    <div className="play-button"></div>
                  </a>
                </div>
                <div className="col-7">
          <h1 className="mb-4">Our Upcomming Videos</h1>
          <p className="mb-4">
            Discover our latest video content covering various projects, updates, and insights. Watch the videos below to stay informed and inspired.
          </p>
          <p className="mb-4">
            Discover our latest video content covering various projects, updates, and insights. Watch the videos below to stay informed and inspired.
          </p><p className="mb-4">
            Discover our latest video content covering various projects, updates, and insights. Watch the videos below to stay informed and inspired.
          </p><p className="mb-4">
            Discover our latest video content covering various projects, updates, and insights. Watch the videos below to stay informed and inspired.
          </p>
          <div className="row">
           
              <div className="card shadow-sm small-card11">
                <div className="card-body ">
                  <a href="https://youtu.be/rS3vW3uAXUQ?feature=shared" target="_blank" rel="noopener noreferrer" className="video-link">
                    <img src="https://i.ytimg.com/vi/DqT63JA0T5g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5_INdKxRNQvKaWOpEfewTb6IFYw" alt="Video Thumbnail" className="img-fluid"/>
                    <div className="play-button"></div>
                  </a>
                </div>
              </div>
           
            
              <div className="card shadow-sm small-card11">
                <div className="card-body">
                  <a href="https://youtu.be/anotherVideoLink" target="_blank" rel="noopener noreferrer" className="video-link">
                    <img src="https://i.ytimg.com/vi/puKD3nkB1h4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnlCVwYGtsqzPJ8VzWb3bVseAZfA" alt="Video Thumbnail" className="img-fluid"/>
                    <div className="play-button"></div>
                  </a>
                </div>
              </div>
            
            
              <div className="card shadow-sm small-card11">
                <div className="card-body">
                  <a href="https://youtu.be/yetAnotherVideoLink" target="_blank" rel="noopener noreferrer" className="video-link">
                    <img src="https://i.ytimg.com/vi/Cmp09QhSmtI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&amp;rs=AOn4CLA_dVps-YevJ_8XF1XlNkIsyZP3_g" alt="Video Thumbnail" className="img-fluid"/>
                    <div className="play-button"></div>
                  </a>
                </div>
             
            </div>
          </div>
        </div>
              </div>
            </div>
            <div className="container3">
    <div className="row">
      <div className="col-md-12">
        <h1 className='mb-4'>Trending songs</h1>
        <div className="slider-container">
          <i className="arrow left-arrow" onClick={goToPrevSmallCard}></i>
          <div className="slider" style={{ transform: `translateX(-${container3Index * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
            {smallImages.map((item, index) => (
              <div key={index} className="page-item">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="card small-card1">
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
              <button className="prev-btn" onClick={goToPrevSmallCard}><i className="fas fa-chevron-left"></i></button>
            )}
            <button className="next-btn" onClick={goToNextSmallCard}><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container4">
          <div className="row">
            <div className="col-md-12">
              <h1 className='mb-4'>Most Played</h1>
              <div className="slider-container">
                <i className="arrow left-arrow" onClick={goToPrevContainer4Card}></i>
                <div className="slider" style={{ transform: `translateX(-${container4Index * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
                  {smallImages.map((item, index) => (
                    <div key={index} className="page-item small-card2">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <div className="card small-card2">
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
                    <button className="prev-btn" onClick={goToPrevContainer4Card}><i className="fas fa-chevron-left"></i></button>
                  )}
                  <button className="next-btn" onClick={goToNextContainer4Card}><i className="fas fa-chevron-right"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===================================================================== */}
    <Aditional/>
        
<Container1/>
<Footer/>
          </div>
        </div>
      </div>
    );
  };

  export default Home;

