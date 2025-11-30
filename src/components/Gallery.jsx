import { useState } from 'react';
import { photos } from '../data';
import PhotoModal from './PhotoModal';

function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-grid">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className="gallery-item"
                onClick={() => handlePhotoClick(photo)}
              >
                <img 
                  src={photo.src} 
                  alt={photo.caption}
                  className="gallery-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.backgroundColor = 'var(--bg-primary)';
                  }}
                />
                <div className="gallery-overlay">
                  <p className="gallery-caption">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {selectedPhoto && (
        <PhotoModal 
          photo={selectedPhoto} 
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default Gallery;

