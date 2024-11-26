import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import LandingPage from "./Component/Pages/LandingPage/LandingPage.jsx";
import ViewPage from "./Component/Pages/DetailPage/ViewPage.jsx";
import CreateBlog from "./Component/Pages/CreatePage/CreateBlog.jsx";
import LoginPage from "./Component/Pages/LoginPage/LoginPage.jsx";
import SignUpPage from "./Component/Pages/SignUpPage/SignUpPage.jsx";
import Profile from "./Component/Pages/Profile/Profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <SkeletonTheme baseColor="#ded9d9" highlightColor="#bdbbbb">
        <div className="App bg-black text-white">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/viewPage/:postId" element={<ViewPage />} />
            <Route exact path="/createPost" element={<CreateBlog />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/signUp" element={<SignUpPage />} />
            <Route exact path="/profile" element={<Profile/>} />
          </Routes>
        </div>
      </SkeletonTheme>
    </BrowserRouter>
  );
}

export default App;
