import {useState,useEffect} from  "react"




import {Card} from "./cards.jsx"
import "./boards.css"


const initialCards = [
  "🍎","🍎","🍌","🍌","🍇","🍇","🍉","🍉",
  "🍒","🍒","🍍","🍍","🥝","🥝","🍑","🍑"
]

const shuffledcards =[...initialCards].sort(()=>Math.random() - 0.5)

export function Board(){  

  const [cardVal ,setCardVal]=useState(
    shuffledcards.map((value,index)=>({
        id:index,
        value:value,
        flipped:false
      }
    ))

  )

  const [FlippedCards,setFlippedCards]=useState([])

  function Clickhandler(index){
      
    if (FlippedCards.length === 2) return
    if (FlippedCards.includes(index)) return
    setFlippedCards([...FlippedCards,index])
  }
  useEffect(()=>{
      if(FlippedCards.length===2){
        const firstcard=cardVal[FlippedCards[0]];
        const secondcard=cardVal[FlippedCards[1]];
        if(firstcard.value===secondcard.value){
        //match
          const newCards=[...cardVal];
          newCards[FlippedCards[0]].flipped=true;
          newCards[FlippedCards[1]].flipped=true;
        }
      }




      setTimeout(()=>{
        setFlippedCards([]);
      },900);
      return()=>{
      
    }
  },[FlippedCards]);



  return(
    <div className="board">
      {cardVal.map((card,index)=>(
        <Card 
          key={card.id}
          index={index}
          flipcheck={card.flipped}
          emoji={card.value}
          flippedcards={FlippedCards}
          click={Clickhandler}
          ></Card>
      ))}
    </div>
  )
}