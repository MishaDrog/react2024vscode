
//import { useState } from 'react'  

import './App.css'
import Character from './components/character/Character'
import reactLogo from './assets/react.svg'
import { CHARACTERS } from './components/character/characters'

import './App.css'

function App() {
  
  
  return (
    <>
      <div className='video-container'>


         {
          CHARACTERS.map((character)=>(
            <Character 

            id={character.id} name ={character.name} status={character.status}  species={character.species}  type={character.type}  gender={character.gender} 
            image={character.image} key={character.id}
  
           />

          ))
         }
      
      </div>
    </>
  )
}

export default App;
