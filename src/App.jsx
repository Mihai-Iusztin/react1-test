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
        <Button onSelect={() => handleSelect('home')}>Home</Button>
        <Button onSelect={() => handleSelect('alltrades')}>All Trades</Button>
        <Button onSelect={() => handleSelect('details')}>Details</Button>
      </div>
      <Logo />
      {selectedTopic === 'home' && <Journal />}
      {selectedTopic === 'alltrades' && <Alltrades />}
      {selectedTopic === 'details' && <Details />}
    </>
  );
}

export default App;
