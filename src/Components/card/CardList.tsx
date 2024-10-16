import Card from "./Card.tsx"
import cardRawData from "../../data.tsx"

export default function CardList() {
    
    const cardData = cardRawData.map((card) =>
        <Card 
            key={card.id}
            {...card}
        />
    )
    
    return (
        <div className="cardList">
            {cardData}
        </div>
    );
}