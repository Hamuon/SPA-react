import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, CssBaseline, Toolbar } from "@mui/material"
import { NavLink } from "react-router-dom";


const items = [
    { name: "Home", to: "/", id:1},
    { name: "About Us", to: "/about-us", id:2},
    { name: "Profile", to: "/profile", id:3},
    
]

const Navbar = () => {
    return ( 
        <>
            <CssBaseline/>
            <AppBar className='bg-transparent'>
                <Toolbar>
                    <AccountCircleIcon className='text-black'></AccountCircleIcon>
                    <ul className='flex flex-row'>
                        {items.map((item) => (
                            <li className='list-none' key={item.to}>
                                <NavLink
                                    className='no-underline mr-4 text-black'
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