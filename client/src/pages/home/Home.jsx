import React from 'react'
import { useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import axios from "axios"
import { useEffect } from 'react'
const Home = () => {
  const [posts, setPosts] = useState([])

  const cat = useLocation().search

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const res =await axios.get(`/posts${cat}`)
        setPosts(res.data)
      }
      catch (err){
        console.log(err)
      }
    }
    fetchData()
  },[cat])

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://s0.rbk.ru/v6_top_pics/media/img/6/86/756704831220866.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://aif-s3.aif.ru/images/028/998/fea2ed83e8a8484dbf121414e616dcf4.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://ispanskijshuanom.ru/blog/42-single-default/test36.jpg"
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://cdn.forbes.ru/files/1082x727/photo_galleries/mercedes-benz_g_63_amg_w_463_3._facelift_-_frontansicht_7._august_2012_stuttgart.jpg__1582289638__61631.webp",
  //   },
  // ];
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/posts/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
                <p>{getText(post.desc)}</p>
                <button>Read More</button>        
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home