

'use client';

import { Button, Typography, Card, TextField } from "@mui/material"
import { useState } from "react"
import axios from 'axios'
import {  useRouter } from "next/navigation"

export function Signup(props :{
    onClick : (username : string, password : string) => void
}) {
   
   const router = useRouter()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>


            <div style={{
                marginTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center",

            }}>
                <Typography fontSize={20} >Welcome to Coursera. Signup below</Typography>


            </div>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>

                <Card  style={{ padding: 20  , borderRadius : 10 ,backgroundColor: '#839192'}} >
                    <TextField
                   // value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                        fullWidth={true}
                        id="outlined-basic"
                        label="username"
                        variant="outlined"
                    />
                    <br />
                    <br />
                    <TextField
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        fullWidth
                        id="outlined-basic"
                        label="password"
                        type='password'
                        variant="outlined"
                    />
                    <br />
                    <br />
                    
                    <Button
                        onClick={async() => {
                            props.onClick(username, password )
                                    
                            
                        }}
                        size={"large"}
                        variant="outlined"


                    >Signup</Button>

                </Card>
            </div>


        </>
    )
}

