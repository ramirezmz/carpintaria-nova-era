import React from 'react'
import {CardContent, TitleCard} from './styled'

interface CardProps {
   url: string,
   name: string
}

function Card({url, name}: CardProps) {
   return (
      <CardContent>
         <img src={url} alt={name} />
         <TitleCard>
            <h3>{name}</h3>
         </TitleCard>
      </CardContent>
   )
}

export default Card
