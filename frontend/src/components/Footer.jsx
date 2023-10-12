import React from 'react';
import { LinkedinLogo, InstagramLogo } from 'phosphor-react';
function Footer(){
  return(
    <div>
      <footer className={"w-full flex  bg-[#BC9A42] items-center"}>
        <div className={"w-[50%] justify-start px-4"}>
          <h2>
            Todos os direitos reservados(C)
          </h2>
        </div>
        <div className={"flex w-[50%] justify-end px-4"}>
          <LinkedinLogo size ={32}/>
          <InstagramLogo size={32}/>
        </div>
      </footer>
    </div>
  )
}

export default Footer