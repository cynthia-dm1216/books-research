import React from 'react';
import SearchCard from '../components/SearchCard';
import ResultContainer from '../components/ResultContainer';

function SearchBar() {
    return(
        <div>
            <SearchCard />
            <ResultContainer />
        </div>
    );
}

export default SearchBar;