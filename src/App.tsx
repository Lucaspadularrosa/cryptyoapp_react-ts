import React, { useEffect, useState, ChangeEvent } from 'react';
import './App.css';
import Axios from 'axios';
import { ICoins } from './interfaces';
import Coin from './components/Coin';

function App() {
  const [listOfCoins, setListOfCoins] = useState<ICoins[]>([]);
  const [searchWord, setSearchWord] = useState<string>('');

  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then(
      (response) => {
        setListOfCoins(response.data.coins);
      }
    );
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchWord(e.target.value);
  };

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className='App'>
      <input type='text' placeholder='Bitcoin...' onChange={handleChange} />
      <div>
        {filteredCoins.map((coin) => {
          return <Coin key={coin.symbol} coin={coin} />;
        })}
      </div>
    </div>
  );
}

export default App;
