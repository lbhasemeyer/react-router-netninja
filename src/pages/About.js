import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function About() {
    const [user, setUser] = useState('mario');

    // If user is not logged in, redirect
    if(!user) {
        return <Navigate to="/" replace={true} />  // Replace makes 2 pages ago replace this page in history (back button)
    }
    
    return (
        <div>
            <h2>ABOUT US</h2>
            <p>We are cool</p>
            <p>We eat burritos</p>
            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}