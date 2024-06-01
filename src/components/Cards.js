import React, { useState } from "react";
import Card from "./Card";
const Cards=(props)=>{


    let courses = props.courses;
    let category =props.category;
    let setCategory=props.setCategory;

    const[likedCourses,setLikedCourses]=useState([]);
  

      function getCourses(){

        if(category=="All"){
            let allCourse=[];
            Object.values(courses).forEach((array)=>{
                array.forEach((courseData)=>{
                    allCourse.push(courseData);
                })
            })
            return allCourse;

        }
        else{
            return courses[category];
        }
           
    
        }
  

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-1">
            {
                getCourses().map((course)=>{
                    return <Card key ={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                 })
            }

        </div>
    )



}



export default Cards;
