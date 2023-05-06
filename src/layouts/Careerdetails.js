import { useParams } from 'react-router-dom'

//basically that is what the useParam hook is used for. The useParams() hook is a React Router hook that allows you to access the parameters of the current URL.

export default function Careerdetails() {
  const { id } = useParams()

  return (
    <div className='career-details'>
      <h2>{id}</h2>
    </div>
  )
}


