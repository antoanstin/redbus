import React from 'react'
// import Navbar from './Navbar'
// import Nav from './Nav'
// import ResponsiveAppBar from './Nav'
import PrimarySearchAppBar from './Navs'
import Form from './Form/Form'
import CenterMode from './CenterMode/CenterMode'
import Footer from './CenterMode/Footer'
// import More from './CenterMode/More'

const Home = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <Form />
      <CenterMode/>
      <Footer/>
    
    </div>
  )
}

export default Home