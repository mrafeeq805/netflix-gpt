
import useGetMovieDetails from "../hooks/useGetMovieDetails";
import Header from "./Header";

const Browse = () => {
    useGetMovieDetails();
	return (
		<div>
			<Header />
		</div>
	);
};

export default Browse;
