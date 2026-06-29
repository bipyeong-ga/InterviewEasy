from openai import OpenAI
from app.services.dotenv import OPENAI_API_KEY
import base64

client = OpenAI(api_key=OPENAI_API_KEY)

async def generate_tts_audio(prompt: str):
    response = client.audio.speech.create(
        model="Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice",
        voice="alloy",
        input=prompt
    )

    audio_bytes = response.content
    audio_base64 = base64.b64encode(audio_bytes).decode("utf-8")

    return audio_base64