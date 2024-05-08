import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Herosection from "./Components/HeroSection";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Favourites from "./Components/Favourites/Favourites";

import Favourite from "./Pages/Favourite";
import Home from "./Pages/Home";
import { Link, Route, Routes } from "react-router-dom";

import FavImgRes from "./Components/FavImgRes";
import axios from "axios";
import Randombreed from "./Components/Randombreed";
import './Styles/app.css'

//import './App.css'

function App() {
  const [dogbreed, setDogbreed] = useState("affenpinscher");
  const [Img_Src, SetImgSrc] = useState("");
  const [FavImgSrc, SetFavImgSrc] = useState([]);
  const [RandomFetchBreed,SetRandomFetchBreed]=useState([])

  const objExport={
    FavImgArr:FavImgSrc,
    SetFavImgSrcArr:SetFavImgSrc
  }

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
  

  return (
    <>

{/* <Link to='/home' state={objExport}>Home</Link> */}
      {/* <div className="Main-Container">
        
        <Navbar/>
        <Herosection Img_Src={Img_Src} FavImgSrc={FavImgSrc} SetFavImgSrc={SetFavImgSrc} setDogbreed={setDogbreed} dogbreed={dogbreed} RandomFetchBreed={RandomFetchBreed} SetRandomFetchBreed={SetRandomFetchBreed}/>
        <Randombreed RandomFetchBreed={RandomFetchBreed} SetRandomFetchBreed={SetRandomFetchBreed} FavImgSrc={FavImgSrc} SetFavImgSrc={SetFavImgSrc}/>
        <div className="m-9" id="Give Gap "></div>
        <div className="flex flex-row pt-32">
        {
          
          FavImgSrc.map((item)=>{
            return(<>
            <img src={item} alt="" className="h-[200px] w-[200px] object-contain"/>
            
            </>)
          })
        }
        </div>
        
      </div> */}

<Routes>
   <Route path="/" element={<Home  />} />
   <Route path="/home" element={<Home  />} />
   <Route path="/fav" element={<Favourite />} />
   
</Routes>



    </>
  );
}

export default App;
