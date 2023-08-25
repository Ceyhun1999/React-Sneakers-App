import { Link } from "react-router-dom";

function Header({ onShowDrawer }) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <Link to="/">
                    <img width={40} height={40} src="/img/logo.png" alt="My Logo" />
                </Link>
                <div className="headerInfo">
                    <h3 className="text-uppercase">React sneakers</h3>
                    <p className="opacity-1">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li onClick={onShowDrawer} className="mr-30 cu-p">
                    <img width={18} height={18} src="/img/cart.svg" alt="Cart logo" />
                    <span>1205 руб.</span>
                </li>
                <li className="cu-p">
                    <Link to='/favorites'>
                        <img width={18} height={18} src="/img/heart.svg" alt="User logo" />
                    </Link>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" alt="User logo" />
                </li>
            </ul>
        </header>
    );
}

export default Header;
