import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import DashBoardPage from "./pages/DashBoardPage";
import BlogDashBoard from "./pages/BlogDashBoard";
import TeamDashBoard from './pages/TeamDashBoard';
import ServiceDashBoard from './pages/ServiceDashBoard';

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/dashboard" element={<DashBoardPage/>} />
          <Route path="/dashboard/blogs" element={<BlogDashBoard/>} />
          <Route path="/dashboard/teams" element={<TeamDashBoard/>} />
          <Route path="/dashboard/services" element={<ServiceDashBoard/>} />

        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
