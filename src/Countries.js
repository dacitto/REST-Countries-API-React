import { Link } from "react-router-dom";
const Countries = (props) => {
    const countries = props.countriesData;
    return ( 
        <main className='contries container'>
            {countries.map((country)=>(
            <>
            <div className="countries-card">
            <Link to={"/country/"+country.name} className='link'>
            </Link>
                <img src={country.flag} alt={country.name + " flag"} className="img-flag"></img>
                <ul className='country-infos'>
                <li><h2 className="name">{country.name}</h2>  </li>
                <li><b>Population: </b>{country.population}  </li>
                <li><b>Region: </b>{country.region}  </li>
                <li><b>Capital: </b>{country.capital}</li>
                </ul>
            </div>
            </>
            ))} 
        </main>
     );
}
 
export default Countries;