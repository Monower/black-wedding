import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { Link, useLocation } from "react-router-dom";

const Header = () =>
{
	const location = useLocation();

	const LogoLink = location.pathname === '/' ? '/assets/images/logo-white.png' : '/assets/images/logo-black.png';

	return (
		<>
			<nav className="absolute top-0 left-0 right-0 px-2 py-2 bg-transparent lg:py-6">
				<div className="container flex items-center justify-between mx-auto">
					<div>
						<Link to="/">
							<img className="h-10 w-28 lg:w-52" src={LogoLink} alt="Black Wedding" />
						</Link>
					</div>
					<div className="hidden lg:block">
						<Menu />
					</div>
					<div className="text-white lg:hidden">
						<MobileMenu />
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
