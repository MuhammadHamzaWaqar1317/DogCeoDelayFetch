import React, { useState } from 'react'
import { IoIosHeart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import './styles/favImgRes.css'

const DeleteFav=(src,RandomFetchBreed,SetRandomFetchBreed)=>{
  

  let arr=RandomFetchBreed.filter(item=> item!=src)
  
  

  SetRandomFetchBreed(arr)
}

const RemoveFromFav=(src,FavImgSrc,SetFavImgSrc,SetDisplayMsg)=>{
  let arr=FavImgSrc.filter(item=> item!=src)
  SetFavImgSrc(arr)
  localStorage.setItem("FavImgSrc", JSON.stringify(arr));
   
  SetDisplayMsg('Add to Favourite')

  console.log('Removed Fav Arr',arr);
}

const FavImgRes = ({src,RandomFetchBreed,SetRandomFetchBreed,FavImgSrc,SetFavImgSrc}) => {

  const [DisplayMsg,SetDisplayMsg]=useState('Add to Favourite')

  const AddFav=(src,FavImgSrc,SetFavImgSrc)=>{

    console.log('In ADD FAV',FavImgSrc);

    const arr=[]
    for (let i = 0; i < FavImgSrc.length; i++) {
     if (FavImgSrc[i]==src) {
      RemoveFromFav(src,FavImgSrc,SetFavImgSrc,SetDisplayMsg)
      console.log('Issue here');
       return
     }
     arr.push(FavImgSrc[i])
    }
 
    arr.push(src)
    console.log('Fav Arr',arr);
    localStorage.setItem("FavImgSrc", JSON.stringify(arr));
   
    SetFavImgSrc(arr)
 }

 const [EmptyHeart,SetEmptyHeart]=useState(true)
 const [FillHeart,SetFillHeart]=useState(false)
 
 const ToggleDisplay=(src,FavImgSrc,SetFavImgSrc)=>{
  SetEmptyHeart(!EmptyHeart)
  SetFillHeart(!FillHeart)
  AddFav(src,FavImgSrc,SetFavImgSrc)
 }

 const DisLike=()=>{

 }

 

  return (
    <>
    <div className='main-Fav-Img-Res'>
    <img src={src} alt="" className='Img'/>
    <div className='Heart-Icon'>
        {FillHeart ? <IoIosHeart className='FillHeart' onClick={()=>ToggleDisplay(src,FavImgSrc,SetFavImgSrc)} color='red' size={30}/> :  <FaRegHeart  className='EmptyHeart' onClick={()=>ToggleDisplay(src,FavImgSrc,SetFavImgSrc)} color='red' size={30}/>}
    {/* {FillHeart && } */}
    
    </div>
    {/* <button onClick={()=>AddFav(src,FavImgSrc,SetFavImgSrc)} className='bg-purple-600 rounded-full text-white hover:bg-purple-700 w-52'>{DisplayMsg}</button>
    */} </div>
    </>
  )
}

export default FavImgRes

