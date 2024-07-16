import React from 'react'
import Button from './Button'

const buttonList = ["All", "Cooking", "News", "Sports", "Music", "Anime", "Cricket", "Kpop", "Bollywood", "UPSC", "Dance", "Movies", "Choreography", "Photos"];

const ButtonList = () => {
  return (
    <div className="flex">
        {buttonList.map((button) => {
           return <Button name={button}/>
        })}
    </div>
  )
}

export default ButtonList