import React, { useEffect, useState } from 'react'

const Banner = () => {
    const bannerImages = ["https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309649.jpg?t=st=1714295518~exp=1714299118~hmac=b2f5b7db5b08e528d53963090d791b7c2e401397d087e273e2552079fb3c9dd0&w=900","https://img.freepik.com/free-vector/flat-smartphone-official-colors_23-2148782785.jpg?t=st=1714310978~exp=1714314578~hmac=0158b6102026aedd837ebf613b476d08862aaf5a50e6a33718a8441d4252a2a6&w=996","https://img.freepik.com/free-photo/person-with-vr-glasses-experiencing-metaverse_23-2150904798.jpg?t=st=1714311072~exp=1714314672~hmac=709441ddcbd30ac7b1b8359ac8e076e356f5c19d0a296ed96bf26355afb09804&w=1060","https://img.freepik.com/premium-photo/new-smartphone-balancing-with-leaves_23-2150296479.jpg?w=900","https://img.freepik.com/premium-photo/gaming-computer-rgb-gaming-mouse-monitor_860528-2054.jpg?w=1060"] 
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const changeImage = () => {
          const nextIndex = (currentImage + 1) % bannerImages.length;
          setCurrentImage(nextIndex);
        };
     
        const intervalId = setInterval(changeImage, 3000);
     
        return () => clearInterval(intervalId);
      }, [currentImage,bannerImages]);
     
  return (
    <div className='banner'>
      <img src={bannerImages[currentImage]} alt="Banner" />
    </div>
  )
}

export default Banner