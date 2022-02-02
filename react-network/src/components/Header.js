import { useState } from "react"

function Header (props) {
    // let title = "React NetWork"
    const [title, setTitle] = useState("React NetWork")

    const changeTitle = () => {
        setTitle("Hey les mecs")
    }

    return (
        <>
        <h1>{title}</h1>
        <button onClick={changeTitle}>Cliquez Ici</button>
        </>
    )
}

export default Header;