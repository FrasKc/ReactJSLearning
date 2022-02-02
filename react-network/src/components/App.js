import Post from "./Post";
import Header from "./Header";
import { useState } from "react";

let initialPosts = [
  {id : 12, text: "Hello les mecs", author:"Célian", likes: 400}, 
  {id : 55, text: "Comment allez-vous ?", author:"Abdel", likes: 600}, 
  {id : 43, text: "Hello les gars je suis nouveau", author:"Jerem", likes: 43}, 
]

function App(){

  const [posts, setPosts] = useState(initialPosts)

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id != 43))
  }

  return (
   <>
   <Header />
   <h3>Fil d'atcualité</h3>
    
    <button onClick={deletePost}>Supprimer le post 43</button>

      {posts.map(p => <Post key={p.id} postData={p} />)}
   </>
  )
}
export default App;