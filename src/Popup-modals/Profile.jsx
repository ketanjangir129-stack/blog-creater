import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Profile() {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const user = JSON.parse(localStorage.getItem("user"));
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setOpen(false);
        navigate("/");
        toast.success("Logged out Successfully");
    };

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                className="py-2 px-4 hover:cursor-pointer text-[16px] font-medium flex"
            >
                <CgProfile size={35} className='text-blue-400' />
            </button>
            <Dialog open={open} onClose={setOpen} className="relative">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-[#ccd5ae] transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-[#fefae0] dark:bg-gray-900 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg lg:w-80 data-closed:sm:translate-y-0 data-closed:sm:scale-95 p-5"
                        >   
                            <div>
                                <div>
                                    <h2 className='text-lg font-bold text-gray-500'>Username:</h2>
                                    <h2 className='text-lg text-gray-800 font-semibold'>{user.email}</h2>
                                </div>
                                <button 
                                    onClick={handleLogout} 
                                    className="mt-2 hover:cursor-pointer bg-red-600 border-2 px-3 py-0.5 rounded-full text-white"
                                >
                                    LogOut
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
export default Profile;