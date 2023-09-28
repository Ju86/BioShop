import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();
 
    const login = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        const userData = {
            name,
            email,
            password,
        };
        localStorage.setItem('token-info', JSON.stringify(userData));
        // setIsLoggedin(true);
        setName('');
        setEmail('');
        setPassword('');
        navigate ('/home')
    };
 

 
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>This is React WebApp </h1>
             
                    <>
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
                            <button type="submit" onClick={login}>
                                GO
                            </button>
                        </form>
                    </>
              
            </div>
        </>
    );
}
 
export default Login;
            
