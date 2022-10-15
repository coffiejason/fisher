import React from 'react';
import whiteLogo from '../assets/tinder_logo_white.png';
import colorLogo from '../assets/color-logo-tinder.png'

// interface NavbarProps {
//   minimal:boolean,
//   authToken: boolean
// }

const Navbar = (props:any) => {

  const handleClick = () =>{
    props.setShowModal(true);
    props.setIsSignUp(false);
  }

  return (
    <nav>
      <div className='logo-container'>
        <img className='logo' src={props.minimal ? colorLogo : whiteLogo}/>
      </div>

      {!props.authToken && !props.minimal && <button className='nav-button' onClick={handleClick} disabled={props.showModal}>Login</button>}
      
    </nav>
  )
}

export default Navbar