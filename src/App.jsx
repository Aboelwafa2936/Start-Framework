import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './components/Portfolio/portfolio'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import Layout from './components/Layout/layout'
import Home from "./components/Home/home";



function App() {
  const router = createBrowserRouter([
    {path: '', element: <Layout /> , children: [
      {path: '', element: <Home />},
      {path: 'About', element: <About />},
      {path: 'Portfolio', element: <Portfolio />},
      {path: 'Contact', element: <Contact />}
  ]}
  ])


  return (
    <>
    <RouterProvider router={router}>
    </RouterProvider>
    </>
  )
}

export default App
