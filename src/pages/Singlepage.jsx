import { Suspense } from "react";
import { Link, useNavigate, useLoaderData, useAsyncValue, defer } from "react-router-dom";
import { Await } from "react-router-dom";

const Post = () => {
    const post = useAsyncValue();
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    );
}
const Comments = () => {
    const comments = useAsyncValue();
    return (
        <div>
            <h2>Comments</h2>
            {
                comments.map(comment => (
                    <div key={comment.name}>
                        <h2>{comment.email}</h2>
                        <h4>{comment.name}</h4>
                        <p>{comment.body}</p>
                    </div>
                ))
            }
        </div>
    );
}
const Singlepage = () => {

    const { post, id, comments } = useLoaderData();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return (
        <div>
            <Link to={`/blog/${id}/edit`}>Edit post</Link>
            <p></p>
            <button onClick={goBack}>Go Back</button>
            <Suspense fallback={<h1>Loading post...</h1>}>
                <Await resolve={post}>
                    <Post />
                </Await>
            </Suspense>
            <Suspense fallback={<h1>Loading comments...</h1>}>
                <Await resolve={comments}>
                    <Comments />
                </Await>
            </Suspense>

        </div>
    );
};

const getPost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    return data;
}

const getComments = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const data = await response.json();
    return data;
}

const postLoader = async ({ params }) => {
    const id = params.id;
    return { post: getPost(id), id, comments: await getComments(id)};
};

export { Singlepage, postLoader }

