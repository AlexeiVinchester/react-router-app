import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
const Blogpage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('post') || '';

    const latest = searchParams.has('latest');
    const startsFrom = latest ? 80 : 1;

    const {signout} = useAuth();
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const query = form.search.value;

        const isLatest = form.latest.checked;

        const params = {};

        if(query.length) params.post = query;
        if(isLatest) params.latest = true;

        setSearchParams(params);
    };

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
            <p>
                <Link to='/blog/new'>Create new post</Link>
                <button onClick={handleClick}>Log out</button>
            </p>

            <form autoComplete="off" onSubmit={handleSubmit}>
                <input type="search" name="search" />
                <label style={{padding: '0 1rem'}}>
                    <input type="checkbox" name="latest" /> New only
                </label>
                <input type="submit" value="search"/>
            </form>
          
            {
                posts.filter((post) => post.title.includes(postQuery) && post.id >= startsFrom)
                     .map(post => (
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

