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
            alert('Error occurred');
            console.log(err);
        }
    };

    return (
        <Signup onClick={handleSignup} />
    );
}

export default SignupFront;
