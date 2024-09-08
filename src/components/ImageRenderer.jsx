import React, { useState } from 'react';

const ImageRenderer = ({ imageSet }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSet.length);
  };

  // Function to go to the previous image
  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + imageSet.length) % imageSet.length
    );
  };

  if (!imageSet || imageSet.length === 0) {
    return <div>No images available</div>;
  }

  const currentImage = imageSet[currentIndex];

  return (
    <div className='max-w-[600px] mx-auto mt-6'>
      <div className='flex flex-col items-center'>
        <img
          key={currentImage._id}
          src={currentImage.image_url}
          alt={`Pulsar Image ${currentIndex + 1}`}
          className='w-full h-auto object-cover'
          onError={(e) => {
            e.target.src = 'https://firebasestorage.googleapis.com/v0/b/sih24-e5a26.appspot.com/o/uploads%2Fpulsars%2F14c53fd5-cd35-433b-9bdc-dc30fbcef55f.png?alt=media&token=0d18e320-9a95-453e-8558-3612282ca34c'; // Placeholder for broken images
          }}
        />
        <div className='flex mt-4'>
          <button
            onClick={goToPreviousImage}
            className='px-4 py-2 bg-gray-700 text-white rounded-l'
            disabled={imageSet.length <= 1}
          >
            Previous
          </button>
          <button
            onClick={goToNextImage}
            className='px-4 py-2 bg-gray-700 text-white rounded-r'
            disabled={imageSet.length <= 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageRenderer;
