import React from 'react'
import {Content} from './styled'

function Form() {
   return (
      <Content>
         <form action="#">
            <h1>Entre em contato e faça seu orçamento</h1>
            <label>Nome</label>
            <input type="text" />
         </form>
      </Content>
   )
}

export default Form