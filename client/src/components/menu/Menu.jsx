import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Menu = ({cat}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const res = await axios.get(`/posts/?cat=${cat}`);
            setPosts(res.data);
            } catch (err) {
            console.log(err);
            }
        };
        fetchData();
    }, [cat]);

    
    // const posts = [
    //     {
    //         id: 1,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //         img: "https://s0.rbk.ru/v6_top_pics/media/img/6/86/756704831220866.jpg",
    //     },
    //     {
    //         id: 2,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //         img: "https://aif-s3.aif.ru/images/028/998/fea2ed83e8a8484dbf121414e616dcf4.jpg",
    //     },
    //     {
    //         id: 3,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //         img: "https://ispanskijshuanom.ru/blog/42-single-default/test36.jpg"
    //     },
    //     {
    //         id: 4,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //         img: "https://cdn.forbes.ru/files/1082x727/photo_galleries/mercedes-benz_g_63_amg_w_463_3._facelift_-_frontansicht_7._august_2012_stuttgart.jpg__1582289638__61631.webp",
    //     },
    //     ];
    return (
        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
            <img src={`../upload/${post?.img}`} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
        </div>
        ))}
      </div>
    )
}

export default Menu