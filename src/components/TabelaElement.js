export default function Tabela(props) {
    const lista = props.ranking;
    if (lista.length !== 0) {
        lista.sort((prev, next) => prev.tentativas < next.tentativas ? -1 : true)
        return (
            <>
                <h6>Ranking</h6>
                <ol className="ranking_table">
                    {lista.map((player, index) => {
                        return ListItem(player, index)
                    })}
                </ol>
            </>
        )
    } else {
        return (
            <>
                <h6>Ranking</h6>
                <ol style={{"textAlign":"center","fontSize": "3vh"}}>
                    <h6>Ainda não há participantes</h6>
                </ol>
            </>
        )
    }

}

function ListItem(player, index) {
    return (
        <li key={index}>
            <div>
               <p> {index = index + 1} - Nome: {player.nome}</p>
            </div>
            <div>
                <p>Tentativas: {player.tentativas}</p>
            </div>
        </li>
    )
}