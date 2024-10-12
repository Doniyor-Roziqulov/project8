import React from "react";
import { FcGoogle } from "react-icons/fc";

interface LogInProps {
    action: string;
    setAction: React.Dispatch<React.SetStateAction<string>>;
}

const LogIn: React.FC<LogInProps> = ({ action, setAction }) => {
    return (
        <div>
            <form className="w-[400px]" action="">
                <div className="mb-5">
                    <p className="font-medium text-[#EFEFEF] mb-3">Name</p>
                    <input
                        required
                        className="rounded-lg bg-[#1F1F22] h-12 w-full"
                        type="text"
                        name=""
                        id=""
                    />
                </div>
                <div className="mb-5">
                    <p className="font-medium text-[#EFEFEF] mb-3">Username</p>
                    <input
                        required
                        className="rounded-lg bg-[#1F1F22] h-12 w-full"
                        type="text"
                        name=""
                        id=""
                    />
                </div>
                <div className="mb-5">
                    <p className="font-medium text-[#EFEFEF] mb-3">Email</p>
                    <input
                        required
                        className="rounded-lg bg-[#1F1F22] h-12 w-full"
                        type="email"
                        name=""
                        id=""
                    />
                </div>
                <div className="mb-[30px]">
                    <p className="font-medium text-[#EFEFEF] mb-3">Password</p>
                    <input
                        required
                        className="rounded-lg bg-[#1F1F22] h-12 w-full"
                        type="password"
                        name=""
                        id=""
                    />
                </div>
                <button className="text-white font-semibold leading-5 py-[13px] transition-all hover:bg-white hover:text-[#877EFF] mb-5 bg-[#877EFF] rounded-lg w-full">
                    Sign Up
                </button>
                <button
                    type="button"
                    className="flex items-center text-[#1F1F22] bg-[#fff] gap-x-3 py-3 rounded-lg w-full justify-center">
                    <FcGoogle className="text-2xl" />
                    Sign up with Google
                </button>
                <div className="flex items-center gap-x-1 justify-center mt-8">
                    <p className="text-sm leading-5 text-white">
                        Don’t have an account?
                    </p>
                    <button
                        type="button"
                        onClick={() => setAction("Log in")}
                        className="font-semibold text-[#877EFF] text-sm leading-5">
                        {action === "Sign In" ? "Log in" : "Sign Up"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;
