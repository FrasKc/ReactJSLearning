import { useState } from 'react'

function Header(props) {

	const title = "React Network"

	return (
		<div className="header">
			<h1>{title}</h1>
		</div>
	)
}

export default Header
