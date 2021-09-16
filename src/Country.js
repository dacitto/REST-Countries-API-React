import useFetch from "./useFetch";
import CountriesInfos from "./CountriesInfos";

  const Country = () => {
  let pageURL = window.location.href;
  let lastURLSegments = pageURL.substr(pageURL.lastIndexOf('/') + 1);
  const {data:countries,isLoading,error}=useFetch("https://restcountries.eu/rest/v2/name/"+lastURLSegments,"countries");
    return ( 
  
    <main>
             {error && <div> {error} </div>}
             {isLoading && <h2>Loading ... </h2>}
             {countries && <CountriesInfos countriesData={countries.filter(country=>country.name==lastURLSegments)}></CountriesInfos>}
    </main>
    
     );
}
 
export default Country;