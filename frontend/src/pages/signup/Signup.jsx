import React, { useState } from "react";
import GenderCheck from "./GenderCheck";
import { Link } from "react-router-dom";
import UseSignup from "../../hooks/UseSignup.js";

function Signup() {
    const [input, setInput] = useState({
        fullname: "",
        usernames: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });
    const { loading, signup } = UseSignup();

    const handleGender = (gender) => {
        setInput({ ...input, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(input);
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto border rounded-lg border-blue-800">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up <span className="text-blue-500">ChatUs</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2 ">
                            <span className="text-base label-text">
                                Full Name
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="eg: hemant kumar"
                            className="w-full input input-bordered h-10"
                            value={input.fullname}
                            onChange={(e) =>
                                setInput({ ...input, fullname: e.target.value })
                            }
                        />
                    </div>
                    <label className="label p-2 ">
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input
                        type="text"
                        placeholder="hemant123"
                        className="w-full input input-bordered h-10"
                        value={input.usernames}
                        onChange={(e) => {
                            setInput({ ...input, usernames: e.target.value });
                        }}
                    />
                    <div>
                        <label className="label p-2 ">
                            <span className="text-base label-text">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full input input-bordered h-10"
                            value={input.password}
                            onChange={(e) => {
                                setInput({
                                    ...input,
                                    password: e.target.value,
                                });
                            }}
                        />
                    </div>

                    <div>
                        <label className="label p-2 ">
                            <span className="text-base label-text">
                                Confirm Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="w-full input input-bordered h-10"
                            value={input.confirmPassword}
                            onChange={(e) => {
                                setInput({
                                    ...input,
                                    confirmPassword: e.target.value,
                                });
                            }}
                        />
                    </div>

                    {/* Gender Check box*/}

                    <GenderCheck
                        oncheckboxChange={handleGender}
                        selectedGender={input.gender}
                    />

                    <Link
                        to={"/login"}
                        className="text-sm hover:underline hover:text-blue-600  inline-block"
                    >
                        Already have an account ? {"login"}
                    </Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2 bg-blue-600 text-white">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
