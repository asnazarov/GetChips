import {Link} from "react-router-dom";
import {Logo} from "./Buttons";


const Header = () => {

  return (
    <div className="header">
      <div className="header__container">
        <Link className="logo" to="/">
          <Logo/>
        </Link>

        <nav>
          <ul className="menu">
            <li>
              <Link to="/cart">
                <p>О нас</p>
              </Link>
            </li>
            <li>
              <Link to="/suppliers">
                Поставщики
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  )
}

export default Header