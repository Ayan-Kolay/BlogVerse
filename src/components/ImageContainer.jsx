import React from 'react'

function ImageContainer({image=null}) {

  return (
    <div>
      <img className='"h-[200px] w-full rounded-t-md object-cover max-h-40' src={image} alt='post-image'></img>
    </div>
  )
}

export default ImageContainer
