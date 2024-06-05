import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";


const Singlepage = () => {

    const {id} = useParams();
    const [post, setPost] = useState(null);

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/blog/${id}/edit`}>Edit post</Link>
                    <p></p>
                    <button onClick={goBack}>Go Back</button>
                </>
            )}
        </div>
    );
};

export {Singlepage}

