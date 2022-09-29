import React from 'react'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import About from './pages/About'
import Services from './pages/Services'

function App() {
   return (
      <div className="App">
         <Header />
         <Banner />
         <About />
         <Services />
      </div>
   )
}

export default App
