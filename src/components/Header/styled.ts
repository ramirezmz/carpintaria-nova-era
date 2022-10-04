import styled from "styled-components"
import { Navicon } from "@styled-icons/evil/Navicon"

export const HeaderContent = styled.header`
   display: flex;
   align-items: center;
   justify-content: end;
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
