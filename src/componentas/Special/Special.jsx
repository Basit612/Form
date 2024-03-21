import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = ({asset}) => {
  const gift = useContext(AssetContext)
  return (
    <div>
      <h1>Special:suma</h1>
      <p>has: {asset}</p>
      <p>Also has:{gift}</p>
    </div>
  );
};

export default Special;