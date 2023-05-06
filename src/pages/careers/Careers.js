import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'

export default function Careers() {
  const careersdata=useLoaderData() //here we are associating the loader with the route
  return (
    <div className='careers'>
        {careersdata.map((career)=>{
            return (
              <Link to='/' key={career.id}>
                <p>{career.title}</p>
                <p>Based in {career.location}</
                p>
                <p>${career.salary}</p>
              </Link>
            )
        })}
    </div>
  )
}

//this can be written anywhere we can put it in any of our components, since later we are going to fetch export it to where it is needed. This loader function is available when you create the route with the create browserroute and then in the version 6 upwards

//loader function, 


export const careersLoader=async()=>{
  const res=await fetch('http://localhost:4000/careers')
  return res.json() 
}

//the res.json() returns a promise, and do not forget that the careersLoader is acting like an alternative to the useEffect hook.


