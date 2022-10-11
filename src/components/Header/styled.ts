import styled from 'styled-components'
import { Navicon } from '@styled-icons/evil/Navicon'
import {DesignServices} from '@styled-icons/material-rounded/DesignServices'

export const HeaderContent = styled.header`
   display: flex;
   align-items: center;
   justify-content: end;
    @media only screen and (max-width: 700px) {
      display: flex;
      text-align: center;
      justify-content: center;
   }

   @media only screen and (max-width: 600px) {
      display: flex;
      align-self: stretch;
   }
`
export const DesignServicesIcon = styled(DesignServices)`
   color: #fff;
`

export const List = styled.ul`
   padding: 1.5rem;
   font-size: 1.2rem;
   margin-right: 3rem;
   a {
      margin-left: 3rem;
      text-decoration: none;
      
   }
   a:hover {
      color: #f7ae53;
      transition: 0.3s;
   }
`

export const NavIcon = styled(Navicon)`
   color: #fff;
   width: 2.4rem;
   padding: 1.5rem;
   cursor: pointer;
   `
