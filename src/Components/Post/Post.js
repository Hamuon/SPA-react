import { Link } from "@mui/material";

const Post = ({body, title, id}) => {
   const post = {body, title, id}
   
   
    return ( 
        <div className="border border-solid p-4 m-4 w-3/12 rounded-xl shadow-md" key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <Link>More</Link>
        </div>
     );
}
 
export default Post;