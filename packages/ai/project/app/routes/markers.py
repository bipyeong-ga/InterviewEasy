from fastapi import APIRouter, WebSocket, WebSocketDisconnect
import logging

router = APIRouter()
logger = logging.getLogger("markers")

@router.websocket("/ws/markers")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            # Here we can process the JSON payload containing the Face Landmarks
            # For example, tracking eye gaze, head pose, etc.
            # logger.info(f"Received markers: {data[:100]}...")
            
            # You can send back analysis if needed
            # await websocket.send_json({"status": "received"})
    except WebSocketDisconnect:
        logger.info("Client disconnected from markers socket.")
    except Exception as e:
        logger.error(f"Error in markers websocket: {e}")
