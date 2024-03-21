import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Aunty</h2>
      <section>
        <Cousin name={'muha'}></Cousin>
        <Cousin name={'jisan'}></Cousin>
      </section>
      <p>money: {money}</p>

      <button onClick={() => setMoney(money + 1000)}>add 1000 tk</button>
    </div>
  );
};

export default Aunty;