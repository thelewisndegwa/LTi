import { heroImageSrc } from '../data';

function Hero({ onScrollToGallery }) {
  const handleImageError = (e) => {
    // Hide the image if it fails to load, but keep the background gradient
    e.target.style.display = 'none';
  };

  return (
    <section className="hero">
      <div className="hero-image-wrapper">
        <img 
          src={heroImageSrc} 
          alt="Lewis & Tiffany" 
          className="hero-image"
          onError={handleImageError}
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">For Tiffany 💛</h1>
        <p className="hero-subtitle">
          A little something special, just for you
        </p>
        <button 
          className="hero-button"
          onClick={onScrollToGallery}
        >
          Explore Our Story
        </button>
      </div>
    </section>
  );
}

export default Hero;

