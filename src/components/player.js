const Player = (props) => {
    return (
        <>
            <img src={props.Source} alt={props.Name}/>
            <h1>{props.Name}</h1>
            <h2>{props.Club}</h2>
            <h3>{props.Price}$</h3>
        </>
    )
}

export default Player;