import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../includes/Footer';

const Feature = () => {
  const featuredItems = [
    {
      url: '',
      title: 'Featured 1',
      description: 'Description for featured item 1',
      link: 'https://example.com/feature1'
    },
    {
      url: 'https://example.com/feature2.jpg',
      title: 'Featured 2',
      description: 'Description for featured item 2',
      link: 'https://example.com/feature2'
    },
    {
      url: 'https://example.com/feature3.jpg',
      title: 'Featured 3',
      description: 'Description for featured item 3',
      link: 'https://example.com/feature3'
    },
    {
      url: 'https://example.com/feature4.jpg',
      title: 'Featured 4',
      description: 'Description for featured item 4',
      link: 'https://example.com/feature4'
    },
    {
      url: 'https://example.com/feature5.jpg',
      title: 'Featured 5',
      description: 'Description for featured item 5',
      link: 'https://example.com/feature5'
    }
  ];

  return (
    <div className="container c feature-container" style={{ marginTop: '50px' }}>
      <div className="row">
        <div className="col-md-12">
          <h1 className="feature-title" style={{ marginBottom: '30px', textAlign: 'center', fontSize: '2rem', color: '#333' }}>Featured Content</h1>
          <div className="row">
            {featuredItems.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="card feature-card shadow-sm" style={{ marginBottom: '30px', borderRadius: '10px', border: '1px solid #ccc' }}>
                  <img src={item.url} className="card-img-top" alt={`Featured ${index + 1}`} style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                  <div className="card-body" style={{ textAlign: 'center' }}>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textDecoration: 'none', color: '#fff', backgroundColor: '#007bff', borderColor: '#007bff', borderRadius: '5px', padding: '8px 20px', fontSize: '1rem' }}>Learn More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-12">
          <h2 className="feature-subtitle" style={{ marginBottom: '20px', fontSize: '1.5rem', color: '#666' }}>What's New?</h2>
          <ul className="list-unstyled">
            <li><i className="fas fa-globe"></i> &nbsp; New Features & Updates</li>
            <li><i className="fas fa-lock"></i> &nbsp; Enhanced Security Measures</li>
            <li><i className="fas fa-users"></i> &nbsp; New User Interface</li>
          </ul>
        </div>
        <div className="col-md-12">
          <h2 className="feature-subtitle" style={{ marginBottom: '20px', fontSize: '1.5rem', color: '#666' }}>Our Team</h2>
          <div className="row">
            {featuredItems.map((item, index) => (
              <div key={index} className="col-md-3">
                <img src={item.url} className="rounded-circle" alt={`Team Member ${index + 1}`} style={{ width: '100px', height: '100px', margin: '20px auto' }} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Feature;