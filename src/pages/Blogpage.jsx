import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Blogpage = () => {

    const [posts, setPosts] = useState([]);
    console.log(useLocation());

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return (
        <>
            <h1>Our posts: </h1>
            {
                posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/blog/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                    
                ))
            }
        </>
    );
};

export {Blogpage}

