import styled from 'styled-components'

export const Content = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 3.2rem;
   color: #fff;
`

export const Title = styled.h1`
   font-weight: 900;
   background: none;
`

export const Paragraph = styled.p`
   margin: 3rem 0;
   max-width: 53rem;
   line-height: 2rem;
   text-align: center;
   background: none;
`

export const ContentValore = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 1.5rem;
   @media only screen and (max-width: 830px) {
      display: flex;
      flex-direction: column;
   }
`

export const ContentServices = styled.div`
   background-color: #fff;
   width: 100vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   h1 {
      padding-top: 3.6rem;
   }

   span {
      background: none;
      color: #706F6F;
      padding: 0.5rem 0;
   }
`