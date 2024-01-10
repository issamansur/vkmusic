const API = "http://localhost:8000/api";
const API_GH = "https://humble-space-dollop-59xgx6jqgwqhq4-8000.app.github.dev/api";

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'http://localhost:3000',
  'Access-Control-Allow-Credentials': 'true',
};

const TYPES = ['music', 'playlist', 'album'];

export { API, API_GH, HEADERS, TYPES };