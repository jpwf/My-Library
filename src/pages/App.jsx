import React from 'react';
import Navbar from '../components/navBar'
import Footer from '../components/Footer'
function App(){
  return(
    <>
      <Navbar/>
      <div> 
        <div>
          <h2>Texto texto sub título</h2>
        </div>
        <div>bloco livro 1</div>  
        <div>bloco livro 2</div>
        <div>bloco livro 3</div>
      </div>
      <Footer/>
    </>
  )
}

export default App