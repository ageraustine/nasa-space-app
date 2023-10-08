import React from 'react'
import Header from './Header'
import Routers from '../Router'
import { Footer } from './Footer'

const Layout = () => {
  return (
    <div>
        <Header />
        <div className="flex-grow">
        <div className="flex-grow">
         <Routers />
        </div>

        </div>
        <Footer />
    </div>
  )
}

export default Layout;