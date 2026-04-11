import {Card} from "./cards.jsx"
import "./boards.css"





export function Board(){
  const cardVal=Array(16).fill("?")
  return(
    <div className="board">
      {cardVal.map((val,index)=>(
        <Card key={index}>{val}</Card>
      ))}
    </div>
  )
}