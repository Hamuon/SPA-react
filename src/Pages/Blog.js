import { useParams } from "react-router-dom";

const Blog = () => {
    const { id } = useParams();

    return ( 
        <div className="flex justify-center items-center mt-56">
            Single Blog - {id}
        </div>
     );
}
 
export default Blog;