import { Link } from "react-router-dom";
const CountriesInfos = (props) => {
    const countries = props.countriesData;
    console.log(countries);
    return ( 
        <main className='container'>
            {countries.map((country)=>(
            <>
            
            <main className="country-info">
            <Link to='/' className='btn link'>Back</Link>
                <img src={country.flag} alt={country.name + " flag"} className="img-flag col"></img>
                <div className='col info-grid'>
                <h1 className='row'>{country.name}</h1>
                <ul className="info-list">
                    <li><b>native name:</b> {country.nativeName}</li>
                    <li><b>population:</b> {country.population}</li>
                    <li><b>sub region:</b> {country.subregion}</li>
                    <li><b>capital:</b> {country.capital}</li>
                </ul>

                <ul className="info-list">
                    <li><b>top level domain:</b><span className="domain-name"> {country.topLevelDomain}</span></li>
                    <li><b>currencies:</b> { country.currencies.map((cur)=>(
                        <>  
                        {<span className='currencies'>{cur.name}</span>}
                        </>
                    ))}</li>
                    <li><b>languages:</b> { country.languages.map((language)=>(
                        <span className="language">
                        {language.name} 
                        </span>  
                    ))}</li>
                </ul>
               <div className="border-countries"><b>border countries: </b>  { country.borders.map((border)=>(
                        <span className="border btn">
                        {border} 
                        </span>  
                    ))}</div>
                </div>
                
            </main>
            </>
            ))} 
        </main>
     );
}
 
export default CountriesInfos;