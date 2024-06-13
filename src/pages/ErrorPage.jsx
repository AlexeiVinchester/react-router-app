import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h2>{error.status}</h2>
                <p>{error.data.message}</p>
                <p>{error.data.reason}</p>
            </div>
        );
    }
    return (
        <>'Something go wrong!</>
    )
}

export { ErrorPage }

