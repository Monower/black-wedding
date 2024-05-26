import { memo } from "react";
import { Link } from "react-router-dom";

const StoryCard = memo( ( { id, image, title, description } ) =>
{
	return (
		<div className="flex flex-col gap-4">
			<div>
				<img
					className="rounded-lg"
					src={image}
					alt="Black Wedding"
					loading="lazy"
				/>
			</div>
			<div>
				<h3 className="pb-2 text-lg font-bold leading-5 lg:text-2xl lg:leading-none text-brandBlack">
					{title}
				</h3>
				<p className="pb-3 text-xs lg:text-base text-brandBlack">
					{description}
				</p>
				<button className="h-full pb-1 border-b lg:border-none lg:pb-0">
					<Link
						to={`/stories/${id}`}
						className={`inline-flex items-center group gap-1 lg:gap-2 bg-brandBlack text-white px-8 py-2 rounded-full hover:bg-white border border-brandBlack hover:text-brandBlack transition-all duration-500`}
					>
						View Story
						<span>
							<svg className="w-6 h-4 transition-transform duration-500 fill-current group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
								<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
							</svg>
						</span>
					</Link>
				</button>
			</div>
		</div>
	);
} );

export default StoryCard;
