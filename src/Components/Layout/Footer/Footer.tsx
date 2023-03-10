import SocialMedia from "../../Shared/SocialMedia/SocialMedia";
import "./Footer.css";

function Footer(): JSX.Element {
    const start = 1988;
    const end = new Date().getFullYear();

    return (
        <div className="Footer">
            <p>&copy; All right to Kobi Shasha {start}-{end} :)</p>

            <SocialMedia facebook={false} twitter={true} youtube={true} tiktok={false} />
        </div>
    );
}

export default Footer;
