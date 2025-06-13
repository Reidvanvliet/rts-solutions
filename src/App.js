import './styles/styleReset.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router";
import Navbar from './components/Navbar';
import Home from './pages/Home';


const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Navbar/>} >
    <Route path="/" element={<Home/>} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
