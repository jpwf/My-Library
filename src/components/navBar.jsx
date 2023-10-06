import React, {useState} from 'react'
import { List } from 'phosphor-react'
// import {Link } from 'react-router-dom';

function Navbar(){
  const [navbar, setNavBar] = useState(false);
  
  return(
    <>
      <nav className={'w-full flex text-base justify-start gap-[750x] items-center border-b-[1px] h-[55px] border-b-gray-300 bg-[#B1830D] bg-opacity-20'}>
        <div className='flex justify-start items-center'>
          <div className=' ml-9 relative justify-start items-center flex-col items-center'>
            <button onClick={() => setNavBar((navbar) => !navbar)} 
            className='items-center ' >
              <List size={32} color="#1f1f1f" className={`${navbar ? "rotate-90 duration-500 linear" : ""}`} />
            </button>
            {navbar && (
              <div className={`{${navbar} ? "flex duration-500" : "hidden"} bg-[#BC9A42] bg-opacity-25 grid justify-self-center w-[64px] h-[124px]  leading-6 place-items-center font-extrabold flex-col absolute rounded-2xl border `}>
                <a>Ficção</a>
                <a>Teste</a>
                <a>Teste</a>
              </div>
            )}
          </div>
        </div>
        <div className='font-bold text-[42px] leading-[38px] '>
          <h1>My Library</h1>
        </div>

      </nav>
      
    </>
  )
}

export default Navbar