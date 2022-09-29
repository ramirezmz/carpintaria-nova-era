import React from 'react'
import {ContentServices, Title} from './styled'
import ListOfCards from '../components/ListOfCards/ListOfCards'

function Services() {
   return (
      <ContentServices>
         <Title>Serviços</Title>
         <span>Atendemos em toda Macaé e região</span>
         <ListOfCards />
      </ContentServices>
   )
}

export default Services
