import { useNavigate } from "react-router-dom";
import BlogContext from "../Context/BlogContext.js";
import { useState,useContext } from "react";
import { toast } from "react-toastify";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import modules from "../reactQuill/modules.js";
import formats from "../reactQuill/formats.js";
import "react-quill-new/dist/quill.bubble.css";
import {motion} from "motion/react";

function AddBlog(){
    const navigate = useNavigate();
    const {blog,setBlog} = useContext(BlogContext);
    const [form,setForm] = useState({
        title:"",
        description:"",
    });
    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value});
    }  
    const handleSubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem("blog",JSON.stringify([...blog,form]));
        setBlog([...blog,form]);
        toast.success("Blog Added Successfully");
        setForm({title:"",description:""});
        navigate("/dashboard");
    }
    
    return(
        <motion.div 
            initial={{opacity:0,scale:0.95}}
            animate={{opacity:1,scale:1}}
            exit={{opacity:0,scale:0.95}}
            className="p-3"
        >
            <div className="text-3xl hover:cursor-pointer" onClick={()=>navigate("/dashboard")}>
                ←
            </div>
            <div className="flex justify-between items-center pb-2 mt-2">
              <h1 className="text-[28px] font-semibold">Adding Blogs</h1>
            </div>
            <hr className="text-gray-300" />
            <div className="flex justify-center mt-3">
                <form 
                    onSubmit={handleSubmit}
                    name="blogForm"
                    className="p-6 flex flex-col gap-4 border border-white/20
                    rounded-xl bg-white shadow-lg shadow-white/40 w-200"
                >
                    <label htmlFor="title" className="flex flex-col gap-1 text-black text-sm">
                        <h1 className="text-sm font-semibold mb-2">Blog Title:</h1>
                        <input
                            type="text"
                            id="ptitle"
                            name="title"
                            placeholder="Enter Blog Title"
                            className="px-3 py-2 rounded-md bg-gray-100 text-black
                            border border-gray-300
                            focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            value={form.title}
                            onChange={handleChange}
                            required
                            />
                    </label>
                    
                    <h1 className="text-sm font-semibold">Blog Description : </h1>
                    <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        value={form.description}
                        onChange={(value)=>setForm({...form,description:value})}
                        className="h-70"
                    />

                    {/* <textarea 
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="px-3 py-2 rounded-md bg-gray-100 text-black
                        border border-gray-300"
                        placeholder="Write Description"
                        rows={8}
                    >
                    </textarea> */}
                    <button
                        type="submit"
                        className="mt-10 py-2 rounded-md bg-blue-600 text-white
                        hover:bg-blue-700 transition
                        shadow-md shadow-white/30 cursor-pointer"
                    >
                        Adding Blog
                    </button>
                </form>
            </div>
        </motion.div>
    )
}
export default AddBlog;