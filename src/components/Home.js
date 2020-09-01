import React from 'react';

//import components
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';


const Home = () => (

  <div>
<HeroImage/>
<SearchBar/>
<Grid/>
<LoadMoreBtn/>
<Spinner/>


  </div>
)


export default Home;
