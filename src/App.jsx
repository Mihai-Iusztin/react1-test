import './App.css';
import Button from './Components/Button';
import Logo from './Components/Logo';
import Journal from './Components/Journal';
import { useState } from 'react';
import Alltrades from './Components/Alltrades';
import Details from './Components/Details';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('home');

  function handleSelect(select) {
    setSelectedTopic(select);
  }

  return (
    <>
      <div className="menu">
        <Button
          isSelected={selectedTopic === 'home'}
          onSelect={() => handleSelect('home')}
        >
          Home
        </Button>
        <Button
          isSelected={selectedTopic === 'alltrades'}
          onSelect={() => handleSelect('alltrades')}
        >
          All Trades
        </Button>
        <Button
          isSelected={selectedTopic === 'details'}
          onSelect={() => handleSelect('details')}
        >
          Details
        </Button>
      </div>
      <div className="container">
        <Logo />
        {selectedTopic === 'home' && <Journal />}
        {selectedTopic === 'alltrades' && <Alltrades />}
        {selectedTopic === 'details' && <Details />}
      </div>
    </>
  );
}

export default App;
