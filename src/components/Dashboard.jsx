import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import BlogContext from "../Context/BlogContext";
import { toast } from "react-toastify";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import {motion} from "motion/react";
import Profile from "../Popup-modals/Profile";
import Footer from "./Footer";

function Dashboard() {

    const navigate = useNavigate();

    const {blog,setBlog} = useContext(BlogContext);

    const user = JSON.parse(localStorage.getItem("user"));
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

    const handleDelete = (index) => {
        const isConfirm = window.confirm("Are you sure you want to delete this blog?");
        if (isConfirm) {
            const deletedBlogs = blog.filter((_, i) => i !== index);
            setBlog(deletedBlogs);
            localStorage.setItem("blog", JSON.stringify(deletedBlogs));
            toast.success("Blog Deleted Successfully");
        }else{
            toast.error("Blog Not Deleted");
        }
    };

  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
    >
        <div className="bg-[#e9edc9]">
            <div className="flex justify-between py-1 px-4 bg-[#ccd5ae] items-center sticky top-0 z-50">
                <h1 className="font-bold text-2xl text-white">Dashboard</h1>
                <Profile/>
            </div>

            <div className="py-10 px-3 flex justify-end">
                <button 
                    onClick={()=>navigate("/addblog")}
                    className="bg-green-500 rounded-full px-3 py-1 text-white hover:cursor-pointer text-lg font-semibold"
                >
                    Create blog +
                </button>
            </div>

            <div className="px-8 pb-8 flex flex-col items-center">
                <h1 className="text-2xl font-semibold mb-2 text-black">Blog Posts</h1>
                <div 
                    className="mt-3 bg-[#fefae0] rounded-2xl py-3 px-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 items-start"
                >
                    {blog.map((b, index) => (
                        <div
                            key={index}
                            className="bg-[#faedcd] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200 mb-2 mt-3"
                        >
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">
                                {b.title}
                            </h4>
                            
                            <div 
                                className="break-words blog-content line-clamp-4" 
                                dangerouslySetInnerHTML={{ __html: b.description }} 
                            >
                                {/* {b.description} */}
                            </div>
                            
                            <div className="mt-3 flex gap-3 items-center justify-between" >
                                <button 
                                    onClick={()=>window.open(`/viewblog/${index}`,"_blank")}
                                    className="mt-4 py-1 px-3 rounded-2xl hover:scale-105 transition duration-200 shadow hover:cursor-pointer text-blue-500 text-sm font-semibold bg-white"    
                                >
                                    Read More
                                </button>
                                
                                <div className="mt-4 flex gap-3" >
                                    <button
                                        className="flex items-center justify-center p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition duration-200 shadow hover:cursor-pointer"
                                        onClick={() => navigate(`/editblog/${index}`)}
                                        >
                                        <MdEdit size={20} />
                                    </button>

                                    <button
                                        className="flex items-center justify-center p-2 rounded-full bg-red-500 text-white hover:bg-red-600 hover:scale-105 transition duration-200 shadow hover:cursor-pointer"
                                        onClick={() => handleDelete(index)}
                                        >
                                        <RiDeleteBin5Line size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    </motion.div> 
  );
}

export default Dashboard;