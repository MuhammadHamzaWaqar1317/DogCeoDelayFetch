import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

import './styles/hersection.css'
//import ListFetch from './ListFetch';

function Herosection({  Img_Src,  FavImgSrc,  SetFavImgSrc,  setDogbreed,  dogbreed, RandomFetchBreed, SetRandomFetchBreed}) {

  const AddtoFavourite = (NewVal) => {
    // console.log(NewVal);
    let arr = [];
    for (let i = 0; i < FavImgSrc.length; i++) {
      if (FavImgSrc[i] == NewVal) {
        return;
      } else {
        arr.push(FavImgSrc[i]);
      }
    }
    arr.push(NewVal);
    SetFavImgSrc(arr);
  };

  const Selectedvalue = (event) => {
    
    setDogbreed(event.target.value);
  };

  const [breedList, setBreedList]=useState(null)
//  console.log({breedList});


  const getAll =useMemo(()=> async()=>{
    try {
        const res = await axios.get('https://dog.ceo/api/breeds/list/all')
        
       const breed = Object.keys(res.data.message)
       
       setBreedList(breed)
       console.log({breedList});
    } catch(err){
        
    }
  },[breedList])

  useEffect(() => {
    
   console.log('API CALLS FETC LIST');
    getAll()
   
   }, [dogbreed]);


   const [listUse,SetlistUse]=useState(true)

   const ListFetch=()=>{
    //console.log('Inside List Fetch');

    

    return(
    <>
    <select
    name=""
    id="dropdown"
    onChange={Selectedvalue}
    className="List"
    >
    {breedList?.map((item)=>{
      
     return <option value={item} key={item} className=""> {item} </option>
    })}
    </select>

    
</>
)
   }



   const RandomFetch=async ()=>{
    try {
      
      const res=await axios.get('https://dog.ceo/api/breeds/image/random')
      
      const arr=[]

      RandomFetchBreed.map((item)=>{
        arr.push(item)
      })

      arr.push(res.data.message)
      SetRandomFetchBreed(arr)
      
      localStorage.setItem("RandomFetchBreed", JSON.stringify(arr))


    } catch (error) {
      
    }

   }

  

  return (
    <>
      <div
        id="heroSection"
        className=""
      >

        <div className="Responsive-Container">
          
          <div className="Gap"></div>
          <img
          src={Img_Src}
          className="Img-hero"
          alt=""
          />

          <h1 className="Text-heading">Find In Interesting Services And buy Now AnyDog</h1>

          <p className="Text-Para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corrupti cupiditate quasi dolorem enim est sint tempora adipisci aliquam,quam quo obcaecati! Esse ipsum quod rem eligendi excepturi maiores accusantium!</p>

          <div className="btn-List-flex">
            <ListFetch />

            <button
              onClick={() => RandomFetch()}
              className="btn-Random-Breed"
            >
              Get Random Breed
            </button>
          </div>
        </div>

        <div className="Regular-Container">

        <div className="Hero-Text-Wrap">
          <div className="Inner-Text-Wrap">
            {/* <div className="Text">Find In Interesting</div>
            <div className="Text">Services And buy</div>
            <div className="Text">Now AnyDog</div>
            <div className="gap"></div> */}
            <h1 className="heading">Find In Interesting Services And buy Now AnyDog</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quos corrupti cupiditate quasi dolorem enim est sint tempora adipisci aliquam,<br /> quam quo obcaecati! Esse ipsum quod rem eligendi excepturi maiores accusantium!</p>
          </div>
          
          <div className="Dropdown-Wrap">

          
          {/* <select
              name=""
              id="dropdown"
              onChange={Selectedvalue}
              className=" w-36 m-5 ml-16 rounded-lg"
            />
            <option value=""  ></option> */}
          {/*  <ListFetch/> */}
          <ListFetch />
          <button
            onClick={() => RandomFetch()}
            className="btn-Random-Breed"
          >
            Get Random Breed
          </button>
          </div>
        </div>

        <img
          src={Img_Src}
          className="Img-hero"
          alt=""
        />
        </div>
      </div>
    </>
  );
}

export default Herosection;
