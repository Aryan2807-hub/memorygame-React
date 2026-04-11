import "./cards.css"
import {useState} from  "react"

export function Card(){
  const [cardstate,setCardstate]=useState(false)
  function handleclick(){
    setCardstate(!cardstate)
  }
  return(
    <div className="card" onClick={handleclick}>
      {cardstate ? "A" : "?"}
    </div>
  )

}




