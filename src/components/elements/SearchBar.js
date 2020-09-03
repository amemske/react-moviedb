import React, { useState, useRef } from 'react';
import FontAwesome from 'react-fontawesome';

import {
    StyledSearchBar,
     StyledSearchBarContent
    } from '../styles/StyledSearchBar';

    const SearchBar = ({ callback}) => {
    //we are creating a local state
const [state, setState] = useState('');
const timeOut = useRef(null);



const doSearch = event => {
    const {value} = event.target;
    

    clearTimeout(timeOut.current);
    setState(value);

//mutate values and keep it between renders, also hault the search for 5 sec before you enrter the value
timeOut.current = setTimeout(() => {
callback(value);
}, 500);
}




return(
    <StyledSearchBar>
        <StyledSearchBarContent>
            <FontAwesome className="fa-search" name="search" size="2x"/>

            <input type="text" placeholder="Search Movie" onChange={doSearch} value={state} />

        </StyledSearchBarContent>

    </StyledSearchBar>

)
}
export default SearchBar;
