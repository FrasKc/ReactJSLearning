import { useState } from "react";

function Post(props) {

    const [nbLikes, setnbLikes] = useState(props.postData.likes)
    const [isLiked, setisLiked] = useState(false)

    const likePost = () => {
        const increment = isLiked ? -1 : 1
        setnbLikes(nbLikes + increment)
        setisLiked(!isLiked)
    }

    return (<><p>{props.postData.author} 👀 
    {props.postData.text}<br /> 
    {nbLikes} likes</p>
    <button onClick={likePost}>{isLiked ? "Vous aimez ce post" : "J'aime"}</button></>)
}


export default Post;