const Menu = () => {
    return (
      <>
        <ul className="flex flex-col lg:flex-row lg:items-center  lg:gap-12 text-base lg:text-lg font-medium">
          <li className="border-b pb-1 lg:border-none lg:pb-0">
            <a href="#" className="text-brandBlack lg:text-white">
              Vendors
            </a>
          </li>
          <li className="border-b pb-1 lg:border-none lg:pb-0">
            <a href="#" className="text-brandBlack lg:text-white">
              Events
            </a>
          </li>
          <li className="border-b pb-1 lg:border-none lg:pb-0">
            <a href="#" className="text-brandBlack lg:text-white">
              Magazine
            </a>
          </li>
          <li className="border-b pb-1 lg:border-none lg:pb-0">
            <a href="#" className="text-brandBlack lg:text-white">
              Shop
            </a>
          </li>
          <li className="border-b pb-1 lg:border-none lg:pb-0">
            <a href="#" className="text-brandBlack lg:text-white">
              Planning Tool
            </a>
          </li>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
            <li className="border-b pb-1 lg:border-none lg:pb-0">
              <a
                href="#"
                className="text-brandBlack lg:text-white border border-white lg:px-6 lg:py-3 rounded-full"
              >
                Login
              </a>
            </li>
            <li className="border-b pb-1 lg:border-none lg:pb-0">
              <a
                href="#"
                className="bg-white text-[#151623] lg:px-6 lg:py-3 rounded-full"
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