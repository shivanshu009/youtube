import React  from 'react';
import $ from 'jquery';
import 'magnific-popup/dist/jquery.magnific-popup';

const openMagnificPopup = (videoId) => {
  $.magnificPopup.open({
    items: {
      src: `<div class="mfp-iframe-scaler"><iframe class="mfp-iframe" src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allowfullscreen></iframe></div>`,
      type: 'inline'
    },
    fixedContentPos: true,
    callbacks: {
      beforeOpen: function() {
        this.st.mainClass = 'mfp-zoom-in'; // Add a zoom-in effect
       
      }
    },
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
              '<div class="mfp-close"></div>' +
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
              '</div>',
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        }
      }
    },
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    closeBtnInside: true,
    midClick: true,
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close">×</button>'
  });
};


const Container3 = () => {
  
  const openMagnificPopup = (videoId) => {
    $.magnificPopup.open({
      items: {
        src: `https://www.youtube.com/watch?v=${videoId}`,
      },
      type: 'iframe',
      iframe: {
        patterns: {
          youtube: {
            index: 'youtube.com/',
            id: function(url) {        
              var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
              if ( !m || !m[1] ) return null;
              return m[1];
            },
            src: '//www.youtube.com/embed/%id%?autoplay=1'
          }
        }
      },
      callbacks: {
        open: function() {
          $('body').addClass('mfp-open');
        },
        close: function() {
          $('body').removeClass('mfp-open');
        }
      }
    });
  };

  const togglePlayButton1 = (e) => {
    e.preventDefault();
    openMagnificPopup('rS3vW3uAXUQ'); // YouTube video ID
  };

  const togglePlayButton2 = (e) => {
    e.preventDefault();
    openMagnificPopup('pQQ3YE5psj0'); // YouTube video ID
  };
  return (
    <div className="container c">
      <div className="row">
      <div className="col-md-7">
          <h1 className="mb-4">Our Latest Videos</h1>
          <p className="mb-4">
            Discover our latest video content covering various projects, updates, and insights. Watch the videos below to stay informed and inspired.
          </p>
          <div className="row">
            <div className="col-sm-6 mb-4">
              <div className="card shadow-sm small-card11">
                <div className="card-body">
                  <a href="#!" className="video-link" onClick={togglePlayButton1}>
                    <img
                      src="https://i.ytimg.com/vi/DqT63JA0T5g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5_INdKxRNQvKaWOpEfewTb6IFYw"
                      alt="Video Thumbnail"
                      className="img-fluid"
                    />
                    <div className="play-button"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <a href="#!" className="video-link" onClick={togglePlayButton2}>
            <img
              src="https://i.ytimg.com/vi/pQQ3YE5psj0/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhlIFEoRTAP&rs=AOn4CLC1Ai1dd__9yrulSrlhtipqwM8jbw"
              alt="Video Thumbnail"
              className="img-fluid w-100"
            />
            <div className="play-button"></div>
          </a>
        </div>
        <div className="col-md-5 mt-5">
          <a href="#!" className="video-link" onClick={togglePlayButton2}>
            <img
              src="https://i.ytimg.com/vi/pQQ3YE5psj0/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhlIFEoRTAP&rs=AOn4CLC1Ai1dd__9yrulSrlhtipqwM8jbw"
              alt="Video Thumbnail"
              className="img-fluid w-100"
            />
            <div className="play-button"></div>
          </a>
        </div>
        <div className="col-md-7">
          <h1 className="mb-4">Our Latest Videos</h1>
          <p className="mb-4">
            Discover our latest video content covering various projects, updates, and insights. Watch the videos below to stay informed and inspired.
          </p>
          <div className="row">
            <div className="col-sm-6 mb-4">
              <div className="card shadow-sm small-card11">
                <div className="card-body">
                  <a href="#!" className="video-link" onClick={togglePlayButton1}>
                    <img
                      src="https://i.ytimg.com/vi/DqT63JA0T5g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5_INdKxRNQvKaWOpEfewTb6IFYw"
                      alt="Video Thumbnail"
                      className="img-fluid"
                    />
                    <div className="play-button"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
   
      </div>
    </div>
  );
};

export default Container3;
