import BlogContext from "./BlogContext";
import { useState} from "react";


function BlogContextProvider({children}){
    
    // const [blog,setBlog] = useState([]);
    const [blog,setBlog] = useState(JSON.parse(localStorage.getItem("blog")) || []);

    return(
        <BlogContext.Provider value={{blog,setBlog}}>
            {children}
        </BlogContext.Provider>
    )
}
export default BlogContextProvider;