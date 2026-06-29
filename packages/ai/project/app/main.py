from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.tts import router as tts_router
from app.routes.markers import router as markers_router

app = FastAPI(title="InterviewEasy API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(tts_router, prefix="/tts")
app.include_router(markers_router, prefix="/ai")

@app.get("/")
def root():
    return {"message": "InterviewEasy API running"}