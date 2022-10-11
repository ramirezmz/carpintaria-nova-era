import React from 'react'
import Banner from './components/Banner/Banner'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import About from './pages/About'
import Services from './pages/Services'
import Footer from './components/Footer/Footer'
import {MainContent} from './styled'

function App() {
   return (
      <MainContent>
         <Header />
         <Banner />
         <About />
         <Services />
         <Form />
         <Footer />
      </MainContent>
   )
}

export default App
