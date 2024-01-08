import { useState } from 'react';
import axios from 'axios';

import MusicList from './ResultBox/ResultList';
import SearchBox from './SearchBox/SearchBox';

import './App.css';

const api = "http://localhost:8000/api";
const api2 = "https://humble-space-dollop-59xgx6jqgwqhq4-8000.app.github.dev/api";

function App() {
  const [resultList, setResultList] = useState([]);

  function searchQuery(query, type) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Authorization', `VKMusic ${localStorage.getItem('token')}`);
    const token = `VKMusic ${localStorage.getItem('token')}`;

    const types = ['music', 'playlist', 'album'];

    axios.post(`${api2}/search`,
    {
      token: token,
      type_value: types[type - 1],
      query: query,
    },
    {
      headers: headers,
    })
    .then((response) => {
      console.log(response.data);
      if (response.data) {
        const resultListWithTypes = response.data.map(
          item => ({ type: types[type - 1], ...item })
          );
        setResultList(resultListWithTypes);
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <SearchBox onSearch={searchQuery} />
      <MusicList resultList={resultList} />
    </div>
  );
}

export default App;
