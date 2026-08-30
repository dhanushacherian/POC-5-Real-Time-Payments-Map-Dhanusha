from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from payment_data import PAYMENT_SCHEMES

app = FastAPI(
    title="Real-Time Payments Map API",
    description="Backend API for the Real Rails PoC 5 project.",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "Real-Time Payments Map API is running",
        "poc": 5,
        "project": "Real-Time Payments Map"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.get("/api/payment-schemes")
def get_payment_schemes():
    return {
        "count": len(PAYMENT_SCHEMES),
        "schemes": PAYMENT_SCHEMES
    }