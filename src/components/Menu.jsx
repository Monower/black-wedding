const Menu = () => {
    return (
      <>
        <ul className="flex items-center text-white gap-12 text-lg font-medium">
          <li>
            <a href="#">Vendors</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Magazine</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Planning Tool</a>
          </li>
          <div className="flex items-center gap-4">
            <li>
              <a href="#" className="border border-white px-6 py-3 rounded-full">
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-white text-[#151623] px-6 py-3 rounded-full"
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