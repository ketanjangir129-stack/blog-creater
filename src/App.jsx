import {Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import LoginSignup from "./components/LoginSignup";
import Dashboard from "./components/Dashboard";
import AddBlog from "./components/AddBlog";
import BlogContextProvider from "./Context/BlogContextProvider";
import EditBlog from "./components/EditBlog";
import ViewBlog from "./components/ViewBlog";
import {AnimatePresence} from "motion/react";

function App() {

  const location = useLocation(); 

  return (
    <>
      <BlogContextProvider>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LoginSignup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addblog" element={<AddBlog />} />
            <Route path="/editblog/:index" element={<EditBlog />} />
            <Route path="/viewblog/:index" element={<ViewBlog />} />
          </Routes>
        </AnimatePresence>
        <ToastContainer position="top-center" />
      </BlogContextProvider>
    </>
  );
}

export default App;