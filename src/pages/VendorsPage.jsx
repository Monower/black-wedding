import { useState, useEffect } from "react";
import SearchForm from '../components/SearchForm';
import VendorCategoryCard from "../components/VendorCategoryCard";
import { Link } from "react-router-dom";
import VendorCard from "../components/VendorCard";
import axiosInstance from '../services/axiosInstance';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const VendorsPage = () =>
{
	const [ categoryCount, setCategoryCount ] 		= useState( 8 );

	const [ categories, setCategories ] 			= useState( [] );

	const [ vendors, setVendors ] 					= useState( [] );

	const [ vendorsError, setVendorsError ] 		= useState( null );

	const [ categoriesError, setCategoriesError ] 	= useState( null );

	useEffect( () =>
	{
		fetchData();
	
	}, [] );

	const fetchData = () =>
	{
		axiosInstance.get( '/vendors?orderby=rating&per_page=4&page=1' )
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

		axiosInstance.get( '/categories?per_page=3&page=1' )
		.then( ( response ) =>
		{
			// Handle successful response
			setCategories( response.data );
		} )
		.catch( ( error ) =>
		{
			// Handle error
			setCategoriesError( 'Something went wrong! Please Try Again.' );
		} );
	};
	
	return (
		<>
			<section className="pb-24">
				<div className="min-h-[74vh] lg:min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-b from-rose-100/60  to-white ">
					<h3 className="text-[24px] lg:text-[48px] font-bold lg:font-extrabold lg:leading-[50px] text-center text-brandBlack pb-5 lg:pb-10 text-shadow shadow-brandBlack">
						Seek Out Top-Rated Vendors <br /> for Every Wedding Theme
					</h3>
					<div className="flex flex-col gap-1 lg:gap-2">
						<SearchForm />
					</div>
				</div>
				<div className="container flex flex-wrap justify-center gap-2 pb-8 mx-auto lg:justify-between lg:gap-4">
					{categoriesError ? ( <div className="flex flex-col w-full gap-2 text-red-600 align-center"><svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ff0000" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>{categoriesError}</div> ) :
						<TransitionGroup component={null}>
							{categories?.slice( 0, categoryCount )?.map( ( item, index ) => (
								<CSSTransition
									key={index} // Ensure each item has a unique key
									timeout={300}
									classNames="fade"
								>
									<div
										key={index}
										className="w-[10em] lg:w-[24%] group overflow-hidden rounded-2xl"
									>
										<VendorCategoryCard
											id={item?.id}
											image={item?.image}
											title={item?.title}
										/>
									</div>
								</CSSTransition>
							))}
						</TransitionGroup>
					}
				</div>
				<div className="flex justify-center">
					{categoryCount < categories?.length ? (
						<button
							onClick={ () => setCategoryCount( categories?.length ) }
							className="bg-brandBlack text-white border border-brandBlack hover:bg-white hover:text-brandBlack transition-all duration-500 px-5 py-1 lg:px-10 lg:py-2 rounded-full lg:text-[18px] font-medium"
						>
							See More
						</button>
					) : (
						<button
							onClick={ () => setCategoryCount( 8 ) }
							className="bg-brandBlack text-white border border-brandBlack hover:bg-white hover:text-brandBlack transition-all duration-500 px-5 py-1 lg:px-10 lg:py-2 rounded-full lg:text-[18px] font-medium"
						>
							See Less
						</button>
					)}
				</div>
			</section>
			<section className="container mx-auto pb-10 lg:pb-[5.625em]">
				<h3 className="text-[20px] lg:text-[48px] font-bold lg:font-extrabold lg:leading-[60px] text-center text-brandBlack pb-5 lg:pb-10">
					Top Rated Vendors in your Area
				</h3>
				<div className="flex flex-wrap justify-center gap-6 lg:gap-4">
					{vendorsError ? ( <div className="flex flex-col w-full gap-2 text-red-600 align-center"><svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ff0000" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>{vendorsError}</div> ) :
						vendors?.map( ( item, index ) => (
							<div
								key={index}
								className="w-[45%] lg:w-[24%] bg-white hover:drop-shadow-lg  rounded-2xl transition-all transform duration-500 pb-3 group overflow-hidden"
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
						))
					}
				</div>
			</section>
			<section className="container flex flex-col-reverse p-4 mx-auto mb-10 bg-brandBlack lg:p-0 lg:rounded-2xl lg:mb-20 lg:flex-row">
				<div className="lg:p-10 lg:w-[60%]">
					<h3 className="text-white lg:pb-4 lg:text-[32px] lg:leading-[35px] font-extrabold ">
						Join Our Celebrated Circle of Vendors
					</h3>
					<p className="text-white pb-4 lg:text-[18px] lg:leading-[25px] lg:font-medium text-justify lg:text-normal">
						Transform your passion into opportunity with the Black Wedding
						Experience. Connect with engaged couples seeking your unique
						skills and cultural expertise.
					</p>
					<Link
						to={"/vendor/signup"}
						className="inline-flex items-center gap-1 px-8 py-2 transition-all duration-500 bg-white border rounded-full group lg:gap-2 text-brandBlack hover:bg-brandBlack border-brandBlack hover:border-white hover:text-white"
					>
						<span>Become A Vendor</span>
						<span>
							<svg className="w-4 h-3 transition-transform duration-500 fill-current lg:w-6 lg:h-4 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
							</svg>
						</span>
					</Link>
				</div>
				<div className="flex justify-center lg:justify-end lg:items-end lg:w-[40%] lg:mr-10 pb-5 lg:pb-0">
					<img className="h-[10em] lg:h-[13em]" src="/src/assets/images/vendorcta.png" alt="" />
				</div>
			</section>
		</>
	);
};

export default VendorsPage;