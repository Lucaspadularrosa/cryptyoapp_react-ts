import React from 'react';
import { ICoins } from '../interfaces';

interface Props {
  coin: ICoins;
}

const Coin = ({ coin }: Props) => {
  return (
    <div>
      <p>{coin.name}</p>
      <p>{coin.symbol}</p>
      <p>{coin.price}</p>
      <img src={coin.icon} alt={coin.symbol} />
    </div>
  );
};

export default Coin;
