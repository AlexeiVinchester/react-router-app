import { Route, Navigate, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Aboutpage } from "./pages/Aboutpage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Blogpage, blogLoader } from "./pages/Blogpage";
import { Layout } from "./components/Layout";
import { Singlepage, postLoader } from "./pages/Singlepage";
import { Createpost } from "./pages/Createpost";
import { EditPost } from "./pages/EditPost";
import { Loginpage } from "./pages/Loginpage";
import { Requireauth } from "./hoc/Requireauth";
import { AuthProvider } from "./hoc/AuthProvider";
import { Contactspage } from "./pages/Contactspage";
import { Teampage } from "./pages/Teampage";
import { ErrorPage } from "./pages/ErrorPage";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Homepage />} />
    <Route path="about" element={<Aboutpage />}>
      <Route path="contacts" element={<Contactspage />} />
      <Route path="team" element={<Teampage />} />
    </Route>
    <Route path="about-us" element={<Navigate to="/about" replace />} />
    <Route path="blog" element={<Blogpage />} loader={blogLoader} errorElement={<ErrorPage />}/>
    <Route path="blog/:id" element={<Singlepage />} loader={postLoader}/>
    <Route path="blog/new" element={
      <Requireauth>
        <Createpost />
      </Requireauth>
    } />
    <Route path="login" element={<Loginpage />} />
    <Route path="blog/:id/edit" element={<EditPost />} />
    <Route path="*" element={<Notfoundpage />} />
  </Route>
));

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

    </>
  );
}

export default App;
