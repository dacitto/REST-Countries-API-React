import useFetch from "./useFetch";
import CountriesInfos from "./CountriesInfos";

  const Country = () => {
  let pageURL = window.location.href;
  let lastURLSegments = pageURL.substr(pageURL.lastIndexOf('/') + 1);
  const {data:countries,isLoading,error}=useFetch(`https://restcountries.eu/rest/v2/name/${lastURLSegments}?fullText=true`,lastURLSegments);
  console.log("======>"+lastURLSegments)
    return ( 
  
    <main>
             {error && <div> {error} </div>}
             {isLoading && <h2>Loading ... </h2>}
             {countries && <CountriesInfos countries={countries}></CountriesInfos>}
    </main>
    
     );
}
 
export default Country;