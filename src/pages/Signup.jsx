import { useState } from "react";
import { signup } from "../services/clients"

function Signup() {

    const [error, setError] = useState(undefined);
    const [success, setSuccess] = useState(undefined);
    const [info, setInfo] = useState({
        first_name: undefined,
        last_name: undefined,
        email: undefined,
        password: undefined,
        pass_confirmation: undefined
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(info)
            .then(res => {
                setSuccess(res);
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
                    <h2 className="display-3">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg">
                                <label htmlFor="first_name">First Name</label>
                                <input onChange={handleChange} className="form-control" type="text" name="first_name" id="first_name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg">
                                <label htmlFor="last_name">Last Name</label>
                                <input onChange={handleChange} className="form-control" type="text" name="last_name" id="last_name" />
                            </div>
                        </div>
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
                        <div className="row">
                            <div className="col-lg">
                                <label htmlFor="pass_confirmation">Password</label>
                                <input onChange={handleChange} type="password" className="form-control" name="pass_confirmation" id="password" />
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <button className="btn btn-primary">Signup</button>
                            </div>
                            <div className="col-lg">
                                <p>
                                    Do you have an account already? <a href="/login">click here</a>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup