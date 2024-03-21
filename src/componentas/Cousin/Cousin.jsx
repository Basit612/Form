import React from 'react';
import Special from '../Special/Special';

const Cousin = ({name, asset}) => {
  return (
    <div>
      <h1>Cousin</h1>
      <p>{name}</p>
      <section>
      {asset && <Special asset={asset}></Special>}
      </section>
    </div>
  );
};

export default Cousin;