import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BlogContext from "../Context/BlogContext";
import {motion} from "motion/react";

function ViewBlog(){

    const navigate = useNavigate();

    const {blog} = useContext(BlogContext);
    const {index} = useParams();
    const blogView = blog[index];

    return(
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="p-2"
        >
            {/* <div className="text-3xl hover:cursor-pointer" onClick={()=>navigate("/dashboard")}>
                ←
            </div> */}

            <div className="mt-3 p-2 flex flex-col items-center">
                <h1 className="text-2xl font-semibold mb-2">
                    Blog Post 
                </h1>
                <div 
                    className="mt-3 bg-gray-100 rounded-2xl py-3 px-10 grid grid-cols-1"
                >
                    <div
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200 mb-2 mt-3"
                    >
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">
                            {blogView.title}
                        </h4>
                        
                        <div 
                            className="break-words blog-content" 
                            dangerouslySetInnerHTML={{ __html: blogView.description }} 
                        >
                            {/* {b.description} */}
                        </div>
                    </div>
                </div>
            </div>
            
        </motion.div>   
    )
}
export default ViewBlog;