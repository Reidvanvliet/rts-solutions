import './styles/styleReset.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { Helmet } from "react-helmet";


const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Navbar/>} >
    <Route path="/" element={<Home/>} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/contact" element={<Contact />} />
    {/* Add more routes as needed */}
  </Route>
))

function App() {
  return (
    <div>
      <Helmet>
        <link rel="icon" href="../src/media/images/RTSLogo.ico"/>
      </Helmet>
      <RouterProvider router={appRouter}/>
    </div>
    
  );
}

export default App;
