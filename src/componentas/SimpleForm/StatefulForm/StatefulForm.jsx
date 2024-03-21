import { useState } from "react";


const StatefulForm = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [error,setError] useState('')
  const handleSubmit = e =>{
  e.preventDefault();
  if(password.length < 6){
    console.log('password must be 6 characters ')
  }
  else{
    setError('')
  }
  console.log(email,password,name);
  }
  const handleNameChange = e =>{
    setName(e.target.value)
  }

  const handleEmailChange= e =>{
  console.log(e.target.value);
  setEmail(e.target.value);
  }

  const handlePasswordChange = e =>{
    setPassword(e.target.value);
  }
  return (
    <div >
       <form className="gap-2" onSubmit={handleSubmit}>
        <input value={name} onChange={handleNameChange} type="text" name="name" />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" />
        <br />
        <input  onChange={handlePasswordChange} type="password" name="password"  required />
        <br />
        <button className="btn-secondary">Button</button>
        {
          error && <p>{error}</p>
        }
      </form>
    </div>
  );
};

export default StatefulForm;