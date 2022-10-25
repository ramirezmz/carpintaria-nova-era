import React from 'react'
import Value from '../components/Card/Value'
import {Content, Paragraph, Title, ContentValore} from './styled'
import values from '../data/values.json'

function About() {
   return (
      <Content>
         <Title>Sobre a empresa</Title>
         <Paragraph>
            Somos uma empresa especializada no ramo da carpintaria, situada na cidade de Macaé, norte do estado do Rio de Janeiro. A Carpintaria Nova Era, foi criada em 2018, por Horácio Andrade, carpinteiro com 16 anos de profissão. Hoje, somos uma equipe composta por 5 pessoas, que trabalham juntas para oferecer o melhor serviço aos nossos clientes, e atendemos a toda a região norte e região dos lagos fluminense.
         </Paragraph>
         <Title>Valores</Title>
         <ContentValore>
            { values.map(({title, description, id}) => <Value title={title} description={description} key={id}/>) }
         </ContentValore>
      </Content>
   )
}

export default About
