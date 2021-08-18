import { authService } from 'fbase';
import React, {useState} from 'react'

function Authform() {

  const inputStyles = {};

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("")
  const [newAccount, setNewAccount] = useState(true)
  const [error, setError] = useState("")

  const onChange = (e) => {
    const {target: {name, value}} = e;
    if(name === "email"){
      setEmail(value)
    }else if(name==="password"){
      setpassword(value)
    }
  }



  const onSubmit = async(e) => {
    e.preventDefault();
    try {
      let data;
      if(newAccount){
       data = await authService.createUserWithEmailAndPassword(
          email, password
        );
      }else{
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    }catch(error){
      setError(error.message);
    }
  }


  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <>
    <form onSubmit={onSubmit} className="container">
    <input name="email" type="text" placeholder="Email" required value={email} onChange={onChange} className="authInput" />
    <input name="password" type="password" placeholder="Password" required value={password}  onChange={onChange} className="authInput" />
    <input className="authInput authSubmit" type="submit" value={newAccount ? "Create Account" : "Log In"} />
  {error && <span className="authError">{error}</span>}
  </form>
  <span onClick={toggleAccount} className="authSwitch">{newAccount ? "Sign in" : "Create Account"}</span>
  </>
  )
}

export default Authform
