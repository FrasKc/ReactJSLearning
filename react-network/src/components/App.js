import { useState, useEffect } from 'react'
import Feed from './Feed'
import Header from './Header'
import CreatePost from './CreatePost'
import '../styles/App.css'

let initialPosts = [
  {
    id: 12,
    author: "Hugo Bordes",
    authorPicture: 'https://picsum.photos/seed/profile11/50/50',
    text: "Bonjour tout le monde !",
    postPicture: 'https://picsum.photos/seed/postpicture-12/500/300',
    date: new Date(Date.now() - 1 * 3600 * 1000),
    likes: 42,
    isLiked: true,
  },
  {
    id: 55,
    author: "Antoine Morin",
    authorPicture: 'https://picsum.photos/seed/profile16/50/50',
    text: "Comment allez-vous ?",
    postPicture: 'https://picsum.photos/seed/postpicture-55/500/300',
    date: new Date(Date.now() - 3 * 3600 * 1000),
    likes: 35,
    isLiked: true,
  },
  {
    id: 90,
    author: "Léa Dumont",
    authorPicture: 'https://picsum.photos/seed/profile17/50/50',
    text: "Vive React.JS",
    postPicture: 'https://picsum.photos/seed/postpicture-90/500/300',
    date: new Date(Date.now() - 2 * 3600 * 1000),
    likes: 17,
    isLiked: false,
  },
]

const bouchonBackend = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(initialPosts)
    }, 2000);
  })
}

const currentUser = {
  author: "Nouvel utilisateur",
  authorPicture: "https://picsum.photos/seed/profile53/50/50",
}



function App() {

  const [posts, setPosts] = useState([])
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    bouchonBackend().then(posts => {
      setPosts(posts)
      setisLoading(false)
    })
  }, []);


  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id != id))
  }



  const addPost = (postText, postPicture) => {
    const newPost = {
      id: Math.floor(1000 * Math.random()),
      author: currentUser.author,
      authorPicture: currentUser.authorPicture,
      text: postText,
      postPicture,
      date: new Date(),
      likes: 0
    }
    setPosts([...posts, newPost])
  }

  const likePost = (id) => {
    const increment = posts.find(p => p.id == id).isLiked ? -1 : 1
    setPosts(posts.map(p => p.id == id ? { ...p, likes: p.likes + increment, isLiked: !p.isLiked } : p))
  }

  return (
    <>

      <Header />
      <div className="center500px">
        <CreatePost addPost={addPost} />
        <Feed posts={posts} deletePost={deletePost} likePost={likePost} isLoading={isLoading} />
      </div>

    </>
  )
}
export default App;