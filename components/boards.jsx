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
      setMoves(prev=>prev+1)

      // ❌ NO MATCH
      setTimeout(() => {
        setFlippedCards([])
      }, 900)

    }
  }
}


    




  return(

    <div className="logicBox">
      <div className="moves">Moves: {Moves}</div>
    
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