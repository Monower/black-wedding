import SearchForm from '../components/SearchForm';
import VendorCard from "../components/VendorCard";
import StoryCard from "../components/StoryCard";
import EventCard from "../components/EventCard";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import axiosInstance from '../services/axiosInstance';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function HomePage()
{
	const [ data, setData ] 				= useState( [] );
	
	const [ chunkSize, setChunkSize ] 		= useState( 12 );
	
	const [ filter, setFilter ] 			= useState( "all" );

	const [ categories, setCategories ] 	= useState( [] );

	const [ events, setEvents ] 			= useState( [] );

	const [ stories, setStories ] 			= useState( [] );
	
	const [ vendorsError, setVendorsError ] = useState( null );

	const [ eventsError, setEventsError ] 	= useState( null );

	const [ storiesError, setStoriesError ] = useState( null );

	useEffect( () =>
	{
		fetchData();
	
	}, [] );

	const fetchData = () =>
	{
		axiosInstance.get( '/vendors?per_page=10&page=1' )
		.then( ( response ) =>
		{
			// Handle successful response
			setData( response.data );

			const uniqueCategories	= [ ...new Set( response.data.map( item => item.category ) ) ];
			
			setCategories( uniqueCategories );
		} )
		.catch( ( error ) =>
		{
			// Handle error
			setVendorsError( 'Something went wrong! Please Try Again.' );
		} );

		axiosInstance.get( '/events?per_page=3&page=1' )
		.then( ( response ) =>
		{
			// Handle successful response
			setEvents( response.data );
		} )
		.catch( ( error ) =>
		{
			// Handle error
			setEventsError( 'Something went wrong! Please Try Again.' );
		} );

		axiosInstance.get( '/stories?per_page=3&page=1' )
		.then( ( response ) =>
		{
			// Handle successful response
			setStories( response.data );
		} )
		.catch( ( error ) =>
		{
			// Handle error
			setStoriesError( 'Something went wrong! Please Try Again.' );
		} );
	};

	const filteredData = useMemo( () =>
	{
		if ( filter === "all" )
		{
			return data;
		}
		else
		{
			return data.filter( ( item ) => item.category === filter );
		}
	
	}, [ data, filter ] );

	const handleClick = ( type ) =>
	{
		setFilter( type );
	};

	return (
		<>
			<section className="bg-black/80 bg-[url('/assets/images/bg1.webp')] bg-cover min-h-screen flex flex-col items-center mb-16">
				<div className="flex flex-col pt-40 lg:gap-6 lg:pt-48">
					<h3 className="pb-3 text-4xl font-bold text-center text-white lg:text-6xl lg:pb-0">
						Empower <br /> Your Love Story
					</h3>
					<p className="pb-5 text-base text-center text-white lg:text-xl lg:pb-0">
						Discover Minority Vendors, Plan with Ease, and <br /> Celebrate
						Culture on Your Special Day
					</p>
					<SearchForm />
				</div>
				<div className="pt-48 lg:pt-72 pb-20 container mx-auto px-4 lg:px-[9.5em] flex flex-col lg:flex-row items-center gap-10">
					<div className="border-white lg:border-r">
						<p className="pb-2 font-bold text-white">Plan your events</p>
						<p className="pr-8 text-sm leading-5 text-white lg:text-base">
							Discover Minority Vendors, Plan with Ease, and Celebrate Culture
							on Your Special Day
						</p>
					</div>
					<div className="border-white lg:border-r">
						<p className="pb-2 font-bold text-white">Plan your events</p>
						<p className="pr-8 text-sm leading-5 text-white lg:text-base">
							Discover Minority Vendors, Plan with Ease, and Celebrate Culture
							on Your Special Day
						</p>
					</div>
					<div>
						<p className="pb-2 font-bold text-white">Plan your events</p>
						<p className="pr-8 text-sm leading-5 text-white lg:text-base">
							Discover Minority Vendors, Plan with Ease, and Celebrate Culture
							on Your Special Day
						</p>
					</div>
				</div>
			</section>
			
			<section className="container px-4 pb-8 mx-auto lg:px-0">
				<div className="pb-10">
					<h3 className="pb-3 text-3xl font-bold text-center lg:text-5xl text-brandBlack">
						Crafting Your <span className="text-[#BC7155]">Perfect Day</span>,
						Together
					</h3>
					<p className="text-sm font-medium text-center lg:text-lg text-brandBlack">
						Browse Our Exclusive Network of Vendors Tailored to Your Unique
						Style and Heritage.
					</p>
					{!vendorsError &&
						<div className="flex flex-wrap items-center justify-center gap-4 pt-8">
							<button
								onClick={ () =>
								{
									setFilter( "all" );
									handleClick( "all" );
								}}
								className={`text-sm py-1 px-4 rounded-full border text-brandBlack ${
									filter == "all"
										? "bg-[#F2F2F2]  border-[#F2F2F2]"
										: "bg-white border-gray2"
									}`}
							>
								All
							</button>
							{categories.map( ( category, index ) =>
							{
								// Convert category to title case
								const titleCaseCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
								
								return (
									<button
										key={index}
										onClick={ () =>
										{
											setFilter( category );
											
											handleClick( category );
										}}
										className={`text-sm py-1 px-4 rounded-full border text-brandBlack hover:bg-brandBlack hover:text-white transition-all duration-500 ${
											filter === category
												? "bg-[#F2F2F2] border-[#F2F2F2]"
												: "bg-white border-gray2"
											}`}
									>
										{titleCaseCategory}
									</button>
								);
							})}
						</div>
					}
				</div>
				<div className="relative">
					<div className="flex flex-wrap justify-center gap-6 lg:gap-12">
						<TransitionGroup component={null}>
							{vendorsError ? ( <div className="flex flex-col w-full gap-2 text-red-600 align-center"><svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ff0000" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>{vendorsError}</div> ) : filteredData.slice( 0, chunkSize ).map( ( item, index ) => (
								<CSSTransition
									key={index} // Ensure each item has a unique key
									timeout={300}
									classNames="fade"
								>
									<div
										key={index}
										className="w-[45%] lg:w-[22%] bg-white hover:drop-shadow-lg rounded-2xl transition-all transform duration-500 pb-3 group overflow-hidden"
									>
										<VendorCard
											id={item.id}
											image={item.image}
											topRated={item.topRated}
											title={item.title}
											rating={item.rating}
											address={item.address}
											description={item.description}
										/>
									</div>
								</CSSTransition>
							))}
						</TransitionGroup>
					</div>
					{!vendorsError && filteredData.length > chunkSize && (
						<div className="bg-gradient-to-t from-white via-white to-white/80 w-full h-[250px] lg:h-[375px] absolute bottom-0"></div>
					)}
					{!vendorsError && filteredData.length > chunkSize && filteredData.length !== 0 && (
						<div className="absolute flex justify-center w-full bg-white bottom-48">
							<button
								onClick={ () => setChunkSize( chunkSize + 4 ) }
								className="absolute px-8 py-2 text-white transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 border border-white rounded-full bg-brandBlack hover:bg-white hover:border-brandBlack hover:text-brandBlack top-1/2 left-1/2"
							>
								Show More
							</button>
						</div>
					)}
				</div>
				{data.length <= chunkSize && (
					<div className="flex justify-center pt-4 lg:pt-24">
						<button
							onClick={ () => setChunkSize( 12 ) }
							className="px-8 py-2 text-white transition-all duration-500 border rounded-full bg-brandBlack hover:bg-white border-brandBlack hover:text-brandBlack"
						>
							<Link to='/vendors' >View All</Link>
						</button>
					</div>
				)}
			</section>
			
			<section className="bg-[#E9F6F8] py-12 lg:py-24">
				<div className="container px-2 mx-auto lg:px-24">
					<div className="pb-10">
						<div className="text-center">
							<h3 className="pb-1 text-3xl font-extrabold lg:text-5xl">
								Love in Every Hue
							</h3>
							<p className="text-xs font-medium lg:text-lg">
								Real Couples, Real Moments, and the Vendors Who Made Them Shine
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center gap-8 px-4 lg:flex-row">
						{storiesError ? ( <div className="flex flex-col w-full gap-2 text-red-600 align-center"><svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ff0000" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>{storiesError}</div> ) :
							stories.map( ( story ) => (
								<StoryCard
									key={story.id}
									id={story.id}
									title={story.title}
									image={story.image}
									description={story.description}
								/>
							))
						}
					</div>
				</div>
			</section>

			<section className="container py-10 mx-auto lg:px-24 lg:py-20">
				<p className="text-lg font-medium text-[#F9A51F] text-center pb-4 lg:pb-8">Mentioned in</p>
				<div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
					<img className="w-[7em] lg:w-[10em]" src="/assets/images/brand1.png" alt="Black weddings" loading="lazy" />
					<img className="w-[7em] lg:w-[10em]" src="/assets/images/brand2.png" alt="Black weddings" loading="lazy" />
					<img className="w-[7em] lg:w-[10em]" src="/assets/images/brand3.png" alt="Black weddings" loading="lazy" />
					<img className="w-[7em] lg:w-[10em]" src="/assets/images/brand4.png" alt="Black weddings" loading="lazy" />
					<img className="w-[7em] lg:w-[10em]" src="/assets/images/brand5.png" alt="Black weddings" loading="lazy" />
				</div>
			</section>

			<section className="container px-4 pb-10 mx-auto lg:px-40 lg:pb-20">
				<h3 className="pb-4 text-3xl font-extrabold text-center lg:text-5xl text-brandBlack">
					Upcoming Events
				</h3>
				<p className="pb-5 text-xs font-semibold text-center lg:text-lg text-brandBlack lg:pb-10">
					Unlock a World of Inspiration: Explore Our Upcoming Events Tailored to
					Celebrate Love and Diversity.
				</p>
				<div className="flex flex-col items-center gap-8 lg:flex-row">
					{eventsError ? ( <div className="flex flex-col w-full gap-2 text-red-600 align-center"><svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ff0000" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>{eventsError}</div> ) :
						events.map( ( event ) => (
							<EventCard
								key={event.id}
								id={event.id}
								title={event.title}
								image={event.image}
							/>
						))
					}
				</div>
			</section>
		</>
	)
}

export default HomePage;
