import React from 'react'
import './styles/banner.scss'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='banner'>
        <div className='text'>
        <h1> Get More From Popular Culture</h1>
        <p>Our mission is to build a world in which anybody, anywhere can change their lives by learning new things. Educating all kids for global success today and tomorrow. We offer high-quality courses with relevant information to motivate everyone to learn and land their ideal profession.</p>
        <Link to='/' className='shared-button'>Learn more</Link>
        </div>
        <div className='second-banner'>
        <div className='banner-box'>
          <div className='first-box'>
            <div className='picture' />
            <span>Online Classes</span>
            <p>High quality video, audio & live classes</p>
          </div>
        </div>
        <div className='banner-box1'>
          <div className='second-box'>
            <div className='picture1' />
            <span>Job Opportunities</span>
            <p>Finish courses and get hired by our partners</p>
          </div>
        </div>
        <div className='banner-box2'>
          <div className='background-image'></div>
          <div className='shadow'></div>
          <div className='third-box'>
            <div className='picture2' />
            <span>High Qualified Mentors</span>
            <p>Learn from the best teachers worldwide</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Banner