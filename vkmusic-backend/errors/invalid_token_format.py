from fastapi import HTTPException
from starlette.responses import JSONResponse # or FastAPI's Response

class InvalidTokenFormatError(HTTPException):
    def __init__(self):
        super().__init__(status_code=400, detail="Invalid token format")

    def __call__(self, environ, start_response):
        json_response = JSONResponse(
            {
                "error": "Invalid token format", 
                "detail": "The provided token does not have a valid format"
            },
            status_code=400
        )
        return json_response(environ, start_response)
