import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='my-header'>
      <Link to={'/'}>
       <FontAwesomeIcon icon={faHome} className='home-icon' />
      </Link>
    </div>
  )
}
