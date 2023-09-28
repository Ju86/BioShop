import { redirect } from "react-router-dom";

export default function Account() {
    const logout = () => {
        localStorage.removeItem('token-info');
       redirect('/')
    };
    return (
     <button onClick={logout}>logout</button>
    )
}