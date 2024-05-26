import { Link } from "react-router-dom";
import { memo } from "react";

const VendorCard = memo( ( { inline = false, id, image, title, rating, address, description, topRated } ) =>
	{
	return (
		<>
			{inline ? (
				<Link to={`/vendors/${id}`} className="flex flex-col bg-white lg:flex-row hover:drop-shadow-lg rounded-2xl">
					<div className="relative w-[21.5em] h-full">
						<img
							className="w-full h-full transition-all duration-500 rounded-l-2xl group-hover:scale-110"
							src={image}
							alt={title}
							loading="lazy"
						/>
						{topRated && (
							<span className="absolute px-2 py-1 text-xs font-medium text-white rounded-full top-2 left-2 bg-brandBlack">
								Top Rated
							</span>
						)}
					</div>
					<div className="flex flex-col gap-2 p-3 pl-8">
						<div className="pb-1 lg:pb-0">
							<p className="pb-2 text-xs font-bold text-brandBlack lg:text-base">
								{title}
							</p>
							<div className="flex items-center gap-1">
								<svg className="fill-[#F9A51F] h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
									<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
								</svg>
								<p className="text-xs lg:text-base">{rating}</p>
								<svg className="w-1 h-1 mx-0 mt-1 fill-black lg:h-2 lg:w-2 lg:mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
								</svg>
								<p className="text-xs lg:text-base">{address}</p>
							</div>
						</div>
						<p className="text-xs line-clamp-2 lg:text-base">{description}</p>
					</div>
				</Link>
			) : (
				<Link to={`/vendors/${id}`} className="transition-all duration-500">
					<div className="relative">
						<img
							className="rounded-t-2xl w-full h-[8em] lg:h-[14.1875em] group-hover:scale-110 transition-all duration-500"
							src={image}
							alt={title}
							loading="lazy"
						/>
						{topRated && (
							<span className="absolute px-2 py-1 text-xs font-medium text-white rounded-full top-2 left-2 bg-brandBlack">
								Top Rated
							</span>
						)}
					</div>
					<div className="flex flex-col gap-2 p-3">
						<div className="pb-1 lg:pb-0">
							<p className="pb-2 text-xs font-bold text-brandBlack lg:text-base">
								{title}
							</p>
							<div className="flex items-center gap-1">
								<svg className="fill-[#F9A51F] h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
									<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
								</svg>
								<p className="text-xs lg:text-base">{rating}</p>
								<svg className="w-1 h-1 mx-0 mt-1 fill-black lg:h-2 lg:w-2 lg:mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
								</svg>
								<p className="text-xs lg:text-base">{address}</p>
							</div>
						</div>
						<p className="text-xs line-clamp-2 lg:text-base">{description}</p>
					</div>
				</Link>
			)}
		</>
	);
});

export default VendorCard;
