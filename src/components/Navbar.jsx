import { Link } from "react-router-dom";

function Navbar() {
    let style = {
        display: "flex",
        justifyContent: "space-evenly",
        listStyle: "none"
    }
    return (
        <ul style={style}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/signup">Signup</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/rooms">Rooms</Link>
            </li>
        </ul>
    )
}

export default Navbar;