import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
const Blogpage = () => {

    const {signout} = useAuth();
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    console.log(useLocation());

    const handleClick = () => {
        signout(() => navigate('/', {replace: true}))
    };

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return (
        <>
            <h1>Our posts: </h1>
            <Link to='/blog/new'>Create new post</Link>
            <button onClick={handleClick}>Log out</button>
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

