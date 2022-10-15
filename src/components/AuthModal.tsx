import { FormEvent, useState } from "react";

const AuthModal = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error,setError] = useState('');

  const isSignUp = props.isSignUp; 


  const handleClick = () => {
    props.setShowModal(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if(isSignUp && (password !== confirmPassword)){
        setError('Passwords need to match!')
      }
      console.log('make a post request to database');
    } catch (error) {
      console.log(error);
    }
  }


  //console.log(email,password,confirmPassword)

  return (
    <div className='auth-modal'>
      <div className='close-icon' onClick={handleClick}>ⓧ</div>
      <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
      <p>By Clicking Login, you agree to our terms. Learn how we process your data in our Privacy Policy Page</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => { setEmail(e.target.value) }}
        />

        <input
          type="password"
          name="confirm"
          placeholder="password"
          required={true}
          onChange={(e) => { setPassword(e.target.value) }}
        />

        {isSignUp && <input
          type="password"
          name="confirm"
          placeholder="confirm password"
          required={true}
          onChange={(e) => { setConfirmPassword(e.target.value) }}
        />}

        <input className="secondary-button" type={"submit"} />

        <p>{error}</p>
      </form>
      <hr />
      <h2>GET THE APP</h2>

    </div>
  )
}

export default AuthModal