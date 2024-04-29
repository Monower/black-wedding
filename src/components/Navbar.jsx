
import { useState, useEffect } from "react";
import Menu from "./Menu";
import Mobilemenu from "./Mobilemenu";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [bgColor, setBgColor] = useState(false);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  useEffect(() => {
    
    window.addEventListener("scroll", () => {
      if(window.scrollY == 100){
        setVisible(false);
      }else if (window.scrollY > 500) {
        setVisible(true);
        setBgColor(true);
      }else if (window.scrollY < 500 && window.scrollY > 0) {
        setVisible(false);
      }else if (window.scrollY == 0) {
        setVisible(true);
        setBgColor(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    }
  },[]);

  console.log(location.pathname.length);
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
                {location.pathname.length > 1 ? (
                  <img
                    className="w-[7.5em] lg:w-[13.3125em] h-10"
                    src="/images/logo2.png"
                    alt="Logo"
                  />
                ) : (
                  <img
                    className="w-[7.5em] lg:w-[13.3125em] h-10"
                    src="/images/logo.png"
                    alt="Logo"
                  />
                )}
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