import React from 'react'
import {BannerComponent} from './styled'

function Banner() {
   return (
      <picture>
         <source media="(max-width:700px)" srcSet="https://i.ibb.co/SXksVXY/banner-tablet.png"/>
         <BannerComponent src="https://i.ibb.co/Jz6f8xf/banner.png" alt='banner carpintaria nova era'/>
      </picture>
   )
}

export default Banner
