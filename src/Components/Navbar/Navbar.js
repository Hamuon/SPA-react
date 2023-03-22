import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, CssBaseline, Toolbar } from "@mui/material"
import { NavLink } from "react-router-dom";


const items = [
    { name: "Home", to: "/",},
    { name: "About Us", to: "/about-us",},
    { name: "Profile", to: "/profile", },
    { name: "Posts", to: "/posts"}
    
]

const Navbar = () => {
    return ( 
        <>
            <CssBaseline/>
            <AppBar className='bg-white'>
                <Toolbar>
                    <AccountCircleIcon className='text-black'></AccountCircleIcon>
                    <ul className='flex flex-row'>
                        {items.map((item) => (
                            <li className='list-none' key={item.to}>
                                <NavLink
                                    className='no-underline mr-8 text-black'
                                    to={item.to}
                                    >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </Toolbar>

            </AppBar>
        </>
     );
}
 
export default Navbar;