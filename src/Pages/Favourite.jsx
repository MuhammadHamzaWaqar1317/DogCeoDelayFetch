import React from 'react'
import {useState, useEffect } from 'react'
import './fav.css'
import { IoIosHeart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Navbar from '../Components/Navbar';

function Favourite() {

    const [FavImgSrc, SetFavImgSrc] = useState([]);
    const [FillHeart,SetFillHeart]=useState(true)
    

    useEffect(()=>{
        const LocalData=JSON.parse(localStorage.getItem('FavImgSrc'))
        console.log('Loaded Favourites Page First time');
        SetFavImgSrc(LocalData)
        console.log(LocalData);
    },[])

    const ToggleDisplay=(src,FavImgSrc,SetFavImgSrc)=>{
        const arr=FavImgSrc.filter(item=> item!=src)
        SetFavImgSrc(arr)
        localStorage.setItem("FavImgSrc",JSON.stringify(arr))
        
        console.log(arr,'Filteretd Arr');
    }

    

  return (
    <>
    
    <div className='Container'>
    <Navbar/>
        <div className='text'>Favourites</div>
        <div className='Flex-main'>
            {FavImgSrc.map((src)=>{
                return(
                <>
                <div className='map-Image'>
                <img src={src} alt="" />
                <div className='Heart'>
                {FillHeart ? <IoIosHeart className='FillHeart' onClick={()=>ToggleDisplay(src,FavImgSrc,SetFavImgSrc)} color='red' size={30}/> :  <FaRegHeart  className='EmptyHeart' onClick={()=>ToggleDisplay(src,FavImgSrc,SetFavImgSrc)} size={30}/>}
                </div>
                </div>
                </>

            )})}
        </div>
    </div>
    </>
  )
}

export default Favourite