// turborepo/apps/client/app/api/signup/route.ts

import { NextRequest, NextResponse } from 'next/server';
import {Button} from '@repo/ui/button'
import {Admin} from '@repo/db/src/index'
import{ connect} from '../../../../lib/dbConnnect'

export async function POST(request: NextRequest) {
    await connect();
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
