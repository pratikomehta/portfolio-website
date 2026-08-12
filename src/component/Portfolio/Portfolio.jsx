import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className='port-wrapper'>
    <h1 className='port-heading'>My Portfolio</h1>
      <div className='port-container'>
      <div className='port-card-big'>
        <img src='https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80' alt='image type 1' className='port-image-1'/>
        <h3 className='card-heading'>SaaS Dashboard</h3>
        <p className='card-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis, odit nam aperiam fugiat optio libero. Nisi, minus officiis eius odio tempora velit fugit at, id labore ut libero reiciendis!</p>
        <p className='card-detail'>Bold editorial site for a Paris-based branding studio. Scroll-driven animations and custom cursor to match their premium positioning.</p>
        <p className='card-detail'>Bold editorial site for a Paris-based branding studio. Scroll-driven animations and custom cursor to match their premium positioning.</p>
        <a href=''>View case study</a>        
      </div>
      <div className='port-small'>
      <div className='port-card-small'>
        <img src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' alt='image type 2/2' className='port-image-2'/>
        <h3 className='card-heading'>Fintech Website</h3>
        <p className='card-detail'>Marketing site and onboarding flow for a personal finance app targeting young professionals. Tailwind CSS + Alpine.js.</p>
        <a href=''>View case study</a>
      </div>
      <div className='port-card-small'>
        <img src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80' alt='image type 2/3' className='port-image-2'/>
        <h3 className='card-heading'>Creative Agency</h3>
        <p className='card-detail'>Bold editorial site for a Paris-based branding studio. Scroll-driven animations and custom cursor to match their premium positioning.</p>
        <a href=''>View case study</a>
      </div>
      </div>

      </div>
    </div>
  )
}

export default Portfolio
