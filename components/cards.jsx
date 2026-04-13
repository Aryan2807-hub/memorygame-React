import "./cards.css"


export function Card({index,flippedcards,click,emoji}){
  

  return(
    <div className="card" 
   onClick={()=>click(index)} >
      {flippedcards.includes(index) ? emoji : ""}
    </div>
  )

}




