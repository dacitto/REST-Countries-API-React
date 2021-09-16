import useFetch from './useFetch';
import Countries from './Countries';
const Home = ({filter}) => {
  
    const link ="https://restcountries.eu/rest/v2/all";
    const {data:countries,isLoading,error}=useFetch(link,'countries');
    return ( 
        <div className="Home">
             {error && <div> {error} </div>}
             {isLoading && <h2>Loading ... </h2>}
            
             {countries && <Countries countries={countries.filter(country=>country.name.toLowerCase().includes(filter.toLowerCase()))}></Countries>}

           {/*console.log(Countries)*/}
        </div>
     );
}
 
export default Home;