import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainApp from './pages/MainApp';
import ErrorPage from './pages/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp/>,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    // <Navbar/>
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
