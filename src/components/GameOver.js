import Ranking from './TabelaElement'
export default function GameOver(props) {
    if (props.seeRanking) {
        return tableRanking(props)
    }
    return gameOverScreen(props)
}

const gameOverScreen = (props) => {
    if (props.show) {
        return (<div id="gameOver">
            <div>
                Parabéns, você completou o jogo!
            </div>
            <Ranking ranking={props.ranking} />
            <button id="restart" onClick={props.handleRestart} >Jogue novamente</button>
        </div>)
    }
    return <></>;
}

const tableRanking = (props) => {


    return (
        <div onClick={props.handleCloseRanking} id="gameOver">
            <Ranking ranking={props.ranking} />
            <div>
                <h6>Clique para fechar a tabela de Ranking. :D</h6>
            </div>
        </div>
    )
}

