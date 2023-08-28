import MusicCard from "../MusicCards/MusicCard";
import { Card, CardGrid } from "@vkontakte/vkui";

const MusicList = (props) => {
    const musicList = props.musicList;
    
    return (
        <CardGrid size="s" spaced={true}>
            {musicList.map((music) => (
                <Card size="l" mode="shadow">
                    <MusicCard musicItem={music} />
                </Card>
            ))}
      </CardGrid>
    );
}

export default MusicList;