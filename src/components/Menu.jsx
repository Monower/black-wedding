import { useState, useEffect } from "react";

const Menu = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <ul className="flex flex-col lg:flex-row lg:items-center  lg:gap-12 text-base lg:text-lg font-medium">
        <li className="border-b pb-1 lg:border-none lg:pb-0">
          <a href="#" className={`text-brandBlack lg:text-white hover:underline`}>
            Vendors
          </a>
        </li>
        <li className="border-b pb-1 lg:border-none lg:pb-0">
          <a href="#" className={`text-brandBlack lg:text-white hover:underline`}>
            Events
          </a>
        </li>
        <li className="border-b pb-1 lg:border-none lg:pb-0">
          <a href="#" className={`text-brandBlack lg:text-white hover:underline`}>
            Magazine
          </a>
        </li>
        <li className="border-b pb-1 lg:border-none lg:pb-0">
          <a href="#" className={`text-brandBlack lg:text-white hover:underline`}>
            Shop
          </a>
        </li>
        <li className="border-b pb-1 lg:border-none lg:pb-0">
          <a href="#" className={`text-brandBlack lg:text-white hover:underline`}>
            Planning Tool
          </a>
        </li>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
          <li className="border-b pb-1 lg:border-none lg:pb-0">
            <a
              href="#"
              className={`text-brandBlack border lg:text-sm lg:text-white lg:border-white lg:px-6 lg:py-3 rounded-full`}
            >
              Login
            </a>
          </li>
          <li className="border-b pb-1 lg:border-none lg:pb-0">
            <a
              href="#"
              className="bg-white text-brandBlack lg:text-sm lg:px-6 lg:py-3 rounded-full"
              aria-label="Get Started"
            >
              Get Started
            </a>
          </li>
        </div>
      </ul>
    </>
  );
};

export default Menu;