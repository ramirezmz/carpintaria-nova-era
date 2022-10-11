import React from 'react'
import { FooterContent, InfoContent } from './styled'

function Footer() {
   return (
      <FooterContent>
         <img src="https://i.ibb.co/t4KZH3V/footer.png" alt="Carpintaria logo" />
         <InfoContent>
            <h3>CNPJ: 45361976000128</h3>
            <span>Telefone: (22) 99925-7134</span>
            <span>Macaé RJ</span>
            <span>Todos os direitos reservados</span>
         </InfoContent>
      </FooterContent>
   )
}

export default Footer