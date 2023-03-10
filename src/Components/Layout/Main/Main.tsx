import { Outlet } from "react-router-dom";
import Routing from "../Routing/Routing";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
            {/* <img src="https://media.giphy.com/media/w61NUc9wVBAZi5PUOY/giphy.gif" alt="outlet" /> */}
            <Routing />
            <Outlet />
        </div>
    );
}

export default Main;
