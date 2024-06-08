import { useState } from "react";

const BlogFilter = ({ setSearchParams, postQuery, latest}) => {

    const [queryParam, setQueryParam] = useState(postQuery);
    const [latestParam, setLatestParam] = useState(latest);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const query = form.search.value;

        const isLatest = form.latest.checked;

        const params = {};

        if (query.length) params.post = query;
        if (isLatest) params.latest = true;

        setSearchParams(params);
    };

    return (
        <div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input 
                    type="search" name="search" value={queryParam} 
                    onChange={(e) => setQueryParam(e.target.value)}
                />
                <label style={{ padding: '0 1rem' }}>
                    <input 
                        type="checkbox" name="latest" checked={latestParam} 
                        onChange={(e) => setLatestParam(e.target.checked)}
                    /> 
                    New only
                </label>
                <input type="submit" value="search" />
            </form>
        </div>
    )
}

export { BlogFilter }
