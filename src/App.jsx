import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { PageOne } from './Pages/Page_one';
import { PageTwo } from './Pages/Page_two';
import { PageThree } from './Pages/Page_three';
import { PageFour } from './Pages/Page_four';

const routerConfig = createBrowserRouter([
    {
        path:"/" ,
        element:<PageOne />
    },
    {
        path:"/page-two" ,
        element:<PageTwo />
    },
    {
        path:"/page-three" ,
        element:<PageThree />
    },
    {
        path:"/page-four" ,
        element:<PageFour />
    },
])

const App = () => {
  return (
    // <BrowserRouter> 
    //   <Routes>
    //     <Route path="/" element={<PageOne />} />
    //     <Route path="/page-two" element={<PageTwo />} />
    //     <Route path="/page-three" element={<PageThree />} />
    //     <Route path="/page-four" element={<PageFour />} />
    //   </Routes>
    // </BrowserRouter>
    <>
    <RouterProvider router={routerConfig}/> 
    </>
  );
}

export default App;
