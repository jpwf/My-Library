import React from 'react'
import {InstagramLogo, LinkedinLogo, TwitterLogo} from 'phosphor-react'

export default function Footer(){
    return(
        <>
            <div>
                <div>
                    Todos os direitos reservados (C)
                </div>
                <div>
                    <InstagramLogo size={24}/>
                    <LinkedinLogo size={24}/>
                    <TwitterLogo size={24}/>
                </div>
            </div>
        </>
    )
}