const ReusableForm = ({formTitle, handleSubmit,submitbutton ='Submit',children}) => {
  // const handleSubmit = e =>{
  //   e.preventDefault();
  // }

  const handleLocalSubmit = e =>{
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }
    handleSubmit(data);
  }

  return (
    <div>
     {children}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value={submitbutton } />
      </form>
    </div>
  );
};

export default ReusableForm;
