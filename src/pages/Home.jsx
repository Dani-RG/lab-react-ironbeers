import React from 'react';
import { Link } from 'react-router-dom';
import beersImage from '../assets/beers.png'
import RandomBeerImage from '../assets/random-beer.png'
import newBeerImage from '../assets/new-beer.png'
import { LoremIpsum } from 'react-lorem-ipsum';

const lorIpPar = 1;
const lorIpWor = 4;
const lorIpRan = false;

export default function Home() {
  return (
    <div>
      <div>
        <img src={beersImage} width='100%' alt='beers-pic' />
        <Link to={'/beers'}>All Beers</Link>
        <LoremIpsum p={lorIpPar} avgWordsPerSentence={lorIpWor} random={lorIpRan} />
      </div>
      <div>
        <img src={RandomBeerImage} width='100%' alt='random-beer-pic' />
        <Link to={'/random-beer'}>Random Beer</Link>
        <LoremIpsum p={lorIpPar} avgWordsPerSentence={lorIpWor} random={lorIpRan} />
      </div>
      <div>
        <img src={newBeerImage} width='100%' alt='new-beer-pic' />
        <Link to={'/new-beer'}>New Beer</Link>
        <LoremIpsum p={lorIpPar} avgWordsPerSentence={lorIpWor} random={lorIpRan} />
      </div>
    </div>
  )
}
