from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.database import init_db, close_db, populate_reports
from app.dependencies import get_db
from app.models import Report
from tortoise.exceptions import DoesNotExist

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup_event():
    await init_db()  # Initialize the database connection when the app starts


@app.on_event("shutdown")
async def shutdown_event():
    await close_db()


# Get all reports
@app.get("/reports")
async def read_reports(db=Depends(get_db)):
    reports = await Report.all()

    return {"success": True, "reports": reports}


# Get a report test
@app.get("/reports/{report_id}")
async def get_report(report_id, db=Depends(get_db)):
    # Get a report from the reports
    try:
        report = await Report.get(id=report_id)
        return {"success": True, "report": report}
    except DoesNotExist:
        return {"success": False, "message":"Report not found"}

@app.get("/generate")
async def add_test_reports(db=Depends(get_db)):
    await populate_reports()