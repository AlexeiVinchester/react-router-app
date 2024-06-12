import { Link, Outlet } from "react-router-dom";
const Aboutpage = () => {
    return (
        <div>
            <h1>About us</h1>
            <p>This is a demo website for React-Router-dom library</p>
            <ul>
                <li><Link to="contacts">Show Contacts</Link></li>
                <li><Link to="team">Show Team</Link></li>
            </ul>
            <Outlet />
        </div>
    
    );
};

export {Aboutpage};