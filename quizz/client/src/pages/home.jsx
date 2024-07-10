import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return(
        <>
        <nav className="bg-blue-700 text-white py-5">
            <ul className='flex justify-around'>
                <li onClick={()=>navigate('/signup')}>Sign Up</li>
                <li onClick={()=>navigate('/login')}>Log In</li>
            </ul>
        </nav>
        </>
    )
}

export default Home;