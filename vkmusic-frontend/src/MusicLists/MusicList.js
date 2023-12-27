import MusicCard from "../MusicCards/MusicCard";
import { Card, CardGrid } from "@vkontakte/vkui";

const MusicList = ({ props }) => {
    const { musicList } = props;
    
    return (
        <CardGrid size="s" spaced={true}>
            {musicList.map((music) => (
                <Card size="l" mode="shadow">
                    <MusicCard music={music} />
                </Card>
            ))}
      </CardGrid>
    );
}

export default MusicList;