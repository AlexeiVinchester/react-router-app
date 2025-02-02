import { Await, Link, json, useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { BlogFilter } from "../components/BlogFilter";
import { Suspense } from "react";

const Blogpage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');
    const startsFrom = latest ? 80 : 1;

    const { posts } = useLoaderData();

    const { signout } = useAuth();
    const navigate = useNavigate();

    const handleClick = () => {
        signout(() => navigate('/', { replace: true }))
    };

    return (
        <>
            <h1>Our posts here: </h1>
            <p>
                <Link to='/blog/new'>Create new post</Link>
                <button onClick={handleClick}>Log out</button>
            </p>

            <BlogFilter
                setSearchParams={setSearchParams}
                latest={latest}
                postQuery={postQuery}
            />

            <Suspense fallback={<h1>Loading posts...</h1>} >
                <Await resolve={posts}>
                    {
                        (resolvedPosts) => (
                            <>
                                {
                                    resolvedPosts.filter((post) => post.title.includes(postQuery) && post.id >= startsFrom)
                                        .map(post => (
                                            <li key={post.id}>
                                                <Link to={`/blog/${post.id}`}>
                                                    {post.title}
                                                </Link>
                                            </li>

                                        ))
                                }
                            </>
                        )
                    }
                </Await>
            </Suspense>
        </>
    );
};

const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    /*if (!response.ok) {
        throw new Response('', {statusText: 'Not found!', status: response.status})
        //throw new Error('404 not found');
    }*/
    const posts = await response.json();
    return posts;
}

const blogLoader = async () => {
    const posts = await getPosts();
    if (!posts.length) {
        throw json({message: 'Not found', reason: 'Wrong url'}, {status: 404})
    }

    return { posts };
}

export { Blogpage, blogLoader }

