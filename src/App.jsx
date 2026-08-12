import React from 'react'
import Hero from './component/Hero/Hero'
import Navbar from './component/Navbar/Navbar'
import Card from './component/Card/Card'
import Portfolio from './component/Portfolio/Portfolio'
import About from './component/About/About'
import Client from './component/Client/Client'
import Thoughts from './component/Thoughts/Thoughts'
import Form from './component/Form/Form'
import Footer from './component/Footer/Footer'

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Card />
      <Portfolio />
      <About />
      <Client />
      <Thoughts />
      <Form />
      <Footer />
    </div>
  )
}

export default App
