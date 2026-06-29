from fastapi import APIRouter, File, UploadFile
from app.services.tts_service import generate_tts_audio

router = APIRouter()

@router.post("/generate")
async def generate_tts(prompt : str):
    audio = await generate_tts_audio(prompt)
    return {"audio_base64": audio}
