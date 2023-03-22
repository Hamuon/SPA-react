import AboutUs from "./Pages/AboutUs";
import BlogPage from "./Pages/BlogPage";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import Posts from "./Pages/Posts";
import Profile from "./Pages/Profile";
import Blog from "./Pages/Blog";

const routes = [
    { path: '/blogs/:id', element: <Blog />, id: 5 },
    { path: '/blogs', element: <BlogPage />, id: 5 },
    { path: '/profile', element: <Profile/>, id:2 },
    { path: '/about-us', element: <AboutUs />, id: 3 },
    { path: '/posts', element: <Posts />, id: 4 },
    { path: '/', element: <HomePage />, id: 1 },
    { path:"*", element: <NotFoundPage /> },
]

export default routes;