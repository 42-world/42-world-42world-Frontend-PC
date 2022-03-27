import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/organisms/TopNav";
import Community from "./components/pages/Community";
import Login from "./components/pages/Login";
import Main from "./components/pages/Main";
import Mypage from "./components/pages/Mypage";
import Writing from "./components/pages/Writing";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopNav />}>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/community" element={<Community />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/writing" element={<Writing />} />
        </Route>
        {/* <Route path="/" element={<LoginCheck />}>
          
            <Route path="/" element={<Main />} />
            <Route path="/topics/:slug" element={<_id />} />
            <Route path="/search/:query" element={<_query />} />
            <Route path="/article/:key" element={<_key />} />
          </Route>
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
