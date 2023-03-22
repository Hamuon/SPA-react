import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Components/Post/Post";
    
const Posts = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => setPosts(res.data.slice(0, 4))).catch()
    }, []);
    


    return ( 
        <section className="flex flex-wrap justify-center items-center mt-28 w-full">
            {posts ? posts.map(p => <Post body={p.body} id={p.id} key={p.id} title={p.title}/>) : <p className="flex justify-center items-center w-full">Loading...</p>}
        </section>
     );
}
 
export default Posts;