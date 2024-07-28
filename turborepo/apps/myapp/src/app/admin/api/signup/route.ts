// turborepo/apps/client/app/api/signup/route.ts

import { NextRequest, NextResponse } from 'next/server';
import {Button} from '@repo/ui/button'
import {Admin} from '@repo/db/src/index'
import{ connect} from '../../../../lib/dbConnnect'

export async function POST(request: NextRequest) {
    
    await connect();
    try {

        //console.log(process.env.MONG!)
        const reqBody = await request.json();
        const { username, password } = reqBody;
        console.log(reqBody);
        const admin = await Admin.findOne({username})
        if(admin){
            return NextResponse.json({
                msg : "Admin already exists"
            }, {status : 500})
        }else{
            if(username && password){
                const newAdmin = new Admin({username, password})
                await newAdmin.save();
                return NextResponse.json({
                    msg : "Admin created successfully"
                }, {status : 200})
            }else{
                return NextResponse.json({
                    msg : "Username or password not provided"
                },{status : 505})
            }
        }
       
    } catch (error : any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
