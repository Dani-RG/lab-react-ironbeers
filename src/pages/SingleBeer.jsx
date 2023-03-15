import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'

export default function SingleBeer() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState({});

  const getBeer = async () => {
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
      setBeer(response.data);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getBeer();
  }, [])

  return (
    <div>
      <Header />
      <div className='one-beer'>
        <img src={beer.image_url} alt={beer.name} />
        <table className='beer-table'>
          <tbody>
            <tr className='one-beer-row'>
              <td>
                <h1>{beer.name}</h1>
              </td>
              <td>
                <h1>{beer.attenuation_level}</h1>
              </td>
            </tr>
            <tr className='one-beer-row'>
              <td>
                <h4>{beer.tagline}</h4>
              </td>
              <td>
                <h4>{beer.first_brewed}</h4>
              </td>
            </tr>
          </tbody>
        </table>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </div>
  )
}
