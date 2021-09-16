const Search = ({setSearch}) => {

    return ( 
        <div className="search container">
            <input type='text' placeholder='Search for country...' className='search-bar' id='search-bar' onChange={(e)=>{setSearch(e.target.value)}}></input>
            <select name="Continent" className='filter'>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
     );
}

export default Search;



