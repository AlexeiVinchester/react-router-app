import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const Loginpage = () => {
    const {signing} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const fromPage = location.state?.from?.pathname || '/home';

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const userName = form.userName.value;
      signing(userName, () => navigate(fromPage, {replace: true}));

    };



    return (
      <>
        <h1>Login page</h1>
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input name="userName" />
          <button type="submit">Sign in</button>
        </form>
        
      </>

    )
}

export {Loginpage}