from typing import List, Literal
from pydantic import BaseModel


class TrafficLight(BaseModel):
    area: str
    status: Literal["Green", "Yellow", "Red"]
    rationale: str
    reviewer_action: str


class HarmonizerResult(BaseModel):
    executive_summary: str
    risk_level: Literal["Low", "Medium", "High"]
    blocking_issues: List[str]
    traffic_lights: List[TrafficLight]
    delta_summary: str
    label_harmonization_summary: str
    ectd_shell: dict
    reviewer_checklist: List[str]
    limitations: List[str]
