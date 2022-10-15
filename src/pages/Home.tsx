import React from 'react';
import { Navbar,AuthModal } from "../components"
import { useState } from 'react';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [isSignUp,setIsSignUp] = useState(true);

    const authToken = false;

    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(true)
    };



    return (
        <div className='overlay'>
            <Navbar minimal={false} 
                authToken={authToken}
                setShowModal={setShowModal} 
                showModal={showModal}
                setIsSignUp={setIsSignUp}
            />
            <div className="home">

                <h1 className='primary-title'>Swipe Right®</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Sign Out' : 'Create Account'}
                </button>
                {showModal && (
                 <AuthModal setShowModal = {setShowModal} isSignUp={isSignUp} />
                )}
            </div>

        </div>

    )
}

export default Home;