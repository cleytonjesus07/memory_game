
import CardElement from './CardElement'
export default function GameBoard(props) {    
    return (
        <div id="gameBoard">
            {props.cards.map((card, index) => <CardElement onHandleClick={props.onHandleClick} key={index} card={card}></CardElement>)}
        </div>
    )
}