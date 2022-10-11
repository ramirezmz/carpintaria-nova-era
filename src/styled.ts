import styled ,{ createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   font-family: 'Arimo', sans-serif;
   background-color: #1E1E1E;
   overflow-x: hidden;
}

a {
   color: #fff;
}
`

export const MainContent = styled.main`
   min-width: 320px;
   max-width: 1440px;
`