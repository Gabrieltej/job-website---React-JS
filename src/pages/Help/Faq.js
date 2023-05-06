import { Link } from "react-router-dom"
export default function Faq() {
  return (
    <div className='faq'>
      <h3>Frequently Asked Questions</h3>

    
      <div className='question'>
        <p>
          <strong>How do I search for job listings on your website?</strong>
        </p>
        <p>
          To search for job listings, simply navigate to the careers page and
          there, you will see a whole list of available jobs
        </p>
      </div>

      <div className='question'>
        <p>
          <strong>
            How do I get in touch with customer support?</strong>
        </p>
        <p>
          To reah us, you can visit the <Link to='/help/contact'>Contact us</Link> page
        </p>
      </div>
    </div>
  )
}
