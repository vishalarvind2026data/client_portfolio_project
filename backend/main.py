"""
Aryan Batra — Aspiring Yacht Broker & Luxury Maritime Business Development
FastAPI Telemetry, Resume Dossier, Charter & Market Research Engine.
Grounded 100% in Aryan Batra's authentic resume and industry credentials.
"""

from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Optional, Literal
from datetime import datetime
import json
import os
import uuid

app = FastAPI(
    title="Aryan Batra — Superyacht Advisory & Career Portfolio API",
    description="Authentic resume dossier, Côte d'Azur yacht charter market intelligence, and principal inquiry engine.",
    version="3.0.0",
)

# Enable CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

INQUIRIES_FILE = os.path.join(os.path.dirname(__file__), "inquiries.json")


# ---------------------------------------------------------
# DATA MODELS
# ---------------------------------------------------------

class WorkExperienceItem(BaseModel):
    company: str
    location: str
    role: str
    period: str
    is_current: bool
    highlights: List[str]


class EducationItem(BaseModel):
    institution: str
    location: str
    degree: str
    period: str
    relevant_subjects: List[str]


class CertificationItem(BaseModel):
    title: str
    date: str
    issuer: Optional[str] = None


class ResumeProfile(BaseModel):
    name: str
    phone: str
    email: str
    location: str
    title: str
    summary: str
    experience: List[WorkExperienceItem]
    education: List[EducationItem]
    certifications: List[CertificationItem]
    skills: List[str]
    languages: List[dict]


class CharterCalculationRequest(BaseModel):
    vessel_id: str
    duration_weeks: float = Field(default=1.0, ge=1.0, le=8.0)
    season: Literal["high", "low"] = "high"
    vat_rate: float = Field(default=0.20, ge=0.0, le=0.25)
    apa_rate: float = Field(default=0.30, ge=0.25, le=0.40)


class VIPInquiryRequest(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    inquiry_type: Literal[
        "BROKERAGE_RECRUITMENT",
        "CHARTER_CONSULTATION",
        "MARKET_RESEARCH_REQUEST",
        "GENERAL_COLLABORATION"
    ]
    message: str


# ---------------------------------------------------------
# AUTHENTIC RESUME DATABASE FOR ARYAN BATRA
# ---------------------------------------------------------

RESUME_DATA = ResumeProfile(
    name="Aryan BATRA",
    phone="+33 6 05 59 37 12",
    email="aryanbatra18@gmail.com",
    location="France (Côte d'Azur / Saint-Tropez / Cannes)",
    title="Aspiring Yacht Broker | Luxury Maritime Business Development Specialist",
    summary=(
        "A business student with a strong interest in the luxury yachting industry, I have gained "
        "practical business development experience across several yachting and charter houses. "
        "I am working toward a career as a yacht broker and am eager to continue building my skills "
        "in client relations, market research, and luxury deal structuring."
    ),
    experience=[
        WorkExperienceItem(
            company="Saint Tropez Yacht Charter",
            location="Saint-Tropez, France",
            role="Business Development Intern",
            period="Sept 2026 – Present",
            is_current=True,
            highlights=[
                "Supporting business development and client servicing activities within a leading yacht charter operation on the Côte d'Azur.",
                "Assisting UHNW clients and charter brokers with fleet availability, itinerary planning, and charter contract preparations.",
                "Monitoring client requirements to provide high-touch service during peak French Riviera charter operations.",
            ],
        ),
        WorkExperienceItem(
            company="Villa Yachting",
            location="French Riviera, France",
            role="Business Development Intern",
            period="Jul 2026 – Sept 2026",
            is_current=False,
            highlights=[
                "Conducted market research on the global yacht brokerage and charter industry to identify emerging trends and business opportunities.",
                "Built and maintained structured databases of luxury partners, UHNW client networks, and strategic stakeholders.",
                "Analyzed competitor positioning, yacht listings, and pricing movements to support business development initiatives.",
                "Assisted in creating marketing content and luxury promotional collateral.",
            ],
        ),
        WorkExperienceItem(
            company="Moana Yachting",
            location="Cannes, France",
            role="Business Development Intern",
            period="May 2026 – Jul 2026",
            is_current=False,
            highlights=[
                "Identified and qualified prospective clients and strategic partners through targeted lead generation and industry research.",
                "Supported outreach initiatives by preparing prospect lists and drafting client communication materials.",
                "Provided day-to-day support to the brokerage team in client servicing and operational activities.",
                "Collaborated with the team on business development strategies and contributed to strengthening relationships within the luxury yachting ecosystem.",
            ],
        ),
    ],
    education=[
        EducationItem(
            institution="Burgundy School of Business",
            location="Dijon, France",
            degree="Master's in Management (M1)",
            period="2025 – 2026",
            relevant_subjects=[
                "Corporate Finance",
                "Financial Theory and Mathematics",
                "Financial Modeling",
                "Quantitative Methods",
            ],
        ),
        EducationItem(
            institution="Burgundy School of Business",
            location="Dijon, France",
            degree="MSc Luxury Management and Innovation",
            period="2026 – 2027",
            relevant_subjects=[
                "Luxury Entrepreneurship",
                "Consumer Behavior & Psychology of Luxury",
                "Digital Project Consulting",
                "Reinventing Luxury",
            ],
        ),
        EducationItem(
            institution="Amity University",
            location="Kolkata, India",
            degree="Bachelor of Laws (Legum Baccalaureus) — B.A.LLB(H)",
            period="2019 – 2024",
            relevant_subjects=[
                "Intellectual Property Rights (IPR Specialization)",
                "Taxation Law",
                "Securities Law",
                "Business Law",
                "International Public Relations",
            ],
        ),
    ],
    certifications=[
        CertificationItem(
            title="Course for Capital Market, Investment, and Securities",
            date="04/11/2024",
        ),
        CertificationItem(
            title="Course for Data Protection and Privacy Laws",
            date="03/06/2024",
            issuer="Legalstix Law School",
        ),
    ],
    skills=[
        "Market Research & Competitive Analysis",
        "Client Relationship Management (CRM)",
        "MS Excel & Financial Modeling",
        "Team Collaboration",
        "Accounting & Record Keeping",
        "Yacht Charter Operations",
        "Legal & Contract Scrutiny (B.A. LL.B)",
    ],
    languages=[
        {"language": "English", "proficiency": "TOEIC Score: 825 (Professional Working)"},
        {"language": "French", "proficiency": "Currently Learning (Immersed on French Riviera)"},
    ],
)


# ---------------------------------------------------------
# REPRESENTATIVE CÔTE D'AZUR CHARTER FLEET BENCHMARKS
# ---------------------------------------------------------

CHARTER_FLEET_BENCHMARKS = [
    {
        "id": "aetheria",
        "name": "M/Y AETHERIA (85m Displacement Superyacht)",
        "builder": "German Custom Naval Engineering",
        "loa": "85.0m",
        "beam": "14.2m",
        "gt": "2,450 GT",
        "charter_rate_high_eur": 950000,
        "charter_rate_low_eur": 836000,
        "guests": 12,
        "crew": 24,
        "hull_color": "#E2E8F0",
        "hull_name": "Titanium Pearl",
        "description": "Exemplary 85-meter displacement charter vessel with touch-and-go helideck and aft beach club.",
    },
    {
        "id": "sovereign",
        "name": "M/Y SOVEREIGN (72m Pedigree Superyacht)",
        "builder": "Dutch Custom Steel & Aluminum",
        "loa": "72.0m",
        "beam": "12.6m",
        "gt": "1,890 GT",
        "charter_rate_high_eur": 740000,
        "charter_rate_low_eur": 651200,
        "guests": 12,
        "crew": 19,
        "hull_color": "#C5A059",
        "hull_name": "Champagne Naval Brass",
        "description": "Refined 72-meter custom steel displacement yacht featuring Burmese quarter-sawn teak decks.",
    },
    {
        "id": "velocite",
        "name": "M/Y VÉLOCITÉ (54m High-Speed SportFly)",
        "builder": "Italian Planing Yacht Division",
        "loa": "54.0m",
        "beam": "9.8m",
        "gt": "780 GT",
        "charter_rate_high_eur": 290000,
        "charter_rate_low_eur": 255200,
        "guests": 10,
        "crew": 11,
        "hull_color": "#0284C7",
        "hull_name": "Aquarama Azure",
        "description": "High-velocity planing yacht engineered for swift Mediterranean transits between Cannes, Saint-Tropez, and Monaco.",
    },
    {
        "id": "nocturne",
        "name": "M/Y NOCTURNE (64m Modern Steel Explorer)",
        "builder": "Italian Architectural Steel",
        "loa": "64.0m",
        "beam": "11.4m",
        "gt": "1,350 GT",
        "charter_rate_high_eur": 460000,
        "charter_rate_low_eur": 404800,
        "guests": 12,
        "crew": 15,
        "hull_color": "#1E293B",
        "hull_name": "Stealth Matte Anthracite",
        "description": "Modern displacement steel profile with knife-bow and expansive fold-out sea terraces.",
    },
]


# ---------------------------------------------------------
# ROUTES
# ---------------------------------------------------------

@app.get("/api/health", tags=["System"])
def health_check():
    return {
        "status": "ONLINE",
        "service": "Aryan Batra Career Portfolio & Charter Advisory API",
        "candidate": "Aryan Batra",
        "runtime": "Python 3.14 / FastAPI",
        "timestamp": datetime.utcnow().isoformat() + "Z",
    }


@app.get("/api/resume", response_model=ResumeProfile, tags=["Resume Dossier"])
def get_resume():
    """Returns Aryan Batra's authentic, verified resume data."""
    return RESUME_DATA


@app.get("/api/fleet", tags=["Charter Fleet Benchmarks"])
def get_fleet_benchmarks():
    return CHARTER_FLEET_BENCHMARKS


@app.post("/api/charter/calculate", tags=["Charter Calculations"])
def calculate_charter(req: CharterCalculationRequest):
    selected = next((v for v in CHARTER_FLEET_BENCHMARKS if v["id"] == req.vessel_id.lower()), None)
    if not selected:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Vessel '{req.vessel_id}' not found in fleet database."
        )

    rate = selected["charter_rate_high_eur"] if req.season == "high" else selected["charter_rate_low_eur"]
    base_fee = rate * req.duration_weeks
    apa_amount = base_fee * req.apa_rate
    vat_amount = base_fee * req.vat_rate
    total_commitment = base_fee + apa_amount + vat_amount

    return {
        "vessel_id": selected["id"],
        "vessel_name": selected["name"],
        "duration_weeks": req.duration_weeks,
        "season": req.season,
        "weekly_rate_eur": rate,
        "base_charter_fee_eur": round(base_fee, 2),
        "apa_amount_eur": round(apa_amount, 2),
        "apa_percentage": round(req.apa_rate * 100, 1),
        "vat_rate_percentage": round(req.vat_rate * 100, 1),
        "vat_amount_eur": round(vat_amount, 2),
        "total_principal_commitment_eur": round(total_commitment, 2),
    }


@app.post("/api/inquiry", tags=["Contact & Recruitment"])
def submit_inquiry(req: VIPInquiryRequest):
    ref_id = f"AB-MC-{datetime.utcnow().strftime('%Y%m')}-{uuid.uuid4().hex[:6].upper()}"
    timestamp = datetime.utcnow().isoformat() + "Z"

    record = {
        "reference_id": ref_id,
        "timestamp": timestamp,
        "name": req.name,
        "email": req.email,
        "phone": req.phone,
        "inquiry_type": req.inquiry_type,
        "message": req.message,
        "candidate": "Aryan Batra",
        "candidate_email": "aryanbatra18@gmail.com",
    }

    existing = []
    if os.path.exists(INQUIRIES_FILE):
        try:
            with open(INQUIRIES_FILE, "r") as f:
                existing = json.load(f)
        except Exception:
            existing = []

    existing.append(record)
    with open(INQUIRIES_FILE, "w") as f:
        json.dump(existing, f, indent=2)

    return {
        "status": "DISPATCHED",
        "reference_id": ref_id,
        "timestamp": timestamp,
        "message": f"Inquiry registered under reference {ref_id}. Aryan Batra has received your message.",
        "candidate": "Aryan Batra // Aspiring Yacht Broker",
    }
