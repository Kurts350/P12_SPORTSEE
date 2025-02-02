import { createBrowserRouter } from "react-router-dom";
import {HomePage} from '../pages/HomePage';
import {Community} from '../pages/Community';
import {Profil} from '../pages/Profil/Profil';
import {ErrorPage404} from "../pages/ErrorPage404";
import {Réglages} from '../pages/Réglages';
import {Layout} from '../layout/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage404 />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/communaute",
        element: <Community />,
      },
      {
        path: "/profil/:userId",
        element: <Profil/> 
      },
      {
        path:"/reglage",
        element:<Réglages/>
      }
    ],
  },
]);

export {router};