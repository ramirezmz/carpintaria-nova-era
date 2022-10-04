import React from "react"
import { ContentButton } from "./styled"

interface ButtonProps {
   children: String
}

function Button(props:ButtonProps) {
   return (
      <ContentButton>
         <button>{props.children}</button>
      </ContentButton>
   )
}

export default Button
