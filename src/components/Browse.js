
import { useSelector } from "react-redux";
import useGetMovieDetails from "../hooks/useGetMovieDetails";
import useGetTrailer from "../hooks/useGetTrailer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTLayout from "./GPTLayout";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";

const Browse = () => {
	const toggle = useSelector((store) => store.gpt?.gptPageToggle)
    useGetMovieDetails();
    usePopularMovies()
	useTopRatedMovies()
	useUpcomingMovies()
	return (
		<div className="h-screen">
			<Header />
			{toggle ? (
				<GPTLayout/>
			): (
			<>
				<MainContainer/>
            	<SecondContainer/>
			</>

			)}

		</div>
	);
};

export default Browse;
