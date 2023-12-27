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

import './App.css';
import MusicList from './MusicLists/MusicList';


function App() {
  function Search(event) {
    text: str = event.target.value;
    console.log(text);
  }

  return (
    <div className="App">
      <View activePanel="card">
        <Panel id="card">
          <PanelHeader>Музыка ВК</PanelHeader>
          <Search placeholder='Поиск по песне или исполнителю...' onFindButtonClick={Search} />
          <MusicList />
          <Spacing size={16} />
        </Panel>
      </View>
    </div>
  );
}

export default App;
