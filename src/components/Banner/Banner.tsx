import React from 'react'
import {BannerComponent} from './styled'

function Banner() {
   return (
      <picture>
         <source media="(max-width:700px)" srcSet="/public/banner-tablet.png"/>
         <BannerComponent src="/public/banner.png" alt='banner carpintaria nova era'/>
      </picture>
   )
}

export default Banner
