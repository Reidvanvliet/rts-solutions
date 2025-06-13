import './styles/styleReset.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router";
import Navbar from './components/Navbar';


const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Navbar />}>

  </Route>
))

function App() {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
