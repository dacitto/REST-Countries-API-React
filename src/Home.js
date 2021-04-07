import useFetch from './useFetch';
import Countries from './Countries';
const Home = () => {
    const {data:countries,isLoading,error} = useFetch("https://restcountries.eu/rest/v2/all");
    return ( 
        <div className="Home">
             {error && <div> {error} </div>}
             {isLoading && <h2>Loading ... </h2>}
             {countries && <Countries countriesData={countries}></Countries>}
           {/*console.log(Countries)*/}
        </div>
     );
}
 
export default Home;