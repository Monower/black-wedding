import Select from 'react-select';

const SearchForm = () =>
{
	const options = [
		{ value: "rentals", label: "Rentals" },
		{ value: "venues", label: "Venues" },
		{ value: "full-package", label: "Full Package" },
	]
	
	return (
		<form className="bg-white flex flex-col lg:flex-row gap-4 items-center rounded-lg lg:w-[45vw]">
			<fieldset className="w-full px-4 border-r h-full">
				<legend>
					<label
						htmlFor="category"
						className="text-xs lg:text-sm text-brandBlack"
					>
						Category
					</label>
				</legend>
				<Select
					styles={{
						control: ( base ) => ({
							...base,
							border: "none"
						}),
					}}
					options={options}
					placeholder="Rentals"
					className="w-full bg-white cursor-pointer text-base lg:text-xl text-brandBlack focus:outline-none focus:ring-0 h-10"
				/>
			</fieldset>
			<fieldset className="w-full px-2">
				<legend>
					<label
						htmlFor="location"
						className="text-xs lg:text-sm text-brandBlack"
					>
						Location
					</label>
				</legend>
				<input
					type="text"
					name="location"
					id="location"
					placeholder="New York, NY"
					className="w-full bg-white focus:outline-none focus:ring-0 text-base lg:text-xl text-brandBlack h-10"
				/>
			</fieldset>
			<button className="bg-[#BC7155] w-full lg:w-[30%] p-1 lg:p-6 rounded-b-lg lg:rounded-l-none lg:rounded-r-lg flex items-center justify-center">
				<svg
					className="fill-white h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
				</svg>
			</button>
		</form>
	);
};

export default SearchForm;
