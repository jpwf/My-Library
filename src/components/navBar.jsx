import React, {useState} from 'react'
import { List } from 'phosphor-react'
// import {Link } from 'react-router-dom';

function Navbar(){
  const [navbar, setNavBar] = useState(false);
  // const activeStyle = "bg-black"
  return(
    <>
      <nav className='w-full items-center gap-[520px]  flex text-base border-b-[1px] h-[55px] border-b-gray-300 bg-[#B1830D] bg-opacity-20'>
        <div className='flex justify-between items-center'>
          <div className=' ml-9 relative justify-start flex-col items-center'>
            <button onClick={() => setNavBar((navbar) => !navbar)} 
            className='items-center ' >
              <List size={32} color="#1f1f1f" className={`${navbar ? "rotate-90" : ""}`} />
            </button>
            {navbar && (
              <div className="bg-[#BC9A42] bg-opacity-25 grid  justify-self-center w-[64px] h-[124px]  leading-6 place-items-center font-extrabold flex-col absolute rounded-2xl border ">
                <h3>Teste</h3>
                <h3>Teste</h3>
                <h3>Teste</h3>
              </div>
            )}
          </div>
        </div>
        <div className='font-bold text-[42px] leading-[38px] justify-center items-center'>
          <h1>My Library</h1>
        </div>

      </nav>
      
    </>
  )
}

export default Navbar