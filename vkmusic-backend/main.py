import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from vkpymusic import ServiceAsync

# Create a FastAPI instance and configure CORS
app = FastAPI()
origins = [
    "http://localhost:3000",  # Разрешить CORS для этого домена
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create a ServiceAsync instance and configure it
TOKEN = os.environ.get("VK_TOKEN")
def init_service():
    pass
    


@app.get("/")
def index():
    return {"message": "Hello World"}


@app.get("/music/{music_id}")
def get_user(music_id: str):
    print(music_id)
    return {"music_id": music_id}