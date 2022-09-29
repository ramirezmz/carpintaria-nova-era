import React from 'react'
import {Content, Paragraph, Title, ContentValore} from './styled'

function About() {
   return (
      <Content>
         <Title>Sobre a empresa</Title>
         <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
         <Title>Valores</Title>
         <ContentValore>
            <img src="/public/valores-compromisso.svg" alt="compromisso" />
            <img src="/public/valores-excelencia.svg" alt="excelencia" />
            <img src="/public/valores-melhoria continua.svg" alt="melhoria" />
         </ContentValore>
      </Content>
   )
}

export default About
