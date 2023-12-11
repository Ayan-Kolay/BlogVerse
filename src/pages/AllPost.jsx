import React, {useState, useEffect} from 'react'
import  { Container, PostCard } from '../components'
import databaseService from '../../appwrite/databaseService'
function AllPost() {
    const [posts,setPosts] = useState()
    useEffect(() => {
      databaseService.getPosts([]).then((post)=>{
        // console.log(post);
        if(post) {
          setPosts(post.documents)
          console.log(post);
        }
        
      }).catch((error)=>{
        console.log(error);
      })
    }, [])
    
  return posts? (
    <div className=' py-8'>
      <Container>
        <div className='flex flex-wrap justify-center'>

        {posts.map((post)=>(
            <div key={post.$id} className='p-4  rounded-xl'>
                <PostCard {...post} />
            </div>
            ))}
            </div>
      </Container>
    </div>
  ): null

}

export default AllPost
