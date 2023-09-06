import React from 'react'
import './styles/images.scss'

const ImageBanner = () => {
  return (
    <div className='container-images'>
        <h1>Our Gallery</h1>
        <div className='images1'>
          hi
            <div className='pic1' />
            <div className='pic2' />
            <div className='pic3' />
            <div className='pic4' />
        </div>
        <div className='images2'>   
        <div className='pic5' />
        <div className='pic6' />
        <div className='pic7' />
        <div className='pic8' />
        </div>
        <button className='button-image'>View All</button>
    </div>
  )
}

export default ImageBanner