import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import { createContext, useState } from "react";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);

const Grandpa = () => {
  const [money, setMoney] = useState(1000);
  const asset = "diamond";
  return (
    <div className=" bg-gray-100 m-5 p-3 border-red-50 flex justify-between">
      <MoneyContext.Provider value={money, setMoney}>
        <AssetContext.Provider value="gold">
          <section>
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * 1. Create a context and export it
 * 2. Add provider for the context with a value. value could be anything
 * 3. useContext to access value in the context API
 */
