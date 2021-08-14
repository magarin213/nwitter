import React, {useState} from 'react'

function Auth() {
  
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("")

  const onChange = (e) => {
    const {tartget: {name, value}} = e;
    if(name === "email"){
      setEmail(value)
    }else if(name==="password"){
      setpassword(value)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="email" type="text" placeholder="Email" required value={email} onChange={onChange} />
        <input name="password" type="password" placeholder="Password" required value={password}  onChange={onChange} />
        <input type="submit" value="Log In" />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  )
}

export default Auth
