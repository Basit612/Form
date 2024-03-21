import Borther from "../Borther/Borther";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";


const Dad = ({asset}) => {
  return (
    <div>
      <h2>Dad</h2>
      <section className="flex">
        <MySelf asset={asset}></MySelf>
        <Borther></Borther>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Dad;