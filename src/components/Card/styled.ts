import styled from 'styled-components'

export const CardContent = styled.section`
   width: 12rem;
   height: 16rem;
   background-color: #745930;
   color: #fff;
   display: flex;
   flex-direction: column;
   align-items: center;
   border-radius: 8px;
   margin: 2rem;
   img {
      border-radius: 8px 8px 0 0;
      width: 12rem;
      height: 14rem;
   }
`

export const TitleCard = styled.section`
   background: none;
   padding: 0.3rem;
   h3 {
      background: none;
   }
`

export const ValueContent = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0.5rem;
`

export const ValueText = styled.div`
   background-color: #745930;
   max-width: 20rem;
   min-width: 12rem;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   text-align: center;
   h1, p {
      padding: 2rem;
      background: none;
   }
`
export const Line = styled.div`
   background-color: #745930;
   width: 8px;
   height: 2rem;
   color: #745930;
`