import { Route, Routes, Navigate} from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Aboutpage } from "./pages/Aboutpage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Blogpage } from "./pages/Blogpage";
import { Layout } from "./components/Layout";
import { Singlepage } from "./pages/Singlepage";
import { Createpost } from "./pages/Createpost";
import { EditPost } from "./pages/EditPost";
import { Loginpage } from "./pages/Loginpage";
import { Requireauth } from "./hoc/Requireauth";
import { AuthProvider } from "./hoc/AuthProvider";


function App() {
  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="about-us" element={<Navigate to="/about" replace/>} />
          <Route path="blog" element={<Blogpage />} />
          <Route path="blog/:id" element={<Singlepage />} />
          <Route path="blog/new" element={
            <Requireauth>
              <Createpost />
            </Requireauth>
          } />
          <Route path="login" element={<Loginpage />} />
          <Route path="blog/:id/edit" element={<EditPost />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
      
    </>
  );
}

export default App;
