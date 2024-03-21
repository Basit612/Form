import React from 'react';
import Special from '../Special/Special';

const MySelf = ({asset}) => {
  return (
    <div>
      <h1>myself</h1>
      <section>
        <Special asset={asset}></Special>
      </section>
    </div>
  );
};

export default MySelf;