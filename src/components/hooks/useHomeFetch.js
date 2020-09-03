import { useState, useEffect} from 'react';
import {SEARCH_BASE_URL, POPULAR_BASE_URL,} from '../../config';

export const UseHomeFetch = () => {
  //states
  const [state, setState] = useState({movies:[] });
  const [loading, setLoading] = useState(false);
  const[error, setError] = useState(false);



  //async
  const fetchMovies = async endpoint =>{
   setError(false);
   setLoading(true);

//search for page string
const isLoadMore = endpoint.search('page');

   try{

     const result = await (await fetch(endpoint)).json();//parse the data, await1- get data, await2.parses
     console.log(result);
     setState( prev =>({
       ...prev,
       movies:
       isLoadMore !== -1
        ? [...prev.movies, ...result.results]
        : [...result.results],
       heroImage: prev.heroImage || result.results[0], // OR // stop is first value true, otherwise go to the next value
       currentPage: result.page,
       totalPages: result.total_pages
     }));


   }
   catch (error){
      setError(true);
      console.log(error);
   }
   setLoading(false);
  }

  //useEffect hook - when something changes
  useEffect(() => {
   fetchMovies(POPULAR_BASE_URL);
  }, [])




return [{state, loading, error}, fetchMovies];
}
