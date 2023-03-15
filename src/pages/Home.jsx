import React from 'react'
import { Link } from 'react-router-dom'
import beersImage from '../assets/beers.png'
import RandomBeerImage from '../assets/random-beer.png'
import newBeerImage from '../assets/new-beer.png'
import { LoremIpsum } from 'react-lorem-ipsum'

const lorIpPar = 1;
const lorIpWor = 4;
const lorIpRan = false;

export default function Home() {
  return (
    <div>
      <div>
        <Link to={'/beers'}>
          <img src={beersImage} width='100%' alt='beers-pic' />
          <h2>All Beers</h2>
          <LoremIpsum p={lorIpPar} avgWordsPerSentence={lorIpWor} random={lorIpRan} />
        </Link>
      </div>
      <div>
        <Link to={'/random-beer'}>
          <img src={RandomBeerImage} width='100%' alt='random-beer-pic' />
          <h2>Random Beer</h2>
          <LoremIpsum p={lorIpPar} avgWordsPerSentence={lorIpWor} random={lorIpRan} />
        </Link>
      </div>
      <div>
        <Link to={'/new-beer'}>
          <img src={newBeerImage} width='100%' alt='new-beer-pic' />
          <h2>New Beer</h2>
          <LoremIpsum p={lorIpPar} avgWordsPerSentence={lorIpWor} random={lorIpRan} />
        </Link>
      </div>
    </div>
  )
}
