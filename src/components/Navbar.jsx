

import Menu from "./Menu";
import Mobilemenu from "./Mobilemenu";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

    return (
      <>
        <nav
          className={`py-2 lg:py-6 ${
            location.pathname.length > 1
              ? "bg-white"
              : "bg-transparent absolute top-0 left-0 right-0"
          }`}
        >
          <div
            className={`container mx-auto  px-2 lg:px-0 flex items-center justify-between`}
          >
            <div>
              <Link to="/">
                <img className="w-[7.5em] lg:w-[13.3125em] h-10" src={location.pathname.length > 1 ? '/images/logo2.png' : '/images/logo.png' } alt="Black Wedding" loading="lazy" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <Menu />
            </div>
            <div className="text-white lg:hidden">
              <Mobilemenu />
            </div>
          </div>
        </nav>
      </>
    );
};

export default Navbar;