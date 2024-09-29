import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import "./index.css";
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index:true, element: <Home />, path: '/'},
      {path:'/registro', element: <Register/>},
      {path:'*', element: <PageNotFound/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)