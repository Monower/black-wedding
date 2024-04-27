
import { useState, useEffect } from "react";
import Menu from "./Menu";
import Mobilemenu from "./Mobilemenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [bgColor, setBgColor] = useState(false);
  const [visible, setVisible] = useState(true);

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
    return (
      <>
        <nav
          className={`fixed top-0 left-0 right-0 py-2 lg:py-6 z-50 ${
            bgColor ? "bg-black drop-shadow-lg" : "bg-black drop-shadow-lg"
          } ${visible ? "" : "hidden"}`}
        >
          <div
            className={`container  mx-auto  px-2 lg:px-0 flex items-center justify-between`}
          >
            <div>
              <Link to="/">
                <img
                  className="w-[7.5em] lg:w-[13.3125em] h-10"
                  src="/images/logo.png"
                  alt="Logo"
                />
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