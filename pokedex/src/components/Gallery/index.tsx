import { useState } from 'react';
import './style.css';

interface GalleryProps {
  images: string[];
}

function Gallery ({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  return (
    <div className='gallery'>
        <div className='thumbnail-list'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className='thumbnail'
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      <div className='selected-image'>
        <img src={selectedImage} alt="Selected" />
      </div>
    </div>
  );
};

export default Gallery;