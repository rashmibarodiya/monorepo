// turborepo/apps/client/app/api/signup/route.ts

import { NextRequest, NextResponse } from 'next/server';
import {button} from '@repo/ui'


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, password } = reqBody;
        console.log(reqBody);

        // Add your database logic here

        return NextResponse.json({
            msg: "Request processed successfully"
        });
    } catch (error : any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
