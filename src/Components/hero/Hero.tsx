import "./hero.css"
import grid from "../../assets/photo-grid.png"

export default function Hero() {
    return (
        <div className="hero">
            <img src={grid} className="hero--img"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    );
}