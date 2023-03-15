import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'

export default function NewBeer() {
  const navigate = useNavigate();
  const [beer, setBeer] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: undefined,
    contributed_by: '',
  })
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setBeer(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name: beer.name,
      tagline: beer.tagline,
      description: beer.description,
      first_brewed: beer.first_brewed,
      brewers_tips: beer.brewers_tips,
      attenuation_level: parseInt(beer.attenuation_level),
      contributed_by: beer.contributed_by
    }
     if (!beer.name || !beer.description || beer.attenuation_level || beer.contributed_by) {
       setError('Please fill all the fields before submitting')
     } 
    try {
      const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body);
      //navigate(`/beers/${response.data._id}`)
      navigate('/');
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <Header />
      <form className='form-new-beer' onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={beer.name} onChange={handleChange} required />

        <label>Tagline</label>
        <input type="text" name="tagline" value={beer.tagline} onChange={handleChange} />

        <label>Description</label>
        <input type="textarea" name="description" value={beer.description} onChange={handleChange} required />

        <label>First Brewed</label>
        <input type="text" name="first_brewed" value={beer.first_brewed} onChange={handleChange} />

        <label>Brewer Tips</label>
        <input type="text" name="brewers_tips" value={beer.brewers_tips} onChange={handleChange} />

        <label>Attenuation Level</label>
        <input type="number" name="attenuation_level" value={beer.attenuation_level} onChange={handleChange} required />

        <label>Contributed By</label>
        <input type="text" name="contributed_by" value={beer.contributed_by} onChange={handleChange} required />

        <button type="submit">ADD NEW</button>
      </form>
    </div>
  )
}