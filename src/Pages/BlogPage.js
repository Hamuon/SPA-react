import { Link } from "react-router-dom";

const items = [
    { name: "Blog -1", to: "/blogs/1",},
    { name: "Blog -2", to: "/blogs/2",},
    { name: "Blog -3", to: "/blogs/3",},
]
    
const BlogPage = () => {
    return ( 
        <div className="flex justify-center items-center mt-56">
            {items.map((item) => (
                <li className='list-none' key={item.to}>
                                <Link
                                    className='no-underline mr-8 text-black'
                                    to={item.to}
                                    >
                                    {item.name}
                                </Link>
                            </li>
            ))}

        </div>
     );
}
 
export default BlogPage;