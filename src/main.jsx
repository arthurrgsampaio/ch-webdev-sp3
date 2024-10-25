import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import "./index.css";
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register';
import Login from './pages/Login';
import WIP from './pages/WIP';
import Garagem from './pages/Garagem';
import Partida from './pages/Partida';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index:true, element: <Home />, path: '/'},
      {path:'/registro', element: <Register/>},
      {path:'/login', element: <Login/>},
      {path:'/garagem', element: <Garagem/>},
      {path:'/partida', element: <Partida/>},
      {path:'/noticias', element: <WIP/>},
      {path:'/loja', element: <WIP/>},
      {path:'/videos', element: <WIP/>},
      {path:'*', element: <PageNotFound/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)