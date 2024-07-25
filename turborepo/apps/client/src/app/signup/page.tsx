
import { Signup } from "@repo/ui/signup";
import { useState } from "react"
import axios from 'axios'
import { headers } from "next/headers";


function SignupFront() {

    const handleSignup = async (username: string, password: string): Promise<void> => {
        try {
            const response = await axios.post("/api/signup", {
                username,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('d');
            console.log(response.data);
            // localStorage.setItem("token", response.data.token);
            // window.location("/");

            alert(response.data.msg);
            // router.push("/signin")
        } catch (err) {
            alert(err);
            console.log('Error occurred');
            console.log(err);
        }
    };

    return (
        <>
            <Signup onClick={(username: string, password: string) => {
                handleSignup
            }}></Signup>



        </>
    )
}
export default SignupFront