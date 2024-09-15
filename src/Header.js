import logo from "./images/logo.svg";
import moto from "./images/moto.gif";
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo-image" />
            <div className="header-right">
                <div className="coming-soon-text">coming soon...</div>
                <img className="moto-gif" src={moto}></img>
            </div>
        </div>
    );
};

export default Header;
