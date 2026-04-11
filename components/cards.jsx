import "./cards.css"
import {useState} from  "react"

export function Card({index,flippedcards}){

  return(
    <div className="card" >
      {flippedcards.includes(index) ? "A" : "?"}
    </div>
  )

}




