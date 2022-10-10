import React from 'react'
import Button from '../Button/Button'
import Field from '../Field/Field'
import { Content } from './styled'

function Form() {
   return (
      <Content>
         <form action="#">
            <h1>Entre em contato e faça seu orçamento</h1>
            <Field label="Nome" placeholder="Digite o seu nome" />
            <Field label="Email" placeholder="Digite o seu email" />
            <Field label="Mensagem" placeholder="Digite a sua mensagem" />
            
            <Button>Enviar</Button>
         </form>
      </Content>
   )
}

export default Form
