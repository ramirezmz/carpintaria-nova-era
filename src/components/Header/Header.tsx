import React from 'react'
import { HeaderContent, List } from './styled'

function Header() {

   return (
      <HeaderContent>
         <List>
            <a href='#about'>Sobre a empresa</a>
            <a href='#services'>Serviços</a>
            <a href='#contact'>Contato</a>
         </List>
      </HeaderContent>
   )
}

export default Header
