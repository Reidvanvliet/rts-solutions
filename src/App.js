import './styles/styleReset.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';


const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Navbar/>} >
    <Route path="/" element={<Home/>} />
    <Route path="/projects" element={<Projects />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
