import React, { useState } from 'react';
import src from '../../assets/cabin.4417330275f78faa31c3.png';
import src2 from '../../assets/cake.6554473016d32b343f02.png';
import src3 from '../../assets/circus.494a4a914b5471b41f3e.png';
import ImageModal from './imgModal';
// import style from "./portfolio.module.css";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`container mt p-5 text-center`}>
      <ImageModal src={selectedImage} onClose={handleCloseModal} />
      <h1>Portfolio Component</h1>
      <div className="header-shape d-flex justify-content-center align-items-center my-4">
        <span className="right bg-black me-2"></span>
        <span><i className="fa-solid fa-star"></i></span>
        <span className="left bg-black ms-1"></span>
      </div>
      <div className="row gy-3">
        <div className="col-md-6 col-lg-4">
          <img className='img-fluid' data-index="1" src={src} alt="" onClick={() => handleImageClick(src)} />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className='img-fluid' data-index="2" src={src2} alt="" onClick={() => handleImageClick(src2)} />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className='img-fluid' data-index="3" src={src3} alt="" onClick={() => handleImageClick(src3)} />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className='img-fluid' data-index="6" src={src} alt="" onClick={() => handleImageClick(src)} />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className='img-fluid' data-index="5" src={src2} alt="" onClick={() => handleImageClick(src2)} />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className='img-fluid' data-index="6" src={src3} alt="" onClick={() => handleImageClick(src3)} />
        </div>
      </div>
    </div>
  );
}
