import { useState, useEffect } from 'react'

function CreatePost({ addPost }) {

	const [postText, setPostText] = useState('')
	const [postPicture, setPostPicture] = useState('')


	const onPostTextChangeHandler = (event) => {
		setPostText(event.target.value)
	}
	const onPostPictureChangeHandler = (event) => {
		setPostPicture(event.target.value)
	}

	const createPostHandler = (event) => {
		addPost(postText, postPicture)
		setPostText('')
		setPostPicture('')
	}

	return (
		<div className="post">

			<div className="createpost-row">
				<div>Texte :</div>
				<input type="text" onChange={onPostTextChangeHandler} value={postText} placeholder="Quoi de neuf aujourd'hui ?" />
			</div>
			<div className="createpost-row">
				<div>Photo :</div>
				<input type="text" onChange={onPostPictureChangeHandler} value={postPicture} placeholder="URL de la photo" />
			</div>
			{postText.trim() != '' && (
				<div className="createpost-row">
					<button className="btn" onClick={createPostHandler}>Publier</button>
				</div>
			)}

		</div>
	)
}

export default CreatePost
