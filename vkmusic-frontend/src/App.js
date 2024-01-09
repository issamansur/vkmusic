import { useState, useEffect } from 'react';

import axios from 'axios';
import { useToaster } from '@gravity-ui/uikit';

import MusicList from './ResultBox/ResultList';
import SearchBox from './SearchBox/SearchBox';

import useToasterNotifications from './Notifications/TokenNotFoundNotification';

import './App.css';

const api = "http://localhost:8000/api";
const api2 = "https://humble-space-dollop-59xgx6jqgwqhq4-8000.app.github.dev/api";

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'http://localhost:3000',
  'Access-Control-Allow-Credentials': 'true',
};

const TYPES = ['music', 'playlist', 'album'];


function App() {
  const { add } = useToaster();
  const {isCanToSearch, setCanToSearch} = useState(false);
  const [resultList, setResultList] = useState([]);

  function checkAndGetToken() {
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    } else {
      showTokenNotFoundError();
      return null;
    }
  }

  const { showTokenNotFoundError } = useToasterNotifications();

  function searchQuery(query, type) {
    let token = checkAndGetToken();
    if (token) {
      token = `VKMusic ${token}`;
    } else {
      showTokenNotFoundError();
      return;
    }

    /*
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Authorization', `VKMusic ${localStorage.getItem('token')}`);
    */
    let headers = HEADERS;
    axios.post(`${api2}/search`,
    {
      token: token,
      type_value: TYPES[type - 1],
      query: query,
    },
    {
      headers: headers,
    })
    .then((response) => {
      if (response.data) {
        console.log(response.data);
        const resultListWithTypes = response.data.map(
          item => ({ type: TYPES[type - 1], ...item })
          );
        setResultList(resultListWithTypes);
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    checkAndGetToken();
  }, []);

  return (
    <div className="App">
      <SearchBox onSearch={searchQuery} />
      <MusicList resultList={resultList} />
    </div>
  );
}

export default App;
