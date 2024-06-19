import React from "react";

const Home = () => {
    return(
        <>
        <nav className="bg-blue-700 text-white py-5">
            <ul className='flex justify-around'>
                <li><a href="/signup">Sign Up</a></li>
                <li><a href="/login">Log In</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Home;