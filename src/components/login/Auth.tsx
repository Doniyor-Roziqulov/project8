import { useState } from "react";
import logbg from "../../images/logbg.png";
import logo from "../../images/Logo.svg";
import LogIn from "./LogIn";
import SignIn from "./SignIn";

const Auth = () => {
    const [action, setAction] = useState<string>("Sign In");
    return (
        <section className="bg-[#000]">
            <div>
                <div className="flex">
                    <div className="w-1/2 flex items-center justify-center">
                        <div>
                            {action !== "Sign In" && (
                                <img
                                    className="block mx-auto mb-[68px]"
                                    src={logo}
                                    alt="logo"
                                />
                            )}
                            <h2 className="text-white text-3xl font-bold leading-10 mb-3 text-center">
                                {action === "Sign In"
                                    ? "Create a new account"
                                    : "Log in to your account"}
                            </h2>
                            <p className="text-[#7878A3] leading-5 mb-8 text-center">
                                {action === "Sign In"
                                    ? " To use snapgram, Please enter your details."
                                    : "Welcome back! Please enter your details."}
                            </p>
                            {action === "Sign In" ? (
                                <LogIn action={action} setAction={setAction} />
                            ) : (
                                <SignIn action={action} setAction={setAction} />
                            )}
                        </div>
                    </div>
                    <div className="w-1/2 max-h-[100vh]">
                        <img
                            className="object-cover w-full h-full"
                            src={logbg}
                            alt="Log bg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Auth;
