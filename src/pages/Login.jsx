import { useState } from "react";
import { signin } from "../services/clients"

function Login() {

    const [error, setError] = useState(undefined);
    const [token, setToken] = useState(undefined);
    const [info, setInfo] = useState({
        email: undefined,
        password: undefined,
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        signin(info)
            .then(res => {
                setToken(res.token);
                localStorage.setItem("tgbooking", res.token);
            })
            .catch(err => {
                setError(err);
            })
    }

    const handleChange = (e) => {
        setInfo(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-lg-5">
                    <h2 className="display-3">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg">
                                <label htmlFor="email">Email</label>
                                <input onChange={handleChange} className="form-control" type="email" name="email" id="email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg">
                                <label htmlFor="password">Password</label>
                                <input onChange={handleChange} type="password" className="form-control" name="password" id="password" />
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <button className="btn btn-primary">Sign in</button>
                            </div>
                            <div className="col-lg">
                                <p>
                                    Dont' you have an account yet? <a href="/signup">click here</a>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login