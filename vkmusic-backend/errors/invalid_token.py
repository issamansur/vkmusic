from fastapi import HTTPException
from starlette.responses import JSONResponse # or FastAPI's Response

class InvalidTokenError(HTTPException):
    def __init__(self):
        super().__init__(status_code=400, detail="Invalid token.")

    def __call__(self, environ, start_response):
        json_response = JSONResponse(
            {
                "error": "Invalid token", 
                "detail": "The provided token is not valid"
            },
            status_code=400
        )
        return json_response(environ, start_response)
