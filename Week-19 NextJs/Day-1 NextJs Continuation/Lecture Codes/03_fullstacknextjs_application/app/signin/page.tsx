"use client"

import axios from "axios"

export default function Signin() {

    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2">
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="password"></input>

            <button onClick={() => {
                axios.post("http://localhost:3000/api/v1/signin")
            }}>Sign in</button>
        </div>

    </div>
}