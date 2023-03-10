import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            {/* <a href="home">Home</a>
			<a href="components">Component Type</a>
			<a href="about">About</a>
			<a href="404">Page 404</a> */}

            <Link to={"home"}>Home 🏘️</Link>
            <Link to={"components"}>Component Types</Link>
            <Link to={"about"}>About</Link>

        </div>
    );
}

export default Menu;
