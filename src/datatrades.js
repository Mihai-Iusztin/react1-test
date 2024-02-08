import imgEURUSD from './assets/instr-images/eurusd-img.jpeg';
import imgUSDJPY from './assets/instr-images/usdjpy-img.jpg';
import imgASX200 from './assets/instr-images/asx200-img.jpg';
import imgGOLD from './assets/instr-images/gold-img.jpg';

export const DATA_TRADES = [
  {
    image: imgEURUSD,
    instrument: 'EURUSD',
    pattern: 'STPB',
    volum: 0.2,
    price: 1.0755,
  },
  {
    image: imgUSDJPY,
    instrument: 'USDJPY',
    pattern: 'IDPB',
    volum: 0.3,
    price: 147.55,
  },
  {
    image: imgASX200,
    instrument: 'ASX200',
    pattern: 'CB/h4',
    volum: 0.5,
    price: 7623,
  },
  {
    image: imgGOLD,
    instrument: 'GOLD',
    pattern: 'TCPB',
    volum: 0.1,
    price: 2036,
  },
];
