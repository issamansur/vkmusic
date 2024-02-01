import PlaylistCard from "./Playlist/PlaylistCard";
import MusicCard from "./Music/MusicCard";
import { Card, CardGrid } from "@vkontakte/vkui";
import {  } from "@gravity-ui/uikit";

const MusicList = (props) => {
    const resultList = props.resultList;
    const type = resultList[0].type;
    const ItemCard = type === 'music' ? MusicCard : PlaylistCard;
    const cardSize = type === 'music' ? 'l' : 's';
    return (
        <CardGrid size={cardSize} spaced={true}>
            {resultList.map((music, index) => 
            (
                <Card key={index} mode="shadow">
                    <ItemCard musicItem={music} />
                </Card>
            )
            )}
        </CardGrid>
    );
    
    return (
        <CardGrid size="l" spaced={true}>
            {resultList.map((music, index) => {
                console.log(music);
                if (music.type === 'music')
                    return (
                        <Card key={index} mode="shadow">
                            <MusicCard musicItem={music} />
                        </Card>
                    )
                else 
                    return (
                        <Card key={index} mode="shadow">
                            <PlaylistCard musicItem={music} />
                        </Card>
                    )
                })
        }
      </CardGrid>
    );
}

export default MusicList;