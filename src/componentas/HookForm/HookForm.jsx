import useInputState from "../../hooks/useinputState";


const HookForm = () => {
  // const [name, handelNameChange] = useInputState('')
  const emailState = useInputState('')
  const handleSubmit = e =>{
    console.log('form data',emailState.value)
    e.preventDefault();
  }
  return (
    <div>
       <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handelNameChange} type="text" name="name" /> */}
        <br />
        <input {...emailState} type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;