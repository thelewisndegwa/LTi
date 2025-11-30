import { useEffect } from 'react';

function PhotoModal({ photo, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button 
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <img 
          src={photo.src} 
          alt={photo.caption}
          className="modal-image"
          onError={(e) => {
            e.target.style.display = 'none';
            const caption = e.target.nextElementSibling;
            if (caption) {
              caption.textContent = `Image not found: ${photo.caption}`;
            }
          }}
        />
        <p className="modal-caption">{photo.caption}</p>
      </div>
    </div>
  );
}

export default PhotoModal;

