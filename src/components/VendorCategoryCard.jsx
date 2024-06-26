import { memo } from "react";
import { Link } from "react-router-dom";

const VendorCategoryCard = memo( ( { id, image, title, url } ) =>
{
	return (
		<Link to={url}>
			<div className="relative w-full overflow-hidden">
				<img
					className="w-full h-[8em] lg:h-[16.125em] rounded-2xl group-hover:scale-110 transition-all duration-500"
					src={image}
					alt="Black Wedding"
				/>
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent rounded-2xl"></div>
				<p className="text-white font-semibold text-center lg:text-[18px] absolute bottom-2 left-4">
					{title}
				</p>
			</div>
		</Link>
	);
} );

export default VendorCategoryCard;
