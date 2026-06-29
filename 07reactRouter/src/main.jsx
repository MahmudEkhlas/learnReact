import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import { Home, About,Contact,User, Github, githubinfo} from './components'



/*
//first Syntax
const router= createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:"",
        element: <Home />
      },
      {
        path:"about",
        element: <About />
      },
      {
        path:"contact",
        element: <Contact />
      }
    ]
  }
])*/

//second way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:id' element={<User/>}/>
      <Route 
      loader={githubinfo}
      
      path='github' element={<Github />}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
