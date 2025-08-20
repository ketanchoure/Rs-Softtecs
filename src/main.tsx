import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index.tsx';
import NotFound from './pages/NotFound.tsx';
import { StrictMode } from 'react';
import App from './App.tsx';
import Coursedetails from './pages/CourseDetail.tsx';
import SuccessStoriesPage from './pages/SuccessStoriesPage.tsx';
import Whychooseus from './pages/whychooseus.tsx';

const routes = createBrowserRouter([
    {
      path: '/',
      element: <Index />,
    },
    {
      path:"/course/:title",
     element:<Coursedetails/>
    },
    {
      path:"/success-stories",
     element:<SuccessStoriesPage/>
    },
    {
      path:"/whychooseus",
     element:<Whychooseus/>
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
        // <App/>
      
    )
