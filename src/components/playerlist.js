import Player from './player'
import playersData from '../res/playersData'

const Playerlist = () => {
    return (
        <div className='Edit'>
           
            {/* <Player 
                Name={playersData[0].Name} 
                Source={playersData[0].Source} 
                Club={playersData[0].Club} 
                Price={playersData[0].Price}
            />
            <Player 
                Name={playersData[1].Name} 
                Source={playersData[1].Source} 
                Club={playersData[1].Club} 
                Price={playersData[1].Price}
            />
            <Player 
                Name={playersData[2].Name} 
                Source={playersData[2].Source} 
                Club={playersData[2].Club} 
                Price={playersData[2].Price}
            />
            <Player 
                Name={playersData[3].Name} 
                Source={playersData[3].Source} 
                Club={playersData[3].Club} 
                Price={playersData[3].Price}
            /> */}
            {playersData.map((player)=>(
                <Player Name={player.Name} Source={player.Source} Club={player.Club} Price={player.Price} />
            ))}
        </div>
    );
}

export default Playerlist;
