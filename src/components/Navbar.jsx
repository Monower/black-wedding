import Menu from "./Menu";
import { useState, useEffect } from "react";

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
          className={`fixed top-0 left-0 right-0 py-6 ${
            bgColor ? "bg-black drop-shadow-lg" : ""
          } ${ visible ? '' : 'hidden' }`}
        >
          <div
            className={`container mx-auto flex items-center justify-between`}
          >
            <div>
              <img
                className="w-[13.3125em]"
                src="/images/logo.png"
                alt="Logo"
              />
            </div>
            <Menu />
          </div>
        </nav>
      </>
    );
};

export default Navbar;