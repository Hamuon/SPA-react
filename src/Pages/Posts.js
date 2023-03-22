import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Components/Post/Post";
    
const Posts = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => setPosts(res.data.slice(0, 4))).catch()
    }, []);
    


    return ( 
        <section className="m-28">
            <div className="w-4/12">
            {posts ? posts.map(p => <Post body={p.body} id={p.id} key={p.id} title={p.title}/>) : <p>Loading...</p>}
        </div>
        </section>
     );
}
 
export default Posts;