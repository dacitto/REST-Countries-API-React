import { Link } from "react-router-dom";
const Countries = (props) => {
    const countries = props.countriesData;
    return ( 
        <div className='contries container'>
            {countries.map((country)=>(
            <Link to={"/country/"+country.id}>
            <div className="countries-card">
                <img src={country.flag} className="img-flag"></img>
                <h2>{country.name}</h2>
                <h3><b>Population: </b>{country.population}</h3>
                <h3><b>Region: </b>{country.region}</h3>
                <h3><b>Capital: </b>{country.capital}</h3>
            </div>
            </Link>
            ))} 
        </div>
     );
}
 
export default Countries;