import React, { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const onLoginClick = async () => {
        const response = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`, { method: "GET" });
        const body = await response.json();

        if (body.length > 0) {
            setMessage(<span className="text-success">successful login</span>);
        } else {
            setMessage(<span className="text-danger">Invalid login, please try again</span>);
        }
    };

    return (
        <div>
            <h4 className="m-1 p-2 border-bottom">Login</h4>
            <form>
                <div className="form-group form-row">
                    <label className="col-lg-4">Email:</label>
                    <input className="form-control" type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="form-group form-row">
                    <label className="col-lg-4">Password:</label>
                    <input autoComplete="current password" className="form-control" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
            </form>
            <div className="text-right">
                <button className="btn btn-primary m-1" onClick={onLoginClick}>
                    Login
                </button>
                {message}
            </div>
        </div>
    );
}
