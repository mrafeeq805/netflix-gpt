
import useGetMovieDetails from "../hooks/useGetMovieDetails";
import useGetTrailer from "../hooks/useGetTrailer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";

const Browse = () => {
    useGetMovieDetails();
    usePopularMovies()
	useTopRatedMovies()
	useUpcomingMovies()
	return (
		<div>
			<Header />
            <MainContainer/>
            <SecondContainer/>
		</div>
	);
};

export default Browse;
