import React from 'react'
import './Contact.css'; 

const Aditional = () => {
    const contacts = [
        {
          name: 'Prateek Kuhad',
          image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/1e/f5/3b1ef514-252e-d2cd-1d7a-18f815280402/093624878575.jpg/316x316bf.webp'
         
    
        },
        {
          name: 'The Local Train',
          
          image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/1e/f5/3b1ef514-252e-d2cd-1d7a-18f815280402/093624878575.jpg/316x316bf.webp'
    
        },
        {
          name: 'Nikhita Gandhi',
          
          image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/1e/f5/3b1ef514-252e-d2cd-1d7a-18f815280402/093624878575.jpg/316x316bf.webp'
    
        },
        {
          name: 'Prateek Gandhi',
          
          image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/1e/f5/3b1ef514-252e-d2cd-1d7a-18f815280402/093624878575.jpg/316x316bf.webp'
    
        },
        {
          name: 'Ritviz',
          
          image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/1e/f5/3b1ef514-252e-d2cd-1d7a-18f815280402/093624878575.jpg/316x316bf.webp'
    
        },
        {
          name: 'When Chai Met Toast',
          
          image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/1e/f5/3b1ef514-252e-d2cd-1d7a-18f815280402/093624878575.jpg/316x316bf.webp'
    
        },
        {
          name: 'Artist 7',
          
          image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/1e/f5/3b1ef514-252e-d2cd-1d7a-18f815280402/093624878575.jpg/316x316bf.webp'
    
        },
        {
          name: 'Artist 8',
          
          image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/1e/f5/3b1ef514-252e-d2cd-1d7a-18f815280402/093624878575.jpg/316x316bf.webp'
    
        },
        {
          name: 'Artist 9',
          
          image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/1e/f5/3b1ef514-252e-d2cd-1d7a-18f815280402/093624878575.jpg/316x316bf.webp'
    
        },
        {
          name: 'Artist 10',
          
          image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/1e/f5/3b1ef514-252e-d2cd-1d7a-18f815280402/093624878575.jpg/316x316bf.webp'
    
        },
        {
          name: 'Artist 11',
          
          image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/1e/f5/3b1ef514-252e-d2cd-1d7a-18f815280402/093624878575.jpg/316x316bf.webp'
    
        },
        {
          name: 'Artist 12',
          
          image: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/1e/f5/3b1ef514-252e-d2cd-1d7a-18f815280402/093624878575.jpg/316x316bf.webp'
    
        },
      ];
    
      const firstSixContacts = contacts.slice(0, 6);
      const lastSixContacts = contacts.slice(6, 12);
    
      return (
        <div className="container.contact my-5">
          <h1 className="mb-4 text-white">Top Indie Artists</h1>
          <div className="row">
            {firstSixContacts.map((contact, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 mb-4">
                <div className="cardcontact text-center" style={{ width: '300px', height:"400px" }}>
                  <div className="card-body">
                    <a href={contact.url} target="_blank" rel="noopener noreferrer">
                      <img
                        src={contact.image}
                        alt={contact.name}
                        className="rounded-circle mb-3 img-fluid"
                        style={{ width: '100%',  objectFit: 'cover' }}
                      />
                    </a>
                    <h5 className="card-title">{contact.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h1 className="mb-4 text-white">Top Podcasts on mother's music</h1>
          <div className="row">
            {lastSixContacts.map((contact, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 mb-4 rectangular">
                <div className="cardcontact text-center" style={{ width: '300px' }}>
                  <div className="card-body">
                    <a href={contact.url} target="_blank" rel="noopener noreferrer">
                      <img
                        src={contact.image}
                        alt={contact.name}
                        className="img-fluid rectangular-img"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                      />
                    </a>
                    <h5 className="card-title">{contact.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };


export default Aditional