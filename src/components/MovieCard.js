import React from 'react'
import { CARD_IMG } from '../utils/constants'

const MovieCard = ({path}) => {
  return (
    <div>
        <div className='w-32'>
            <img  className='w-full bg-cover' src={CARD_IMG + path} alt='thumb'/>
        </div>
    </div>
  )
}

export default MovieCard