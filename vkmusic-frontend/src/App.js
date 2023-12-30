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

import { Button, TextInput, Select } from "@gravity-ui/uikit";

import { useState } from 'react';
import axios from 'axios';

import MusicList from './MusicLists/MusicList';
import SearchBox from './SearchBox/SearchBox';

import './App.css';

const api = "http://127.0.0.1:8000";

function App() {
  const [searchText, setSearchText] = useState('');
  const [musicList, setMusicList] = useState([]);

  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  function searchQuery() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
  
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');

    axios.get(`${api}/music/${searchText}`,
    {
      headers: headers
    }
    ).then((response) => {
      console.log(response.data);
      setMusicList(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <SearchBox />
      {/*
      <View activePanel="card">
        <Panel id="card">
          <PanelHeader>Музыка ВК</PanelHeader>
          <Search
            placeholder='Поиск по песне или исполнителю...'
            //onChange={onChange}
            onFindButtonClick={searchQuery} 
          />
          <MusicList musicList={[]} />
          <Spacing size={16} />
        </Panel>
      </View>
    */}
    </div>
  );
}

export default App;
