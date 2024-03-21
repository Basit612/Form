import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
  return (
    <div>
      <h2>Uncle</h2>
      <section>
        <Cousin name={'naju'} asset={asset}></Cousin>
        <Cousin name={'liza'}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;