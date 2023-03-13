import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div>
    <h1>Sorry, page not found</h1>
    <Link to={'/'}>Back to home</Link>
  </div>
  )
}
