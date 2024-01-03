from enum import Enum
from typing import List, Union

from fastapi import FastAPI, Header
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import HTTPException
from fastapi.param_functions import Depends, Query
from pydantic import BaseModel

from vkpymusic import clients, Service, ServiceAsync
from vkpymusic.models import Song, Playlist


# Create a FastAPI instance and configure CORS
app = FastAPI()
origins = [
    "http://localhost",
    "https://localhost",
    "http://localhost:3000",
    "https://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

'''
@app.middleware("http")
async def log_requests(request, call_next):
    response = await call_next(request)
    print("Request method:", request.method)
    print("Request path:", request.url.path)
    print("Request headers:", request.headers)
    print("Response status code:", response.status_code)
    print("Response headers:", response.headers)
    return response
'''


@app.get("/")
def index():
    return {"message": "Hello World"}


class SearchType(str, Enum):
    music = "music"
    album = "album"
    playlist = "playlist"


class SearchRequest(BaseModel):
    token: str
    type_value: SearchType
    query: str

def validate_token(token: str = Header(...)):
    if not token.startswith('VKMusic '):
        raise HTTPException(status_code=400, detail="Token is required.")
    else:
        token = token[8:]
        print(token)

    service: ServiceAsync = Service(
        clients['Kate'].user_agent,
        token
        )
    if service.check_token() is False:
        raise HTTPException(status_code=400, detail="Invalid token.")
    return token


@app.post("/api/search")
def search_music(search_request: SearchRequest):
    token: str = search_request.token
    type_value: SearchType = search_request.type_value
    query: str = search_request.query

    if not token.startswith('VKMusic '):
        raise HTTPException(status_code=400, detail="Token is required.")
    else:
        token = token[8:]
        print(token)

    service: ServiceAsync = Service(
        clients['Kate'].user_agent,
        token
        )
    if service.check_token() is False:
        raise HTTPException(status_code=400, detail="Invalid token.")

    if not len(query) in range(1, 30):
        raise HTTPException(status_code=400, detail="Query is required.")

    result: List[Union[Song, Playlist]]
    if type_value == SearchType.music:
        result = service.search_songs_by_text(
            query, 20,
            )
    elif type_value == SearchType.album:
        result = service.search_albums_by_text(
            query, 12,
            )
    elif type_value == SearchType.playlist:
        result = service.search_playlists_by_text(
            query, 12,
            )

    return result
