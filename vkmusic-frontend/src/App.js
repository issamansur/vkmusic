import { Search, 
  View, 
  Panel, 
  PanelHeader,
  CardGrid,
  Card,
  Group,
  Spacing,
  Div
} from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";

import { useState } from 'react';
import axios from 'axios';

import './App.css';
import MusicList from './MusicLists/MusicList';

const api = "https://humble-space-dollop-59xgx6jqgwqhq4-8000.app.github.dev";

function App() {
  const [searchText, setSearchText] = useState('');
  const [musicList, setMusicList] = useState([]);

  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  function searchQuery() {
    axios.get(`${api}/music/${searchText}`
    ).then((response) => {
      console.log(response.data);
      setMusicList(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <View activePanel="card">
        <Panel id="card">
          <PanelHeader>Музыка ВК</PanelHeader>
          <Search 
            placeholder='Поиск по песне или исполнителю...'
            onChange={onChange}
            onFindButtonClick={searchQuery} 
          />
          <MusicList musicList={[]} />
          <Spacing size={16} />
        </Panel>
      </View>
    </div>
  );
}

export default App;
