import { Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";

const Layout = () => {
    return (
        <>
            <header>
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/blog">Blog</CustomLink>
              <CustomLink to="/about">About</CustomLink>
            </header>

            <main className="container">
                <Outlet />
            </main>

            <footer>
                <h1>2024</h1>
            </footer>
        </>
    );
};


export {Layout}


