import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index.tsx';
import NotFound from './pages/NotFound.tsx';
import { StrictMode } from 'react';

const routes = createBrowserRouter([
    {
      path: '/',
      element: <Index />,
    },
   
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

createRoot(document.getElementById("root")!).render(   
        <StrictMode>
          <RouterProvider router={routes} />
        </StrictMode>
      
    )
