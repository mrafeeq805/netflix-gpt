
import useGetMovieDetails from "../hooks/useGetMovieDetails";
import useGetTrailer from "../hooks/useGetTrailer";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";

const Browse = () => {
    useGetMovieDetails();
    //useGetTrailer()
	return (
		<div>
			<Header />
            <MainContainer/>
            <SecondContainer/>
		</div>
	);
};

export default Browse;
