import { useState } from "react";
import toast from "react-hot-toast";

function UseSignup() {
    const [loading, setLoading] = useState(false);
    const signup = async ({
        fullname,
        usernames,
        password,
        confirmPassword,
        gender,
    }) => {
        const success = handleInputErrors({
            fullname,
            usernames,
            password,
            confirmPassword,
            gender,
        });
        if (!success) return;

        setLoading(true);

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullname,
                    usernames,
                    password,
                    confirmPassword,
                    gender,
                }),
            });

            const data = await res.json();
            console.log(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
}

export default UseSignup;

function handleInputErrors({
    fullname,
    usernames,
    password,
    confirmPassword,
    gender,
}) {
    if (!fullname || !usernames || !password || !confirmPassword || !gender) {
        toast.error("please fill in all required fields");
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("password do not match");
        return false;
    }

    if (password.length < 6) {
        toast.error("password must be at least 6 characters long");
        return false;
    }

    return true;
}
