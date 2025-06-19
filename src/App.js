import './styles/styleReset.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Navbar/>} >
    <Route path="/" element={<Home/>} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    {/* Add more routes as needed */}
  </Route>
))

function App() {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
