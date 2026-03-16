import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginSignup(){

    const navigate = useNavigate();
    
    const [login , setLogin] = useState(true);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            toast.error("Passwords do not match");
            return;
        }
        const user = {
            email,
            password
        };
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Signup Successful");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setLogin(true);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser) {
            toast.error("User not found");
            return;
        }
        if (email === storedUser.email && password === storedUser.password) {
            localStorage.setItem("isLoggedIn", true);
            toast.success("Login Successful");
            navigate("/dashboard");
        } else {
            toast.error("Please Enter Valid Details");
        }
    };

    return(
        <>
            <div className="bg-[#228cdc]  h-screen w-full">
                <div className="flex justify-center items-center h-screen">
                    <div className="bg-white shadow p-5 rounded-[7px] w-[400px]">
                        <div className="flex">
                            <button 
                                onClick={()=>setLogin(true)}
                                className={` py-2 px-4 rounded-t-[15px] w-full hover:cursor-pointer font-semibold text-[17px]  ${login ? "bg-blue-950 text-white" : "bg-gray-200" }`}
                            >
                                Login
                            </button>
                            <button 
                                onClick={()=>setLogin(false)}
                                className={` py-2 px-4 rounded-t-[15px] w-full hover:cursor-pointer font-semibold text-[17px]  ${!login ? "bg-blue-950 text-white" : "bg-gray-200"}`}
                            >
                                SignUp
                            </button>
                        </div>
                        {login ? 
                            <div className="flex flex-col gap-3 mt-7 pb-4">
                                <form 
                                    name="loginForm"
                                    className="flex flex-col gap-3 mt-7 pb-4"
                                    onSubmit={handleLogin}
                                >
                                    <h1 className="font-semibold text-2xl">Login</h1>
                                    <input 
                                        name="Loginemail"
                                        type="email" 
                                        placeholder="Email"
                                        className="border border-gray-300 rounded-[3px] p-2 hover:border-gray-300"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        required
                                    />
                                    <input 
                                        type="password"
                                        name="Loginpassword" 
                                        placeholder="Password"
                                        className="border border-gray-300 rounded-[3px] p-2 hover:border-gray-300"
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}
                                        required
                                    />
                                    <button 
                                        className="border rounded-[3px] p-2 hover:cursor-pointer bg-blue-950 text-white"
                                    >
                                        Login
                                    </button>
                                    <p className="text-center text-[16px]">
                                        Not a Member ?  
                                        <a  
                                            href="#" 
                                            className="pl-1 text-blue-400"
                                            onClick={()=>setLogin(false)}
                                        >
                                            SignUp Now
                                        </a>
                                    </p>
                                </form> 
                            </div>
                            :  
                            <form
                                name="signUpForm" 
                                className="flex flex-col gap-3 mt-7 pb-4"
                                onSubmit={handleSignup}
                            >
                                <h1 className="font-semibold text-2xl">
                                    SignUp
                                </h1>
                                <input 
                                    type="email" 
                                    placeholder="Email"
                                    name="email"
                                    className="border border-gray-300 rounded-[3px] p-2 hover:border-gray-300"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required
                                />
                                <input 
                                    type="password" 
                                    name="password"
                                    placeholder="Password"
                                    className="border border-gray-300 rounded-[3px] p-2 hover:border-gray-300"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    required
                                />
                                <input 
                                    type="password" 
                                    name="Confirm Password"
                                    placeholder="Confirm Password"
                                    className="border border-gray-300 rounded-[3px] p-2 hover:border-gray-300"
                                    value={confirmPassword}
                                    onChange={(e)=>setConfirmPassword(e.target.value)}
                                    required
                                />
                                <button 
                                    className="border rounded-[3px] p-2 hover:cursor-pointer bg-blue-950 text-white"
                                >
                                    SignUp
                                </button>
                            </form>                               
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginSignup;