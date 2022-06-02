import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const deleteUser = () =>{
        localStorage.removeItem('user_id');
        localStorage.removeItem('token');
        navigate("/login")
    }
    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Logo</a>
                
                <button type='button' className="btn btn-danger" onClick={deleteUser}>Logout</button>
            </div>
            </nav>   
        </>
    )
}

export default Navbar
