import React from 'react'
import Naavbar from '../../components/shared/Navbar/Naavbar'
import Footer2 from '../../components/shared/Footer/Footer2'
import Blog1 from '../../components/pages/Blog/Blogg'
import Footer from '../../components/shared/Footer/Footer'

const Blog = () => {
  return (
    <div>
        <Naavbar />
        <Blog1 />
        <Footer />
        <Footer2 />
    </div>
  )
}

export default Blog