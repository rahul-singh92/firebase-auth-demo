import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css"

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/") //Redirect to home (to do list)
        } catch (error) {
            alert(error.message);
        }
    };

    return(
        <div className="auth-container">
            <form onSubmit={handleSignUp} className="auth-form">
                <h2>Sign Up</h2>
                <input 
                    type="email"
                    placeholder="Email"
                    className="auth-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="password"
                    className="auth-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="auth-btn" type="submit">
                    Sign Up
                </button>
            </form>
        </div>
    )
}