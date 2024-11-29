from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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

reports = [
    {
        "id": 1,
        "title": "Chest X-ray",
        "findings": "Right lower lobe infiltrate. No pneumothorax or pleural effusion. Cardiomegaly is present.",
        "reportStatus": "Final",
        "impression": "Right lower lobe pneumonia. Recommend follow-up chest X-ray in 2 weeks."
    },
    {
        "id": 2,
        "title": "Abdominal Ultrasound",
        "findings": "Gallbladder wall thickening. No gallstones or biliary duct dilatation.",
        "reportStatus": "Preliminary",
        "impression": "Consider cholecystitis. Further evaluation may be needed."
    },
    {
        "id": 3,
        "title": "MRI Brain",
        "findings": "No acute intracranial hemorrhage or mass lesion. Mild age-related brain atrophy.",
        "reportStatus": "Final",
        "impression": "Normal brain MRI. No acute findings."
    }
]


# Get all reports
@app.get("/reports")
async def read_reports():
    return {"success": True, "reports": reports}


# Get a report
@app.get("/reports/{report_id}")
async def get_report(report_id):
    # Get a report from the reports
    report = next((report for report in reports if report["id"] == int(report_id)), None)
    if report is None:
        return {"success": False, "message":"Report not found"}
    return {"success": True, "report": report}

