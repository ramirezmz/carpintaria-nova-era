import React from 'react'
import data from '../../data/services.json'
import Card from '../Card/Card'
import {Content} from './styled'

function ListOfCards() {
   return (
      <Content>
         {
            data.map(({image, name, id}) =>
               <Card 
                  url={image}
                  name={name}
                  key={id}
               />)
         }
      </Content>
   )
}

export default ListOfCards
