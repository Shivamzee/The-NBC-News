import { useEffect, useState } from "react";
import Home from "./Home";
import Navbar from "./Navbar";

const Parent = () => {
   const [news ,setNews] = useState([]);
   const [newsCategory , setNewsCategory] = useState("")

   const fetchNewsFromAPI = async()=>{
       try {
         await fetch(`https://newsapi.org/v2/everything?q=${newsCategory ? newsCategory:"business" }&sortBy=popularity&apiKey=5d061b26675545aabaf34fab0ccffdf7`)
         .then(res =>res.json())
         .then(json => setNews(json.articles))
           
       } catch (error) {
           console.log(error);
       }


   }
   
   useEffect(()=>{
      fetchNewsFromAPI()
   }, [newsCategory])

  return (
    <>
      <Navbar setNewsCategory={setNewsCategory}/>
      <Home  gnews={news}/>
    </>
  );
};

export default Parent;
