from tortoise import Tortoise
from app.models import Report


async def init_db():
    await Tortoise.init(
        db_url='postgres://postgres:daveking@localhost:5433/report_db',
        modules={"models": ["app.models.report"]}
    )
    
    await Tortoise.generate_schemas()
    

async def close_db():
    await Tortoise.close_connections()
    
    
async def populate_reports():
    reports = [
        {
            "id": 1,
            "title": "Chest X-ray",
            "findings": "Right lower lobe infiltrate. No pneumothorax or pleural effusion. Cardiomegaly is present.",
            "reportStatus": "final",
            "impression": "Right lower lobe pneumonia. Recommend follow-up chest X-ray in 2 weeks."
        },
        {
            "id": 2,
            "title": "Abdominal Ultrasound",
            "findings": "Gallbladder wall thickening. No gallstones or biliary duct dilatation.",
            "reportStatus": "prelim",
            "impression": "Consider cholecystitis. Further evaluation may be needed."
        },
        {
            "id": 3,
            "title": "MRI Brain",
            "findings": "No acute intracranial hemorrhage or mass lesion. Mild age-related brain atrophy.",
            "reportStatus": "final",
            "impression": "Normal brain MRI. No acute findings."
        }
    ]
    
    for report in reports:
        await Report.create(**report)