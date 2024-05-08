import React from 'react'
import FavImgRes from './FavImgRes'
import './styles/randombreed.css'


function Randombreed({RandomFetchBreed,SetRandomFetchBreed,FavImgSrc,SetFavImgSrc}) {


  
  return (
    <>
        <div id="FavouriteSection" >
          <div className="RandomBreed">Random Breed</div>
          <div
            id="Favourites"
            className="Random-breed"
          >
            {RandomFetchBreed?.map((src) => {
              return (
                <>
                  <div className='Map-Img'>
                    <FavImgRes
                      src={src}
                      RandomFetchBreed={RandomFetchBreed}
                      SetRandomFetchBreed={SetRandomFetchBreed}
                      FavImgSrc={FavImgSrc}
                      SetFavImgSrc={SetFavImgSrc}
                    />
                  </div>
                </>
              );
            })}
            
          </div>
        </div>
    </>
  )
}

export default Randombreed