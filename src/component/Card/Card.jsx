import React from 'react'
import './Card.css'

const Card = () => {
  return (    
    <div className='card-wrapper'>
        <h1>What i do</h1>  
    <div className='card-container'>
      <div className='card'>
      <img src='https://media.istockphoto.com/id/2232843523/photo/ui-ux-design-and-development-concepts-developers-interact-with-cutting-edge-virtual-screens.webp?a=1&b=1&s=612x612&w=0&k=20&c=oRxcqQ6K26SrfueA-zgyxhk28yWC-Mlnlg1GEgVB8FA=' alt='card image 1' className='card-image'/>
      <h3>UI/UX Design</h3>
      <p>From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first.</p>
    </div>
    <div className='card'>
      <img src='https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D' alt='card image 2' className='card-image'/>
      <h3>Front end developer</h3>
      <p>Production-grade code with Tailwind CSS and Alpine.js. Pixel-perfect, fully responsive, SEO-friendly and blazing fast — no bloat, no heavy frameworks</p>
    </div>
    <div className='card'>
      <img src='https://images.unsplash.com/photo-1634084462412-b54873c0a56d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRpbmclMjBwYWdlfGVufDB8fDB8fHww' alt='card image 3' className='card-image'/>
      <h3>Landing Pages</h3>
      <p>High-converting pages for SaaS, apps and personal brands. Designed to communicate value instantly and drive action from the first scroll.</p>
    </div> 
    </div>
       
    </div>    
  )
}

export default Card
