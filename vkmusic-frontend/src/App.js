import { useState, useEffect } from 'react';

import axios from 'axios';
import { Modal } from '@gravity-ui/uikit';

import MusicList from './ResultBox/ResultList';
import SearchBox from './SearchBox/SearchBox';
import AuthToken from './AuthBox/AuthToken';

import useNotifications from './Notifications/TokenNotification';

import { API, API_GH, HEADERS, TYPES } from './config';

import './App.css';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [resultList, setResultList] = useState([]);
  const {
    showTokenNotFound,
    showTokenFormatInvalid,
    showTokenExpired, 
    } = useNotifications(onAuth);
  
  function onAuth() {
    setIsAuth(true);
    console.log('onAuth');
  }
  
  function checkAndGetToken() {
    const token = localStorage.getItem('token');
    
    if (!token) {
      showTokenNotFound();
      return;
    }
    
    if (!token.startsWith('VKMusic ')) {
      showTokenFormatInvalid();
      return;
    }

    axios.post(`${API_GH}/validate`, {
      token: token,
    }, 
    {
      headers: HEADERS,
    }).then((response) => {
      if (response.data) {
        console.log(response.data);
      }
      else {
        showTokenExpired();
        return;
      }
    }).catch((error) => {
      console.log(error);
    });

    return token;
  }


  function searchQuery(query, type) {
    let token = checkAndGetToken();
    if (!token) {
      return;
    }
    let headers = HEADERS;
    axios.post(`${API_GH}/search`,
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
      <Modal open={isAuth} onClose={() => setIsAuth(false)}>
        <AuthToken />
      </Modal>
    </div>
  );
}

export default App;
