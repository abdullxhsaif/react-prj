import React from 'react'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import './App.css'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='card-manage'>
       <Card title="SILVER" description="A sleek, timeless watch." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEs-3RYjj9OPan3nrhvIWOEpXXCwlgn14Bg&s"/>
        <Card title="GOLD" description="A sleek, timeless watch." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtBS_T2ZjLUrQHZd_ZMZrhS0-NUQF4cQktQ&s"/>
         <Card title="BRONZE" description="A sleek, timeless watch." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLj0rCuoLd_qjEfr4-mtNp57itQwxh67mWpw&s"/>

         <Card title="SILVER" description="A sleek, timeless watch." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEs-3RYjj9OPan3nrhvIWOEpXXCwlgn14Bg&s"/>
        <Card title="GOLD" description="A sleek, timeless watch." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtBS_T2ZjLUrQHZd_ZMZrhS0-NUQF4cQktQ&s"/>
         <Card title="BRONZE" description="A sleek, timeless watch." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLj0rCuoLd_qjEfr4-mtNp57itQwxh67mWpw&s"/>
          </div>
      <Footer />
     </div>
  )
}

export default App