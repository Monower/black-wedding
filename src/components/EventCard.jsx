import { memo } from "react";
import { Link } from "react-router-dom";

const EventCard = memo( ( { id, title, image } ) =>
{
	return (
		<>
			<div className="flex flex-col items-center justify-center p-3 border border-gray-300 lg:p-6 rounded-3xl">
				<div className="flex items-center gap-2 pb-3">
					<svg className="w-4 h-4 fill-gray2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
						<path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
					</svg>
					<p className="text-sm text-gray2">VIRTUAL EVENT</p>
				</div>
				<h3 className="pb-4 text-base font-bold text-center lg:text-xl lg:pb-8">
					{ title }
				</h3>
				<img
					className="w-full pb-3 rounded-lg lg:pb-6"
					src={ image }
					alt="Black weddings"
					loading="lazy"
				/>
				<button className="h-full pb-1 border-b lg:border-none lg:pb-0">
					<Link
						to={`/events/${id}`}
						className={`inline-flex items-center group gap-1 lg:gap-2 bg-brandBlack text-white px-8 py-2 rounded-full hover:bg-white border border-brandBlack hover:text-brandBlack transition-all duration-500`}
					>
						View Details
						<span>
							<svg className="w-6 h-4 transition-transform duration-500 fill-current group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
								<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
							</svg>
						</span>
					</Link>
				</button>
			</div>
		</>
	);
} );

export default EventCard;