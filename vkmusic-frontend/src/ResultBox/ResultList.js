import PlaylistCard from "./Playlist/PlaylistCard";
import MusicCard from "./Music/MusicCard";
import { Card, CardGrid } from "@vkontakte/vkui";
import { Card as Card2 } from "@gravity-ui/uikit";
import './ResultList.css';

const MusicList = (props) => {
    const resultList = props.resultList;
    if (resultList.length === 0) return;
    const type = resultList[0].type;
    const ItemCard = type === 'music' ? MusicCard : PlaylistCard;
    return (
        <div className="container">
            {resultList.map((music, index) => 
            (
                <ItemCard key={index} musicItem={music} />
            )
            )}
        </div>
    );
}

export default MusicList;