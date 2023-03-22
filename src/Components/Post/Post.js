const Post = ({body, title, id}) => {
   const post = {body, title, id}
   
   
    return ( 
        <div className="border border-solid p-4 m-4" key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
     );
}
 
export default Post;