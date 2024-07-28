// turborepo/apps/client/src/app/signup/page.tsx

'use client';

import { Signup } from "@repo/ui/signup";
import axios from 'axios';

function SignupFront() {

    const handleSignup = async (username: string, password: string): Promise<void> => {
        
        try {
            const response = await axios.post("/admin/api/signup", {
                username,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
           

            console.log(response.data);
            alert(response.data.msg);
            // router.push("/signin");
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                // If the error is an axios error and has a response
                alert(err.response.data.msg);
                console.log(err.response.data);
            } else {
                // If the error is not an axios error or doesn't have a response
                alert('An unexpected error occurred');
                console.log(err);
            }
        }
    };

    return (
        <Signup onClick={handleSignup} />
    );
}

export default SignupFront;
