import GameOver from './components/GameOver';
import { useEffect, useRef, useState } from 'react';
import GameBoard from './components/GameBoard';
import game from './game/game';

export default function MemoryGame() {
    const [cards, setCards] = useState([])
    const [gameOver, setGameOver] = useState(false);
    const [count, setCount] = useState(0);
    const [ranking, setRanking] = useState([]);
    const inicializarGame = () => setCards(game.createCardsFromTechs());
    const [seeRanking, setSeeRanking] = useState(false);
    let player = useRef("");
    useEffect(() => {

        player.current = prompt("Insira o seu nome: ");
        while (player.current === "" || player.current === null) {
            player.current = prompt("Insira o seu nome: ");
        }

        (localStorage.getItem("lista") !== null) ? setRanking(JSON.parse(localStorage.getItem("lista"))) : setRanking([]);

        if (player.current !== "" || player.current !== null) {

            inicializarGame()
        }
    }, [])

    function restart() {
        setGameOver(false);
        setCount(0)
        inicializarGame()
    }
    function onHandleClick(card) {
        const updateCards = () => setCards([...game.cards]);
        const updateCounter = () => setCount((currentCount) => currentCount = currentCount + 1);
        game.flipCard(card.id,
            () => {
                const playerModel = {
                    nome: player.current,
                    tentativas: count
                }
                setRanking([...ranking, playerModel])
                localStorage.setItem("lista", JSON.stringify([...ranking, playerModel]))
                setGameOver(true);
            },
            () => {
                updateCards()
            }, updateCounter)

        updateCards()
    }

    function handleCloseRanking(){
        setSeeRanking(false);
    }
    return (
        <div>
            <Counter count={count} setSeeRanking={setSeeRanking} />

            <GameBoard onHandleClick={onHandleClick} cards={cards}></GameBoard>
            <GameOver show={gameOver} handleRestart={restart} handleCloseRanking={handleCloseRanking} ranking={ranking} seeRanking={seeRanking}></GameOver>
        </div>
    )
}

function Counter(props) {
    return (
        <div className="counter_container">
            <button onClick={()=>props.setSeeRanking(true)} className="ranking_button"><h4>Tabela de ranking</h4></button>
            <div className="counter">
                <div className="counter_title"><h3>Tentativas:</h3></div>

                <div className="counter_number">{props.count}</div>
            </div>

        </div>
    )
}

