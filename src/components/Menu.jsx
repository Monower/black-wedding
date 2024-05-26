import { Link, useLocation } from "react-router-dom";

const Menu = () =>
{
	const location = useLocation();

	const menuItems = [
		{ label: "Home", to: "/" },
		{ label: "Vendors", to: "/vendors" },
		{ label: "Search", to: "/vendors/search" },
		{ label: "Shop", to: "#" },
		{ label: "Planning Tool", to: "#" }
	];

	return (
		<>
			<ul className="flex flex-col text-base font-medium lg:flex-row lg:items-center lg:gap-10 lg:text-lg">
				{ menuItems.map( ( item, index ) => (
					<li key={index} className="pb-1 border-b lg:border-none lg:pb-0">
						<Link
							to={item.to}
							className={`text-brandBlack hover:border-b-2 ${
							location.pathname.length > 1
								? "lg:text-brandBlack"
								: "lg:text-white"
							}`}
						>
							{item.label}
						</Link>
					</li>
				) ) }
				<div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
					<button className="h-full pb-1 border-b lg:border-none lg:pb-0">
						<Link
							to="#"
							className={`lg:text-sm lg:px-6 lg:py-2 rounded-full border ${
							location.pathname.length > 1
								? "border-brandBlack bg-transparent text-brandBlack hover:bg-brandBlack hover:text-white"
								: "border-white bg-transparent text-white hover:bg-white hover:text-brandBlack"
							} transition-all duration-500`}
						>
							Login
						</Link>
					</button>
					<button className="h-full pb-1 border-b lg:border-none lg:pb-0">
						<Link
							to="#"
							className={`lg:text-sm lg:px-6 lg:py-2 rounded-full border 
							${
							location.pathname.length > 1
								? "border-brandBlack bg-brandBlack text-white hover:bg-transparent hover:text-brandBlack"
								: "border-white bg-white text-brandBlack hover:bg-transparent hover:text-white"
							} transition-all duration-500`}
						>
							Get Started
						</Link>
					</button>
				</div>
			</ul>
		</>
	);
};

export default Menu;
