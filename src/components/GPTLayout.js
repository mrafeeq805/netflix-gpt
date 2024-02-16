import React, { useRef } from 'react'
import OpenAI from 'openai';
import movieSlice from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addDetails, addFive } from '../utils/gptSlice';
import GPTMovieList from './GPTMovieList';



const GPTLayout = () => {
    const search = useRef(null)
    const dispatch = useDispatch()

    const gptResults = useSelector((store) => store.gpt?.gptResults)
    const gptFive = useSelector((store) => store.gpt?.gptFive)
    const openai = new OpenAI({
        apiKey: process.env.OPEN_API_KEY,
        dangerouslyAllowBrowser :true // This is the default and can be omitted
    });
    const searchHandler = async() =>{ 
        const query = "Act as A Movie Recommendation System and suggest some movies for the query : " +search.current.value+". only give me names of 5 movies as comma seperated like Krish 2,Bahubali 1"
        const data = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: query}],
            temperature: 0.7
        
        });
        const gptMovies = data.choices?.[0]?.message?.content.split(",")
        dispatch(addFive(gptMovies))
        const promiseArray = gptMovies.map(movie=>searchMovieTMDB(movie))
        const results = await Promise.all(promiseArray)
        //const finalresult = results.filter(movie=>movie.title in results)
        console.log(results);
        dispatch(addDetails(results))

        
    }
    const searchMovieTMDB = async (movie) =>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS)
        const json = await data.json()
        return json.results
    }
  return (
    <div className="pt-32 h-screen bg-cover bg-black md:bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg)]">
        <div className='bg-black p-3 rounded-md flex w-2/4 gap-4 h-max ml-64 mb-5'>
            <input ref={search} className=' w-full placeholder:text-sm placeholder:pl-5 p-2' placeholder='Search GPT Query ....'/>
            <button onClick={searchHandler} className='bg-red-500 p-1.5 text-white rounded-md text-sm px-5'>
                Search
            </button>
        </div>
        {gptResults && (
            <div className='bg-black flex flex-col p-5 gap-5 bg-opacity-80 rounded-xl'>
                {gptResults.map((movie,index) =><GPTMovieList key={index} title={gptFive[index]} data={movie}/>)}
            </div>
        )}
        
    </div>
  )
}

export default GPTLayout