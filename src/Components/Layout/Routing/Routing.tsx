import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import App from "../../../App";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import ComponentTypes from "../../Pages/ComponentTypes/ComponentTypes";
import Page404 from "../../Pages/Page404/Page404";
import Lifecycle from "../../Pages/Lifecycle/Lifecycle";
import Lifecycle2 from "../../Pages/Lifecycle2/Lifecycle2";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<App/>} />
                <Route index element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/components" element={<ComponentTypes/>} />
                <Route path="/lifecycle" element={<Lifecycle/>} />
                <Route path="/lifecycle2" element={<Lifecycle2/>} />
                <Route path="*" element={<Page404/>} />
            </Routes>
        </div>
    );
}

export default Routing;
