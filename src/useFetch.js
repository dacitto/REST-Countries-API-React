import {useState,useEffect}  from 'react';

const useFetch = (url,name) => {
    
    const [data,setData] = useState(null);
    const [isLoading,setIsLoading]= useState(true);
    const [error,setError]=useState(null);

  
    useEffect(()=>{
      if(localStorage.getItem(name)){
        setData(JSON.parse(localStorage.getItem(name)));
        setIsLoading(false);
        setError(null);
        console.log("from local storage");
        return{data,isLoading,error};
      }
      const abortCont = new AbortController();
        fetch(url,{signal: abortCont.signal})
        .then(res =>{
          if(!res.ok){
            throw Error("cant fetch the Data");
          }
          return res.json();
        })
        .then(data => {

            setData(data);
            setIsLoading(false);
            setError(null);
            localStorage.setItem(name,JSON.stringify(data));
          
        })
        .catch(err=>{
          if(err.name==='AbortError'){
            console.log('fetch aborted');
          }else{
            setIsLoading(false);
            setError(err.message);
          }
        });
        return () => abortCont.abort();
      },[url]);

         return{data,isLoading,error};
  }

  export default useFetch;
  