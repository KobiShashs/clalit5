import "./Header.css";
import { BsFillBalloonFill, BsFillEmojiKissFill } from "react-icons/bs";
function Header(): JSX.Element {
    return (
        <div className="Header">
            <BsFillBalloonFill size={32} />
            <h1>Clalit App</h1>
            <BsFillEmojiKissFill size={32} />
        </div>
    );
}

export default Header;
