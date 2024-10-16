import "./navbar.css"
import logo from "../../assets/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo}/>
        </nav>
    );
}