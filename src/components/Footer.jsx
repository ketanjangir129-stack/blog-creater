import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer className="bg-[#d4a373] text-white">
            <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Branding */}
                <div>
                    <h2 className="text-2xl font-bold">Blog App</h2>
                    <p className="text-white mt-2">
                        Create, manage & share your thoughts easily.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="flex flex-col text-white">
                        <Link to="/dashboard" className="hover:text-white cursor-pointer">Dashboard</Link>
                        <Link to="/addblog" className="hover:text-white cursor-pointer">Add Blog</Link>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Connect</h3>
                    <div className="flex gap-4 text-white">
                        <a href="https://github.com/ketanjangir129-stack" target="_blank" className="hover:text-white">
                        GitHub
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-white">
                        LinkedIn
                        </a>
                    </div>
                </div>

            </div>
            {/* Bottom */}
            <div className="text-center text-white py-3 text-sm">
                © {new Date().getFullYear()} Ketan Jangir. All rights reserved.
            </div>
        </footer>
    )
}
export default Footer;