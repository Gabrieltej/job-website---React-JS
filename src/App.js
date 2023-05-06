import {
  createBrowserRouter,  
  // Routes,this is for the older version of the router dom
  Route,  
  RouterProvider,
  createRoutesFromElements   
} from 'react-router-dom'


//import pages
import {Home} from './pages/Home'
import {About}  from './pages/About'
import Contact from './pages/Help/Contact'
import Faq from './pages/Help/Faq'


//layouts import
import Rootlayouts from './layouts/Rootlayouts';
import Helplayout from './layouts/Helplayout';
import Notfound from './pages/Notfound'
import Careers, { careersLoader } from './pages/careers/Careers'
import Careerlayouts from './layouts/Careerlayouts'
import Careerdetails from './layouts/Careerdetails'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayouts/>}>
      <Route index element={<Home/>} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<Helplayout />}>
        <Route path='faq' element={<Faq/>} />
        <Route path='contact' element={<Contact/>} />
        </Route>
       <Route path='*' element={<Notfound />} />
        <Route element={<Careerlayouts/>} path='careers'>
        <Route
          index
          element={<Careers />}
          loader={careersLoader} //loader props., so when we visit the /careers it will fetch and do all the async shit afore time. also note where it is embedded
        />
        
          <Route 
          path=':id'
           element={<Careerdetails/>}
           />
      </Route>
    </Route>
  )
)
  
//<Routes/> this is called a routes component
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
