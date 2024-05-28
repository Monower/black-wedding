import { useState, useEffect } from "react";
import SearchForm from '../components/SearchForm';
import VendorCard from "../components/VendorCard";
import axiosInstance from '../services/axiosInstance';

const SearchPage = () =>
{
	const [ showfilter, setShowFilter ] 	= useState( false );
	
	const [ viewType, setViewType ] 		= useState( "grid" );
	
	const [ showItem, setShowItem ] 		= useState( 8 );
	
	const [ fromItem, setFromItem ] 		= useState( 0 );
	
	const [ toItem, setToItem ] 			= useState( showItem );
	
	const [ itemIndex, setItemIndex ] 		= useState( 0 );

	const [ vendors, setVendors ] 			= useState( [] );

	const [ vendorsError, setVendorsError ] = useState( null );

	useEffect( () =>
	{
		fetchData();
	
	}, [] );

	const fetchData = async () =>
	{
		axiosInstance.get( '/vendors?per_page=4&page=1' )
		.then( ( response ) =>
		{
			// Handle successful response
			setVendors( response.data );
		} )
		.catch( ( error ) =>
		{
			// Handle error
			setVendorsError( 'Something went wrong! Please Try Again.' );
		} );
	};

	const paginate = () =>
	{
		const pageCount = Math.ceil( vendors.length / showItem );
		
		const pages 	= Array.from( { length: pageCount }, ( _, index ) => index );
		
		return pages;
	};

	// Function to generate a random latitude
	const random_latitude = () =>
	{
	    return Math.random() * ( 45 - 30 ) + 30;
	}

	// Function to generate a random longitude
	const random_longitude = () =>
	{
	    return Math.random() * ( 105 - 85 ) - 105;
	}

	const randomInRange = ( min, max ) =>
	{
		return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
	}

	const loadMaps = () =>
	{
		const id            = 'map';

		const el            = document.getElementById( id );
		
		var map;

		// Check if map is already initialized on this element
		if ( ! el.hasAttribute( 'data-initialized' ) )
		{
			// Set flag indicating map initialization
			el.setAttribute( 'data-initialized', true );

			map = new google.maps.Map( el,
			{
				zoom: 6,
				center: { lat: 47.1164, lng: 101.2996 }, // Center of the USA
				mapId: id,
			} );
			
			vendors.forEach( function( markerData )
			{
				markerData.lat 		= random_latitude();
				markerData.long 	= random_longitude();
				markerData.price 	= randomInRange( 100, 5000 );
				
				markerData.title 	= `<div style="text-align: center; font-weight: bold;">${markerData.title}<br>$${markerData.price}</div>`;
				
				// Get options from data attributes
				const lat   = parseFloat( markerData.lat );
				const lng   = parseFloat( markerData.long );
				const title = markerData.title;

				if ( ! lat && ! lng ) return;

				var marker = new google.maps.marker.AdvancedMarkerElement( {
					map,
					position: { lat: lat, lng: lng },
					title: title
				} );

				// Create and display marker label (info window)
				var infowindow = new google.maps.InfoWindow( {
					content: title
				} );

				infowindow.open( map, marker );
			} );
		}
	};

	const pagination = paginate();

	return (
		<>
			<section>
				<div className="flex flex-col items-center justify-center py-28 bg-gradient-to-b from-rose-100/60 to-white">
					<div className="container mx-auto">
						<div className="flex items-center px-4 lg:px-0 pb-[1em] lg:pb-[2em]">
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-4 h-4 lg:w-6 lg:h-6" viewBox="0 0 24 24">
									<path d="M10 3H3v7h7V3Zm11 0h-7v7h7V3Zm0 11h-7v7h7v-7Zm-11 0H3v7h7v-7Z" stroke="#151623" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
								</svg>
							</span>
							<p className="ml-2 font-bold text-[14px] lg:text-[16px]">
								Vendors
							</p>
							<span className="ml-2">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-3 lg:w-6 lg:h-4 fill-brandBlack" viewBox="0 0 320 512">
									<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
								</svg>
							</span>
							<p className="ml-2 text-[14px] lg:text-[16px]">Videographers</p>
						</div>
						<div className="flex justify-center">
							<div className="flex flex-col gap-2">
								<SearchForm />
							</div>
						</div>
					</div>
				</div>
				<div className="py-[2.5em] lg:py-[4.5em] bg-[#F5F5F5]">
					<div className="container flex flex-col items-center justify-between gap-4 mx-auto lg:flex-row lg:gap-0">
						<h3 className="text-[24px] lg:text-[32px] text-brandBlack font-bold lg:leading-8 text-center lg:text-left">
							Top Videographers in <br />
							<span className="text-brandBrown">
								New York, NY (234 vendors)
							</span>
						</h3>
						<div className="inline-flex flex-col gap-4 lg:flex-row">
							<button
								onClick={ () =>
								{
									setShowFilter( ! showfilter );
								}}
								className={`flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-300 text-brandBlack text-[14px] transition-all duration-500 ${
									showfilter ? "bg-gray-300" : ""
								}`}
							>
								<span>
									<svg className="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M2.6665 14V9.33337" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M2.6665 6.66667V2" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M7.99988 14V8" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M7.99988 5.33333V2" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M13.3331 14V10.6667" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M13.3331 8V2" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M0.666504 9.33337H4.6665" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M5.99988 5.33337H9.99988" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M11.3331 10.6667H15.3331" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</span>
								<span>Filters</span>
							</button>
							<div className="flex flex-col border border-gray-300 rounded-lg lg:flex-row">
								<button
									onClick={ () =>
									{
										setViewType( "grid" );
									}}
									className={`flex items-center gap-2 border-r border-r-gray-300 px-3 py-2  hover:bg-gray-300 text-brandBlack text-[14px] transition-all duration-500 rounded-l-lg ${
										viewType === "grid" ? "bg-gray-300" : ""
									}`}
								>
									<span>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10 3H3V10H10V3Z" stroke="#151623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M21 3H14V10H21V3Z" stroke="#151623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M21 14H14V21H21V14Z" stroke="#151623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M10 14H3V21H10V14Z" stroke="#151623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</span>
									<span>Grid View</span>
								</button>
								<button
									onClick={ () =>
									{
										setViewType( "list" );
									}}
									className={`flex items-center gap-2 border-r border-gray-300 px-3 py-2  hover:bg-gray-300 text-brandBlack text-[14px] transition-all duration-500 ${
										viewType === "list" ? "bg-gray-300" : ""
									}`}
								>
									<span>
										<svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
											<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
										</svg>
									</span>
									<span>List View</span>
								</button>
								<button
									onClick={ () =>
									{
										setViewType( "map" );

										setTimeout( () => loadMaps(), 5000 );
									}}
									className={`flex items-center gap-2  px-3 py-2  hover:bg-gray-300 text-brandBlack text-[14px] transition-all duration-500 rounded-r-lg ${
										viewType === "map" ? "bg-gray-300" : ""
									}`}
								>
									<span>
										<svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
											<path d="M565.6 36.2C572.1 40.7 576 48.1 576 56V392c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5V421.2l120-45.7V90.8L48 136.5zM360 422.7V137.3l-144-48V374.7l144 48zm48-1.5l120-45.7V90.8L408 136.5V421.2z" />
										</svg>
									</span>
									<span>Map View</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className=" pb-[4.5em] bg-[#F5F5F5]">
					<div className="container flex flex-col gap-2 px-2 mx-auto lg:px-0 lg:flex-row lg:gap-4">
						{showfilter && (
							<div>
								<form className="lg:min-w-[18.5625em] border border-gray-300 rounded-2xl lg:p-6 flex flex-col items-center sticky top-24 z-10">
									<div>
										<h3 className="text-[16px] lg:text-[18px] font-bold text-brandBlack flex items-center gap-2 pb-[1.625em]">
											<span>
												<svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
													<path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
												</svg>
											</span>
											<span>Support Diversity</span>
										</h3>
										<div className="inline-flex flex-col gap-4">
											<fieldset className="flex items-center gap-2">
												<input
													type="checkbox"
													name="black_owned"
													id="black_owned"
													className="w-4 h-4"
												/>
												<label
													htmlFor="black_owned"
													className="text-[16px] font-medium"
												>
													Black Owned
												</label>
											</fieldset>
											<fieldset className="flex items-center gap-2">
												<input
													type="checkbox"
													name="asian_owned"
													id="asian_owned"
													className="w-4 h-4"
												/>
												<label
													htmlFor="asian_owned"
													className="text-[16px] font-medium"
												>
													Asian-owned
												</label>
											</fieldset>
											<fieldset className="flex items-center gap-2">
												<input
													type="checkbox"
													name="hispanic_latinx_owned"
													id="hispanic_latinx_owned"
													className="w-4 h-4"
												/>
												<label
													htmlFor="hispanic_latinx_owned"
													className="text-[16px] font-medium"
												>
													Hispanic or Latinx-owned
												</label>
											</fieldset>
											<fieldset className="flex items-center gap-2">
												<input
													type="checkbox"
													name="lgbtq_owned"
													id="lgbtq_owned"
													className="w-4 h-4"
												/>
												<label
													htmlFor="lgbtq_owned"
													className="text-[16px] font-medium"
												>
													LGBTQ+owned
												</label>
											</fieldset>
											<fieldset className="flex items-center gap-2">
												<input
													type="checkbox"
													name="native_american_owned"
													id="native_american_owned"
													className="w-4 h-4"
												/>
												<label
													htmlFor="native_american_owned"
													className="text-[16px] font-medium"
												>
													Native American-owned
												</label>
											</fieldset>
											<fieldset className="flex items-center gap-2">
												<input
													type="checkbox"
													name="pacific_islander_owned"
													id="pacific_islander_owned"
													className="w-4 h-4"
												/>
												<label
													htmlFor="pacific_islander_owned"
													className="text-[16px] font-medium"
												>
													Pacific Islander-owned
												</label>
											</fieldset>
											<fieldset className="flex items-center gap-2">
												<input
													type="checkbox"
													name="veteran_owned"
													id="veteran_owned"
													className="w-4 h-4"
												/>
												<label
													htmlFor="veteran_owned"
													className="text-[16px] font-medium"
												>
													Veteran-owned
												</label>
											</fieldset>
											<fieldset className="flex items-center gap-2">
												<input
													type="checkbox"
													name="woman_owned"
													id="woman_owned"
													className="w-4 h-4"
												/>
												<label
													htmlFor="woman_owned"
													className="text-[16px] font-medium"
												>
													Woman-owned
												</label>
											</fieldset>

											<button
												type="reset"
												className="px-4 py-2 mt-4 text-white bg-brandBlack rounded-2xl"
											>
												Reset
											</button>
										</div>
									</div>
								</form>
							</div>
						)}
						<div className="flex flex-col gap-2 lg:flex-row-reverse">
							{viewType == "map" && (
								<div className="w-6/12">
									<map id="map" className="z-10 flex w-full h-full"></map>
								</div>
							)}
							<div className={`${
								viewType == "map" ? "lg:w-6/12" : ""
							}`}>
								<div
									className={`gap-5 pb-10 ${
										viewType == "map" ? "flex flex-wrap" : "justify-between"
									} ${
										viewType == "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "flex flex-wrap"
									}`}
								>
									{vendors?.slice( fromItem, toItem )?.map( ( item, index ) =>
									{
										if ( viewType == "grid" )
										{
											return (
												<div
													key={index}
													className="pb-3 overflow-hidden transition-all duration-500 transform bg-white hover:drop-shadow-lg rounded-2xl group"
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
											);
										}
										else if ( viewType == "list" )
										{
											return (
												<div
													key={index}
													className="overflow-hidden transition-all duration-500 transform bg-white hover:drop-shadow-lg rounded-2xl group"
												>
													<VendorCard
														inline={true}
														id={item.id}
														image={item.image}
														topRated={item.topRated}
														title={item.title}
														rating={item.rating}
														address={item.address}
														description={item.description}
													/>
												</div>
											);
										}
										else
										{
											return (
												<div
													key={index}
													className={`bg-white hover:drop-shadow-lg  rounded-2xl transition-all transform duration-500 pb-3 group overflow-hidden w-full md:w-[45%]`}
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
											);
										}
									})}
								</div>
								<div className="flex items-center justify-center gap-3">
									<button
										onClick={ () =>
										{
											setFromItem( ( prev ) =>
											{
												return prev - showItem;
											} );
											
											setToItem( ( prev ) =>
											{
												return prev - showItem;
											} );
											
											setItemIndex( ( prev ) =>
											{
												return prev - 1;
											} );
										}}
										disabled={fromItem == 0}
										className="text-brandBlack text-[14px] font-medium"
									>
										Prev
									</button>
									{pagination.map( ( item, index ) =>
									{
										return (
											<button
												key={index}
												onClick={ () =>
												{
													setItemIndex( index );
													
													setFromItem( index * showItem );
													
													setToItem( ( index + 1 ) * showItem );
												}}
												className={`border px-2 py-1 rounded-md text-[14px] font-medium ${
													index === itemIndex
														? "bg-brandBlack text-white border-brandBlack"
														: "text-brandBlack  border-gray-300"
												}`}
											>
												{item + 1}
											</button>
										);
									})}
									<button
										onClick={ () =>
										{
											setFromItem( ( prev ) =>
											{
												return prev + showItem;
											} );
											
											setToItem( ( prev ) =>
											{
												return prev + showItem;
											} );
											
											setItemIndex( ( prev ) =>
											{
												return prev + 1;
											} );
										}}
										disabled={toItem >= vendors.length}
										className="text-brandBlack text-[14px] font-medium"
									>
										Next
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SearchPage;
