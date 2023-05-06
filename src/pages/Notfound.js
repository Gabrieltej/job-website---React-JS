import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        aliquid.
      </p>

      <p>go to the <Link to ='/'>Homepage</Link>.</p>
    </div>
  )
}
