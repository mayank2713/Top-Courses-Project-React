import React, { useState, useEffect } from "react";
import { apiUrl ,filterData } from "./data.js";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import Filter from "./components/Filter";


const App = ({filterdata}) => {

  const[courses,setCourses]=useState(null);
  const[loading,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title)

   async function fetchData(){
    setLoading(true);
    try{
      let response= await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
      console.log(output.data);

    }
    catch(e){
      console.log("Kuch toh gadbad h daya");
    }
    setLoading(false);

     
   }
   useEffect(()=>{
    fetchData()
   },[]);



  return(
    <div className="min-h-screen flex flex-col bg-bgDark2 ">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="bg-bgDark2">
        <div>
        <Filter filterData ={filterData} category={category} setCategory={setCategory}></Filter>
        </div>
        <div lassName="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading?(<Spinner/>):(<Cards courses ={courses} category={category} setCategory={setCategory}/>)
        }
        </div>


      </div>
     

    </div>

  )
 

  
};

export default App;

