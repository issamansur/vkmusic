from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def index():
    return {"message": "Hello World"}

@app.get("/music/{music_id}")
def get_user(music_id: str):
    print(music_id)
    return {"music_id": music_id}