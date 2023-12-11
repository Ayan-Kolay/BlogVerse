import React from 'react'
import storageService from "../../appwrite/storageService"

import {Link, redirect} from 'react-router-dom'
import ImageContainer from './ImageContainer'
import parse from 'html-react-parser'
import authService from '../../appwrite/authService'

function PostCard({$id, title, featuredImage,content,$createdAt,field,time}) {
  const date = new Date($createdAt).toDateString()
  const renderContent = parse(content.substring(0,100))[0]?parse(content.substring(0,100))[0]?.props?.children:parse(content.substring(0,100))

  return (
    <Link to={`/post/${$id}`}>
{/* 
        <div className='flex w-full gap-3'>
          <div className='flex flex-col text-left flex-wrap w-3/4'>
            <div className='flex gap-3 '>
               <img src='' alt='userImage'></img> 
            </div>

            <h2 className='text-xl font-bold'>{title}</h2>
            <p className='text-gray-700'>{renderContent}</p>
            <div className='flex flex-wrap'>
            <p className='font-semibold'>{date}</p>
            <p>{field}</p>
            <p>{time} min read</p>
            </div>

          </div>
          <ImageContainer image={storageService.getFilePreview(featuredImage)}/>
        </div>
         */}



<div class="w-[300px] rounded-md border">


<ImageContainer image={storageService.getFilePreview(featuredImage)}/>

  <div class="p-4">
    <h1 class="inline-flex items-center text-lg font-semibold">
     {title}  {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </h1>
    <p class="mt-3 text-sm text-gray-600">
      {renderContent}
    </p>
    <div class="mt-4">
      <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
        #Macbook
      </span>
      <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
        #Apple
      </span>
      <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
        {time} min read
      </span>
    </div>
    <button onClick={()=>redirect(`/post/${$id}`)}
      type="button"
      class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Read
    </button>
  </div>
</div>

    </Link>
  )
}


export default PostCard