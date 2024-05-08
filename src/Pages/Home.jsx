import React from 'react'
import { useState,useEffect } from 'react';
import Herosection from '../Components/HeroSection';
import Navbar from '../Components/Navbar';
import Randombreed from '../Components/Randombreed';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { Link, Route, Routes } from "react-router-dom";

function Home() {
    const [dogbreed, setDogbreed] = useState("affenpinscher");
    const [Img_Src, SetImgSrc] = useState("https://images.dog.ceo/breeds/schnauzer-giant/n02097130_1438.jpg");
    const [FavImgSrc, SetFavImgSrc] = useState([]);
    const [RandomFetchBreed,SetRandomFetchBreed]=useState([])
    
    
    //ListFetch();
  
      const getRandomBreed = async (DogBreed) => {
      
      try {
        const res = await axios.get(
          `https://dog.ceo/api/breed/${DogBreed}/images/random`
        );
        
        SetImgSrc(res.data.message)
      } catch (err) {
        console.error({ err });
      }
    };
  
   
  
    useEffect(() => {
      let interval = setInterval(() => {
        
        getRandomBreed(dogbreed)
        
      }, 5000);
      return () => {
        clearInterval(interval);
      };
    }, [dogbreed]);  

    useEffect(()=>{
        const arr=[]
       // localStorage.setItem("RandomFetchBreed",JSON.stringify(arr))
        const RandomFetchBreedArr = JSON.parse(localStorage.getItem("RandomFetchBreed"))
        const FavImgSrcArr=JSON.parse(localStorage.getItem('FavImgSrc'))
        console.log(RandomFetchBreedArr);
        SetRandomFetchBreed(RandomFetchBreedArr)
        SetFavImgSrc(FavImgSrcArr)
    },[])
    
    console.log(RandomFetchBreed);
  
    return (
      <>
        <div className="Main-Container">
          
          <Navbar/>
          <Herosection Img_Src={Img_Src} FavImgSrc={FavImgSrc} SetFavImgSrc={SetFavImgSrc} setDogbreed={setDogbreed} dogbreed={dogbreed} RandomFetchBreed={RandomFetchBreed} SetRandomFetchBreed={SetRandomFetchBreed}/>
          <Randombreed RandomFetchBreed={RandomFetchBreed} SetRandomFetchBreed={SetRandomFetchBreed} FavImgSrc={FavImgSrc} SetFavImgSrc={SetFavImgSrc}/>
          <div className="m-9" id="Give Gap "></div>
          <div className="flex flex-row pt-32">
          {/* {
            
            FavImgSrc.map((item)=>{
              return(<>
              <img src={item} alt="" className="h-[200px] w-[200px] object-contain"/>
              
              </>)
            })
          } */}
          </div>
          
        </div>
  
  
        
  
  
      </>
    );
}

export default Home