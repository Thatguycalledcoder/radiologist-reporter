from tortoise import fields
from tortoise.models import Model
from enum import Enum


class ReportStatus(str, Enum):
    NEW = "new"
    UNREAD = "unread"
    PRELIM = "prelim"
    FINAL = "final"


class Report(Model):
    id = fields.IntField(pk=True)
    title = fields.CharField(max_length=50)
    findings = fields.TextField()
    reportStatus = fields.CharEnumField(ReportStatus)
    impression = fields.TextField()
    
    def __str__(self):
        return f"Report(id={self.id}, title={self.title}, findings={self.findings}, reportStatus={self.reportStatus}, impression={self.impression})"
    