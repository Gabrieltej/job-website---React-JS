import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Careerlayouts() {
  return (
    <div className='CareersLayout'>
      <h2>Careers</h2>
      <p>
        We have a wide range of career opportunities available on our job
        website. Here are some of the current job openings:
      </p>

      <Outlet />
    </div>
  )
}
