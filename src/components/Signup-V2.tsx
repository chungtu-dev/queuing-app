import React, { FC, FormEvent, useState } from 'react'
import { signup } from '../store/actions/authActions'
import Button from '../common/Button'
import Input from '../common/Input'
import { useNavigate } from "react-router-dom";


const Signup: FC = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();
        signup({ firstName, email, password })
        navigate("/login");
    };

    return (
        <>
            <section className="section">
                <div className="container">
                    <h2 className="has-text-centered is-size-2 mb-3">Sign Up</h2>
                    <form className="form" onSubmit={submitHandler}>
                        <Input
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.currentTarget.value)}
                            placeholder="First name"
                            label="First name"
                        />
                        <Input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            placeholder="Email address"
                            label="Email address"
                        />
                        <Input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            placeholder="Password"
                            label="Password"
                        />
                        <Button text="Sign Up" className="is-primary is-fullwidth mt-5" />
                    </form>
                </div>
            </section>
        </>
    )
}

export default Signup