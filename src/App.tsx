import React from 'react'
import Banner from './components/Banner/Banner'
import Form from './components/Form/Form'
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
         <Form />
      </div>
   )
}

export default App
