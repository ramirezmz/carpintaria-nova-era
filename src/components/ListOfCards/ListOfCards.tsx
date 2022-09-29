import React from 'react'
import data from '../../data/services.json'
import Card from '../Card/Card'

function ListOfCards() {
   return (
      <div>
         {
            data.map(({image, name, id}) =>
               <Card 
                  url={image}
                  name={name}
                  key={id}
               />)
         }
      </div>
   )
}

export default ListOfCards
