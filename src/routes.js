import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import Profile from "./Pages/Profile";


const routes = [
    { path: '/', element: <HomePage/>, id:1},
    { path: '/profile', element: <Profile/>, id:2 },
    { path: '/about-us', element: <AboutUs />, id: 3 },
    { path:"*", element: <NotFoundPage /> }
    
      
]

export default routes;