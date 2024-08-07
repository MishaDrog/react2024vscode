import { useState } from "react";




function Character ({id,name,status,species,type,gender,image}) {
    
    const [likesCount,setlikesCount] = useState (0)

    console.log(name);

    const increaseLikesByOne = () => {
        setlikesCount(likesCount +1)
        console.log(name, likesCount);
    }


    return (

        <div className='video'>
        
            <br />
            <p>{id}</p>
            <h2>{name}</h2>
            <p>{status}</p>
            <p>{species}</p>
            <p>{type}</p>
            <p>{gender}</p>
            <img src={image} alt="character image" />

            <div className='video-footer'>

                <p>Likes: {likesCount}</p>
                <button onClick={increaseLikesByOne}>Like</button>
            </div>


        </div>
      
    )

};


export default Character;