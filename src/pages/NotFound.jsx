import { useNavigate } from "react-router-dom";

const NotFound = () =>
{
	const navigate = useNavigate();

	return (
		<section className="min-h-[80vh] bg-slate-100 flex flex-col justify-center items-center">
			<h3 className="text-3xl text-brandBlack font-bold">404 Not Found.</h3>
			<button onClick={ () => navigate( -1 ) } className="bg-brandBlack text-white border border-brandBlack hover:bg-white hover:text-brandBlack py-2 px-4 rounded-lg mt-4">Go Back</button>
		</section>
	)
};

export default NotFound;