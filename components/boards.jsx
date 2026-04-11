import {useState} from  "react"




import {Card} from "./cards.jsx"
import "./boards.css"





export function Board(){
  const cardVal=Array(16).fill("?")

  const [FlippedCards,setFlippedCards]=useState([])




  return(
    <div className="board">
      {cardVal.map((val,index)=>(
        <Card key={index} index={index} flippedcards={FlippedCards} ></Card>
      ))}
    </div>
  )
}