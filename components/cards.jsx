import "./cards.css"

export function Card({ index, flippedcards, click, cardobj }) {

  const isVisible =
    flippedcards.includes(index) || cardobj.flipped

  return(
    <div className="card" onClick={() => click(index)}>
      {isVisible ? cardobj.value : ""}
    </div>
  )
}