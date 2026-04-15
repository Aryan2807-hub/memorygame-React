import {useState} from  "react"




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

  const winner=cardVal.every(card=>card.flipped)
  const [FlippedCards,setFlippedCards]=useState([]);
  const [Moves , setMoves] = useState(0)

function Clickhandler(index){

  if (FlippedCards.length === 2) return
  if (FlippedCards.includes(index)) return
  
  const newFlipped = [...FlippedCards, index]
  setFlippedCards(newFlipped)
  
  // use NEW array (not old state)
  if(newFlipped.length === 2){
    
    const [firstIndex, secondIndex] = newFlipped
    
    const firstcard = cardVal[firstIndex]
    const secondcard = cardVal[secondIndex]
    
    setMoves(prev=>prev+1)
    if(firstcard.value === secondcard.value){
      
      // ✅ MATCH
      setCardVal(prev => {
        const newcards = [...prev]
        newcards[firstIndex].flipped = true
        newcards[secondIndex].flipped = true
        return newcards
      })

      setFlippedCards([])

    } else {
      


      // ❌ NO MATCH
      setTimeout(() => {
        setFlippedCards([])
      }, 900)

    }

  }
  

  }
  
  
  function restartGame(){
  const reshuffled = [...initialCards].sort(() => Math.random() - 0.5)

  const newCards = reshuffled.map((value, index) => ({
    id: index,
    value: value,
    flipped: false
  }))

  setCardVal(newCards)
  setFlippedCards([])
  setMoves(0)
}







  return(

    <div className="logicBox">
      <div className="moves">Moves: {Moves}</div>
      {winner && <div className="winner">You Win!</div>}
      <button onClick={restartGame}>Restart</button>
    
        <div className="board">

          {cardVal.map((card,index)=>(
            <Card 
            key={card.id}
            flippedcards={FlippedCards}
            click={Clickhandler}
            cardobj={card}
            index={index}
            />
          ))}
        </div>
    
    </div>
  )
}