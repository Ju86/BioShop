import React, {useState}from "react";

import { useNavigate } from 'react-router-dom';
 
function Register() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
  const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        const userData = {
            name,
            email,
            password,
        };
        localStorage.setItem('token-info', JSON.stringify(userData));
        setName('');
        setEmail('');
        setPassword('');
        
        navigate('/')
    };
   

 


 
    return (
        <>
            <p className="title">Registration Form</p>
 
            <form action="">
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder="Name"
                            />
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder="Password"
                            />
                            <button type="submit" onClick={onSubmit}>
                                GO
                            </button>
                        </form>
        </>
    );
}
export default Register;
