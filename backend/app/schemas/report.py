from pydantic import BaseModel

class ReportSchema(BaseModel):
    title: str
    findings: str
    reportStatus: str
    impression: str