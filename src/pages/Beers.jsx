import React, { useState, useEffect } from 'react'
import Header from '../components/Header';
import axios from 'axios';
import  { Link } from 'react-router-dom';

export default function Beers() {

  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    try {
      const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
      setBeers(response.data);
      console.log(response.data);
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getBeers();
  }, [])

  return (
    <div>
      <Header />
      {beers.map(elem => {
        return (
          <div key={elem._id}>
            <Link to={'/beers/:beerId'}>
              <table className='beers-table'>
                <tbody>
                  <tr>
                    <td className='beer-img-box'>
                      <img src={elem.image_url} className='beers-images' alt='beer-pic'/>
                    </td>
                    <td className='beers-info'>
                      <h2>{elem.name}</h2>
                      <p>{elem.tagline}</p>
                      <p>Created by: {elem.contributed_by}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Link>
            <hr></hr>
          </div>
        )
      })}
    </div>
  )
}

