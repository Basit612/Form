

const SimpleForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
    console.log('submit this form')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="phone" name="phone" />
        <br />
       
      </form>
    </div>
  );
};

export default SimpleForm;