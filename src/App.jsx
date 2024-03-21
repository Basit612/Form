// import { data } from "autoprefixer";
import "./App.css";
import Grandpa from "./componentas/Grandpa/Grandpa";
// import ReusableForm from "./componentas/ReusableForm/ReusableForm";
// import HookForm from './componentas/HookForm/HookForm'
// import RefForm from './componentas/RefForm/RefForm'
// import StatefulForm from './componentas/SimpleForm/StatefulForm/StatefulForm'
// import SimpleForm from './componentas/SimpleForm/SimpleForm'

function App() {
  // const handleSingUpSubmit = data =>{
  //     console.log('sing up',data)
  //    }
    
  //    const handleUpdate= data =>{
  //    console.log('profile update',data)
  //   }
     
  return (
    <>
      <h1 className="text-5xl">Form</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={"sing up"} handleSubmit={handleSingUpSubmit}>
         <div>
          <h1>Sing up</h1>
          <p>please sing up</p>
        </div>
        </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdate}
        submitbutton="Update"
      >
        <div>
          <h1>profile</h1>
          <p>sing up profile</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
