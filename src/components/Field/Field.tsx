import React from 'react'
import {ContentField} from './styled'

interface FieldProps{
   label: String
   placeholder: string
}

function Field(props:FieldProps) {
  return (
      <ContentField>
         <label>{props.label}</label>
         <input placeholder={props.placeholder}/>
      </ContentField>
  )
}

export default Field