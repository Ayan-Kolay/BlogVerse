import React from 'react'
import BlogVerse from '../assets/BlogVerse.svg'
// import downlaod from '../assets/downlaod.svg'

function Logo({width = '100rem'}) {
  return (
    <div><img src={BlogVerse} alt="" width='150px' /></div>
  )
}

export default Logo