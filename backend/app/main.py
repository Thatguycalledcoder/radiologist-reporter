from app.database import init_db, close_db, populate_reports
from app.models import Report
from app.schemas import ReportSchema
from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from tortoise.exceptions import DoesNotExist, IntegrityError


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()  # Initialize the database connection when the app starts
    
    yield

    await close_db()
    

app = FastAPI(lifespan=lifespan)

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


# Get all reports
@app.get("/reports")
async def read_reports():
    reports = await Report.all().order_by("-id")

    return {"success": True, "reports": reports}


# Get a report test
@app.get("/reports/{report_id}")
async def get_report(report_id):
    # Get a report from the reports
    try:
        report = await Report.get(id=report_id)
        return {"success": True, "report": report}
    except DoesNotExist as e:
        raise HTTPException(
            status_code=404, 
            detail=f"Failed to get report. Report does not exist."
        )
    except Exception as e:
        raise HTTPException(
            status_code=500, 
            detail=f"Failed to get report. Error: {str(e)}"
        )


# Add a report
@app.post("/reports")
async def create_report(report: ReportSchema):
    try:
        # Create the report
        await Report.create(
            title=report.title,
            findings=report.findings,
            reportStatus=report.reportStatus,
            impression=report.impression,  # Fixed typo from "impressions"
        )

        # Return success response
        return {"success": True, "message": "Report added successfully."}

    except IntegrityError as e:
        # Handle database constraints like unique fields
        raise HTTPException(
            status_code=400, 
            detail=f"Failed to add report. Integrity error: {str(e)}"
        )
    except Exception as e:
        # Catch other unexpected errors
        raise HTTPException(
            status_code=500, 
            detail=f"Failed to add report: {str(e)}"
        )


@app.get("/generate")
async def add_test_reports():
    await populate_reports()
