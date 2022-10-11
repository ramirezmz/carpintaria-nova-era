import React from 'react'
import {ValueText, Line, ValueContent} from './styled'

interface ValueProps {
   title: string
   description: string
}

function Value({title, description}: ValueProps) {
   return (
      <ValueContent>
         <ValueText>
            <h1>{title}</h1>
         </ValueText>
         <Line>|</Line>
         <ValueText>
            <p>{description}</p>
         </ValueText>
      </ValueContent>
   )
}

export default Value