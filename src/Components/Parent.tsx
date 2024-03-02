import { useEffect, useState } from "react";
import Home from "./Home";
import Navbar from "./Navbar";

const Parent = () => {
   const [news ,setNews] = useState([])

   const fetchNewsFromAPI = async()=>{
       try {
         await fetch("https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=5d061b26675545aabaf34fab0ccffdf7")
         .then(res =>res.json())
         .then(json => setNews(json.articles))
           
       } catch (error) {
           console.log(error);
       }


   }
   
   useEffect(()=>{
      fetchNewsFromAPI()
   }, [])

  return (
    <>
      <Navbar />
      <Home  gnews={news}/>
    </>
  );
};

export default Parent;
