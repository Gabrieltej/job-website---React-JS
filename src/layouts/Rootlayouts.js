import {NavLink, Outlet} from 'react-router-dom'

export default function Rootlayouts() {
  return (
    <div className='rootlayout'>
      <header>
        <nav>
          <h1>JobaRouter</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
          <NavLink to='help'>Help</NavLink>
          <NavLink to='careers'>Careers</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
