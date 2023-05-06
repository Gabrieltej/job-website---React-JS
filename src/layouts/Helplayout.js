import { Outlet, NavLink  } from "react-router-dom";

export default function helplayout() {
  return (
    <div className='help-layout'>
      <h2>Website Help</h2>
      <p>
        Welcome to our job website help page! We are here to assist you in
        navigating our platform and using our services to the fullest. Here are
        some common questions and answers to help you get started:
      </p>

      <nav>
        <NavLink to='faq'>View the FAQ</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}
