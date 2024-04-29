import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  return (
    <>
      <ul className="flex flex-col lg:flex-row lg:items-center  lg:gap-12 text-base lg:text-lg font-medium">
        <li className="border-b pb-1 lg:border-none lg:pb-0">
          <Link
            to="/vendors"
            className={`text-brandBlack hover:border-b-2 ${
              location.pathname.length > 1
                ? "lg:text-brandBlack"
                : "lg:text-white"
            }`}
          >
            Vendors
          </Link>
        </li>
        <li className="border-b pb-1 lg:border-none lg:pb-0">
          <Link
            to={"/vendor-search"}
            className={`text-brandBlack hover:border-b-2 ${
              location.pathname.length > 1
                ? "lg:text-brandBlack"
                : "lg:text-white"
            }`}
          >
            Search
          </Link>
        </li>
        <li className="border-b pb-1 lg:border-none lg:pb-0">
          <a
            href="#"
            className={`text-brandBlack hover:border-b-2 ${
              location.pathname.length > 1
                ? "lg:text-brandBlack"
                : "lg:text-white"
            }`}
          >
            Magazine
          </a>
        </li>
        <li className="border-b pb-1 lg:border-none lg:pb-0">
          <a
            href="#"
            className={`text-brandBlack hover:border-b-2 ${
              location.pathname.length > 1
                ? "lg:text-brandBlack"
                : "lg:text-white"
            }`}
          >
            Shop
          </a>
        </li>
        <li className="border-b pb-1 lg:border-none lg:pb-0">
          <a
            href="#"
            className={`text-brandBlack hover:border-b-2 ${
              location.pathname.length > 1
                ? "lg:text-brandBlack"
                : "lg:text-white"
            }`}
          >
            Planning Tool
          </a>
        </li>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
          <li className="border-b pb-1 lg:border-none lg:pb-0">
            <a
              href="#"
              className={`text-brandBlack border lg:text-sm lg:px-6 lg:py-3 rounded-full ${
                location.pathname.length > 1
                  ? "border-brandBlack"
                  : "lg:text-white lg:border-white"
              }`}
            >
              Login
            </a>
          </li>
          <li className="border-b pb-1 lg:border-none lg:pb-0">
            <a
              href="#"
              className={`lg:text-sm lg:px-6 lg:py-3 rounded-full ${
                location.pathname.length > 1
                  ? "bg-brandBlack text-white border border-brandBlack"
                  : "bg-white border border-brandBlack text-brandBlack"
              }`}
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