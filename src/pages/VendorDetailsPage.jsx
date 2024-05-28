import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import axios from "axios";

const VendorDetailsPage = () =>
{
	const { id } = useParams();
	
	const [ openLightBox, setOpenLightBox ] = useState( false );

	const [ numOfReviews, setNumOfReviews ] = useState( 4 );

	const [ reviews, setReviews ] 			= useState( [] );

	const [ data, setData ] 				= useState( [] );

	const navigate 							= useNavigate();

	useEffect( () =>
	{
		fetchData();
	
	}, [] );

	const fetchData = async () =>
	{
		try
		{
			const reviews_response 	= await axios.get( "/assets/data/reviews.json" );
			
			setReviews( reviews_response.data );

			const data_response 	= await axios.get( `/assets/data/vendor-${id}.json` );

			if ( data_response.status === 200 )
			{
				setData( data_response.data );
			}
			else
			{
				navigate( '/404' );
			}
		}
		catch ( error )
		{
			console.log( 'Something went wrong! Please Try Again.' );
		}
	};

	const light_box_data = [
		{
			src: "/assets/images/vendor_detail1.png",
		},
		{
			src: "/assets/images/vendor_detail2.png",
		},
		{
			src: "/assets/images/vendor_detail3.png",
		},
	];

	return (
		<>
			<Lightbox
				open={openLightBox}
				close={ () => setOpenLightBox( false ) }
				slides={light_box_data}
				plugins={ [Thumbnails] }
			/>
			<section className="flex flex-col items-center justify-center pt-28 bg-gradient-to-b from-rose-100/60 to-white">
				<div className="container mx-auto">
					<div className="flex items-center px-4 lg:px-0 pb-[1em] lg:pb-[2em]">
						<span>
							<svg className="w-4 h-4 lg:w-6 lg:h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 3H3V10H10V3Z" stroke="#151623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M21 3H14V10H21V3Z" stroke="#151623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M21 14H14V21H21V14Z" stroke="#151623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M10 14H3V21H10V14Z" stroke="#151623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</span>
						<p className="ml-2 font-bold text-[14px] lg:text-[16px]">
							Vendors
						</p>
						<span className="ml-2">
							<svg className="w-4 h-3 lg:w-6 lg:h-4 fill-brandBlack" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >
								<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
							</svg>
						</span>
						<p className="ml-2 text-[14px] lg:text-[16px]">Videographers</p>
					</div>
				</div>
			</section>
			<section className="container flex flex-col items-center justify-center gap-2 px-2 mx-auto mb-4 lg:px-0 lg:flex-row lg:mb-8">
				<img
					className="w-[14em] md:w-[28em] h-[10em] md:h-[20em] lg:w-[43.25em] lg:h-[30em] rounded-l-2xl rounded-r-2xl lg:rounded-r-none lg:rounded-l-2xl"
					src="/assets/images/vendor_detail1.png"
					alt="Black Wedding"
					loading="lazy"
				/>
				<div className="flex flex-col gap-2 lg:flex-row">
					<div className="flex flex-col items-center gap-2">
						<img
							className="w-[14em] md:w-[28em] h-[10em] md:h-[20em] lg:w-[13.6875em] lg:h-[14.76em] rounded-2xl lg:rounded-none"
							src="/assets/images/vendor_detail2.png"
							alt="Black Wedding"
							loading="lazy"
						/>
						<img
							className="w-[14em] md:w-[28em] h-[10em] md:h-[20em] lg:w-[13.6875em] lg:h-[14.76em] rounded-2xl lg:rounded-none "
							src="/assets/images/vendor_detail3.png"
							alt="Black Wedding"
							loading="lazy"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<img
							className="w-[14em] md:w-[28em] h-[10em] md:h-[20em] lg:w-[13.6875em] lg:h-[14.76em] rounded-2xl lg:rounded-l-none lg:rounded-br-none"
							src="/assets/images/vendor_detail4.png"
							alt="Black Wedding"
							loading="lazy"
						/>
						<div className="relative">
							<img
								className="w-[14em] md:w-[28em] h-[10em] md:h-[20em] lg:w-[13.6875em] lg:h-[14.76em] rounded-2xl lg:rounded-l-none lg:rounded-tr-none"
								src="/assets/images/vendor_detail5.png"
								alt="Black Wedding"
								loading="lazy"
							/>
							<button
								onClick={ () => setOpenLightBox( true ) }
								className="absolute px-2 py-1 text-sm bg-white rounded-lg text-brandBlack drop-shadow-lg bottom-6 right-6 lg:bottom-4 lg:right-4"
							>
							Show all photos
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className="container mx-auto px-8 min-[1440px]:px-36 pb-8 lg:px-16 lg:pb-16 flex flex-col-reverse lg:flex-row gap-5">
				<div>
					<div className="flex flex-col gap-4 pb-12 lg:flex-row">
						<Link
							to={"#"}
							className="text-[14px] font-medium text-brandBlack px-2 py-1 border border-gray-300 rounded-md"
						>
							Pricing
						</Link>
						<Link
							to={"#"}
							className="text-[14px] font-medium text-brandBlack px-2 py-1 border border-gray-300 rounded-md"
						>
							About Us
						</Link>
						<Link
							to={"#"}
							className="text-[14px] font-medium text-brandBlack px-2 py-1 border border-gray-300 rounded-md"
						>
							FAQs
						</Link>
						<Link
							to={"#"}
							className="text-[14px] font-medium text-brandBlack px-2 py-1 border border-gray-300 rounded-md"
						>
							Reviews
						</Link>
						<Link
							to={"#"}
							className="text-[14px] font-medium text-brandBlack px-2 py-1 border border-gray-300 rounded-md"
						>
							Location
						</Link>
					</div>
					<div className="pb-5 lg:pb-11">
						<h3 className="text-[24px] font-bold text-brandBlack pb-3 lg:pb-6">
							Pricing information
						</h3>
						<div className="flex gap-4 pb-2">
							<div>
								<p className="text-brandBlack text-[20px] font-bold">$1,490</p>
								<p className="text-gray2 text-[14px] font-medium">
									starting price
								</p>
							</div>
							<div>
								<p className="text-brandBlack text-[20px] font-bold">$6,000+</p>
								<p className="text-gray2 text-[14px] font-medium">Up to</p>
							</div>
						</div>
						<p className="text-brandBlack text-[14px] font-medium">
							Do you want more pricing details?{" "}
							<Link to={"#"} className="text-brandBrown">
							Request Pricing
							</Link>
						</p>
					</div>
					<div>
						<h3 className="text-[24px] font-bold text-brandBlack pb-3 lg:pb-6">
							About Us
						</h3>
						<p className="text-brandBlack text-[16px] font-medium pb-6 text-justify">
							Tercero by Aldea Weddings is a beautiful wedding venue located in
							Glendale, Arizona which was founded in 2004 as a
							bohemian-influenced haven. This family-owned and -operated
							business has been hosting amazing celebrations for years now,
							providing couples with a unique and refreshing space to exchange
							their professions of love.
						</p>

						<p className="text-brandBlack text-[16px] font-bold">
							Facilities and Capacity
						</p>
						<p className="text-brandBlack text-[16px] font-medium pb-6 text-justify">
							Tercero by Aldea features beautiful grounds and architecture that
							boast stark white brick and wooden accents, resulting in an
							emanating rustic ambiance. The succulent gardens that surround the
							estate create an amazing space for outdoor ceremonies. The main
							reception room has 4,500 square feet of space that includes the
							bridal suite and groom's room. Meanwhile, the courtyard boasts
							gorgeous water and fire features that add to the natural
							atmosphere of the gardens and forested areas. It also houses an
							outdoor bar and is fully equipped with cocktail seating and
							pergolas that make it an ideal setting for an outdoor cocktail
							reception. This beautiful private village can host a total of 250
							guests in its indoor and outdoor spaces.
						</p>

						<p className="text-brandBlack text-[16px] font-bold">
							Services Offered
						</p>
						<p className="text-brandBlack text-[16px] font-medium pb-6 text-justify">
							Tercero by Aldea Weddings offers several all-inclusive packages
							that are available for customization and are designed to suit an
							array of event budgets. The team at this estate will set every
							couple at ease by offering outstanding service. Moreover, a
							multitude of rental items can be supplied by the venue, such as
							chairs, linens, centerpieces, lounge furniture, flatware,
							glassware, and more. The staff that is housed by this peaceful
							dwelling can provide setup, cleanup, management, and security
							services on each couple's special day. The following specialty
							add-on services are also available:
						</p>
					</div>
					<div className="pb-8 lg:pb-16">
						<h3 className="text-brandBlack font-bold text-[18px] lg:text-[24px] pb-6">
							Frequently asked questions
						</h3>
						<div>
							<div className="pb-4 mb-4 border-b border-gray-300">
								<p className="font-bold text-brandBlack pb-[5px] text-[14px]">
									Do you have a site fee for wedding receptions at your venue?
								</p>
								<p className="text-brandBlack text-[12px] lg:text-[14px] font-medium">
									Yes
								</p>
							</div>
							<div className="pb-4 mb-4 border-b border-gray-300">
								<p className="font-bold text-brandBlack pb-[5px] text-[14px]">
									What is the starting site fee for wedding receptions during
									peak season?
								</p>
								<p className="text-brandBlack text-[12px] lg:text-[14px] font-medium">
									$10,000
								</p>
							</div>
							<div className="pb-4 mb-4 border-b border-gray-300">
								<p className="font-bold text-brandBlack pb-[5px] text-[14px]">
									Which of the following are included in the starting price for
									bar service?
								</p>
								<p className="text-brandBlack text-[12px] lg:text-[14px] font-medium">
									Films
								</p>
							</div>
						</div>
					</div>
					<div className="pb-6">
						<h3 className="text-brandBlack font-bold text-[24px] pb-3 lg:pb-6">
							Reviews
						</h3>
						<h3 className="text-brandBlack font-bold text-[24px]">5.0</h3>
						<div className="flex items-center gap-2 pb-5">
							<div className="flex gap-1">
								<svg className="fill-[#F9A51F] h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
									<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
								</svg>
								<svg className="fill-[#F9A51F] h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
									<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
								</svg>
								<svg className="fill-[#F9A51F] h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
									<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
								</svg>
								<svg className="fill-[#F9A51F] h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
									<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
								</svg>
								<svg className="fill-[#F9A51F] h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
									<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
								</svg>
							</div>
							<p className="text-gray2 text-[14px] font-medium">126 Reviews</p>
						</div>
						<div className="flex flex-col gap-4 pb-4 lg:flex-row">
							<div className="flex flex-col gap-4">
								<div className="flex items-center lg:justify-between gap-4 max-w-[14.9375em]">
									<p className="text-brandBlack text-[14px] font-medium min-w-[8em] lg:min-w-max">Quality of services</p>
									<div className="w-20 h-2 rounded-full bg-brandBlack"></div>
									<p className="text-brandBlack text-[14px] font-medium">5</p>
								</div>
								<div className="flex items-center lg:justify-between gap-4 max-w-[14.9375em]">
									<p className="text-brandBlack text-[14px] font-medium min-w-[8em] lg:min-w-auto">Avg response time</p>
									<div className="w-20 h-2 rounded-full bg-brandBlack"></div>
									<p className="text-brandBlack text-[14px] font-medium">5</p>
								</div>
								<div className="flex items-center lg:justify-between gap-4 max-w-[14.9375em]">
									<p className="text-brandBlack text-[14px] font-medium min-w-[8em] lg:min-w-auto">Professionalism</p>
									<div className="w-20 h-2 rounded-full bg-brandBlack"></div>
									<p className="text-brandBlack text-[14px] font-medium">5</p>
								</div>
								</div>
								<div className="flex flex-col gap-4">
								<div className="flex items-center lg:justify-between gap-4 max-w-[14.9375em]">
									<p className="text-brandBlack text-[14px] font-medium min-w-[8em] lg:min-w-auto">Value</p>
									<div className="w-20 h-2 rounded-full bg-brandBlack"></div>
									<p className="text-brandBlack text-[14px] font-medium">5</p>
								</div>
								<div className="flex items-center lg:justify-between gap-4 max-w-[14.9375em]">
									<p className="text-brandBlack text-[14px] font-medium min-w-[8em] lg:min-w-auto">Flexibility</p>
									<div className="w-20 h-2 rounded-full bg-brandBlack"></div>
									<p className="text-brandBlack text-[14px] font-medium">5</p>
								</div>
							</div>
						</div>
						<button className="transition-all duration-500 bg-white border rounded-full border-brandBlack lg:text-sm lg:px-6 lg:py-2 text-brandBlack hover:bg-brandBlack hover:text-white">
							Write a review
						</button>
					</div>
					<div className="flex flex-col gap-4">
						{reviews?.slice( 0, numOfReviews )?.map( ( item, index ) => (
							<div key={index}>
								<ReviewCard
									image={item?.image}
									username={item?.username}
									address={item?.address}
									rating={item?.rating}
									time={item?.time}
									review={item?.review}
								/>
							</div>
						))}
						{numOfReviews < reviews?.length ? (
							<div className="flex justify-center mt-2">
								<button
									onClick={() => setNumOfReviews( reviews?.length )}
									className="transition-all duration-500 bg-white border rounded-full border-brandBlack lg:text-sm lg:px-6 lg:py-2 text-brandBlack hover:bg-brandBlack hover:text-white"
								>
									Load more reviews
								</button>
							</div>
						) : (
							<div className="flex justify-center mt-2">
								<button
									onClick={ () => setNumOfReviews( 4 ) }
									className="transition-all duration-500 bg-white border rounded-full border-brandBlack lg:text-sm lg:px-6 lg:py-2 text-brandBlack hover:bg-brandBlack hover:text-white"
								>
									See Less
								</button>
							</div>
						)}
					</div>
				</div>
				<div className="lg:min-w-[20.625em]">
					<div className="p-3 bg-white lg:p-6 drop-shadow-lg rounded-2xl">
						<div className="flex flex-col gap-2 pb-5 lg:pb-9">
							<p className="text-[#525252] text-[14px] font-medium flex gap-1 items-center">
								<span>
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_98_1627)">
											<path d="M15.3334 7.99333L13.7067 6.13333L13.9334 3.67333L11.5267 3.12667L10.2667 1L8.00008 1.97333L5.73341 1L4.47341 3.12667L2.06675 3.66667L2.29341 6.13333L0.666748 7.99333L2.29341 9.85333L2.06675 12.32L4.47341 12.8667L5.73341 15L8.00008 14.02L10.2667 14.9933L11.5267 12.8667L13.9334 12.32L13.7067 9.86L15.3334 7.99333ZM12.7001 8.98L12.3267 9.41333L12.3801 9.98L12.5001 11.28L11.2334 11.5667L10.6734 11.6933L10.3801 12.1867L9.72008 13.3067L8.53341 12.7933L8.00008 12.5667L7.47341 12.7933L6.28675 13.3067L5.62675 12.1933L5.33341 11.7L4.77341 11.5733L3.50675 11.2867L3.62675 9.98L3.68008 9.41333L3.30675 8.98L2.44675 8L3.30675 7.01333L3.68008 6.58L3.62008 6.00667L3.50008 4.71333L4.76675 4.42667L5.32675 4.3L5.62008 3.80667L6.28008 2.68667L7.46675 3.2L8.00008 3.42667L8.52675 3.2L9.71341 2.68667L10.3734 3.80667L10.6667 4.3L11.2267 4.42667L12.4934 4.71333L12.3734 6.01333L12.3201 6.58L12.6934 7.01333L13.5534 7.99333L12.7001 8.98Z" fill="#323232"/>
											<path d="M6.72669 9.16667L5.18003 7.61334L4.19336 8.60667L6.72669 11.1467L11.62 6.24001L10.6334 5.24667L6.72669 9.16667Z" fill="#323232"/>
										</g>
										<defs>
											<clipPath id="clip0_98_1627">
												<rect width="16" height="16" fill="white"/>
											</clipPath>
										</defs>
									</svg>
								</span>
								<span>Woman-owned</span>
							</p>
							<h3 className="text-[28px] lg:text-[32px] font-extrabold text-brandBlack leading-[35px]">Glacier Wedding Films for a text</h3>
							<div className="flex items-center gap-1">
								<svg className="fill-[#F9A51F] h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
									<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
								</svg>
								<svg className="fill-[#F9A51F] h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
									<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
								</svg>
								<svg className="fill-[#F9A51F] h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
									<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
								</svg>
								<svg className="fill-[#F9A51F] h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
									<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
								</svg>
								<svg className="fill-[#F9A51F] h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
									<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
								</svg>
								<p className="text-brandBlack text-[14px] font-medium">5</p>
								<svg className="w-1 h-1 mx-0 mt-1 fill-brandBlack lg:mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
								</svg>
								<p className="text-[#107BEA] text-[14px] font-medium">
									126 Reviews
								</p>
							</div>
							<p className="text-brandBlack text-[14px] font-medium flex items-center gap-2">
								<span>
									<svg className="w-4 h-4 fill-current lg:h-6 lg:w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
										<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
									</svg>
								</span>
								<span>New York, NY</span>
							</p>
						</div>
						<div className="py-2 mb-5 border-gray-300 border-y lg:py-4">
							<p className="text-brandBlack text-[14px] font-medium">Popular Price $3,420</p>
							<p className="text-brandBlack text-[14px] font-medium">Up to 300 guest</p>
						</div>
						<div className="flex flex-col items-center gap-4">
							<button className="text-white transition-all duration-500 border border-white rounded-full bg-brandBlack lg:text-sm lg:px-16 lg:py-2 hover:bg-white hover:border-brandBlack hover:text-brandBlack">Request pricing</button>
							<p className="text-brandBlack text-[14px] font-medium flex items-center gap-2">
								<span>
									<svg className="fill-[#00B127] w-4 h-4 lg:h-6 lg:w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
										<path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
									</svg>
								</span>
								<span>Responds within 24 hours</span>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	); 
};

export default VendorDetailsPage;
