import logo from "./images/logo.svg";
import moto from "./images/moto.gif";
import comingSoon from "./images/coming-soon.gif";
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo-image" />
            <div className="header-right">
                <img className="coming-soon-text" src={comingSoon}></img>
                <img className="moto-gif" src={moto}></img>
            </div>
        </div>
    );
};

export default Header;
