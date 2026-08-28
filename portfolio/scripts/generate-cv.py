#!/usr/bin/env python3
"""Generate a one-page CV for Aymane Achfennar."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

OUT = Path(__file__).resolve().parents[1] / "public" / "Aymane_Achfennar_CV.pdf"

INK = colors.HexColor("#12121b")
MUTED = colors.HexColor("#5c5c6e")
ACCENT = colors.HexColor("#0891b2")
LINE = colors.HexColor("#d4d4dc")


def styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Title"],
            fontName="Times-Bold",
            fontSize=22,
            leading=26,
            textColor=INK,
            alignment=TA_LEFT,
            spaceAfter=2,
        ),
        "title": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName="Times-Italic",
            fontSize=11,
            textColor=ACCENT,
            spaceAfter=8,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=9,
            textColor=MUTED,
            leading=13,
        ),
        "h": ParagraphStyle(
            "H",
            parent=base["Heading2"],
            fontName="Times-Bold",
            fontSize=10.5,
            textColor=INK,
            spaceBefore=12,
            spaceAfter=4,
            tracking=1,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=9.5,
            leading=13,
            textColor=INK,
        ),
        "job": ParagraphStyle(
            "Job",
            parent=base["Normal"],
            fontName="Times-Bold",
            fontSize=10,
            textColor=INK,
            leading=13,
        ),
        "when": ParagraphStyle(
            "When",
            parent=base["Normal"],
            fontName="Times-Italic",
            fontSize=9,
            textColor=MUTED,
            alignment=TA_RIGHT,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=9.5,
            leading=13,
            textColor=INK,
            leftIndent=12,
            bulletIndent=0,
        ),
        "muted": ParagraphStyle(
            "Muted",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=9.5,
            leading=13,
            textColor=MUTED,
        ),
    }


def rule():
    return HRFlowable(width="100%", thickness=0.6, color=LINE, spaceAfter=6)


def job_header(s, role, company, when):
    data = [
        [
            Paragraph(f"{role} — {company}", s["job"]),
            Paragraph(when, s["when"]),
        ]
    ]
    t = Table(data, colWidths=[125 * mm, 50 * mm])
    t.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 2),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
            ]
        )
    )
    return t


def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    s = styles()
    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=16 * mm,
        bottomMargin=16 * mm,
        title="Aymane Achfennar — CV",
        author="Aymane Achfennar",
    )

    story = [
        Paragraph("Aymane Achfennar", s["name"]),
        Paragraph("Software Engineer", s["title"]),
        Paragraph(
            "aymaneachfennar@gmail.com  ·  +212 623555728  ·  Tetouan, Morocco",
            s["meta"],
        ),
        rule(),
        Paragraph("SUMMARY", s["h"]),
        Paragraph(
            "Software Engineer with experience building scalable web and mobile "
            "applications using Django, React, and React Native. Skilled in backend "
            "development, system modernization, and integrating AI-powered features "
            "using modern cloud infrastructure.",
            s["body"],
        ),
        Paragraph("EXPERIENCE", s["h"]),
        job_header(s, "Software Engineer", "Koolskools", "04/2025 — Present"),
        Paragraph(
            "• Design and ship backend services and AI-enabled product features used across the platform.",
            s["bullet"],
        ),
        Paragraph(
            "• Build scalable APIs and data pipelines that keep web and mobile clients in sync.",
            s["bullet"],
        ),
        Paragraph(
            "• Contribute to the React Native mobile app, bridging backend contracts with native UX.",
            s["bullet"],
        ),
        Spacer(1, 6),
        job_header(s, "Software Engineer Intern", "Koolskools", "10/2024 — 04/2025"),
        Paragraph(
            "• Led the migration from Python 2.7 → 3.12 and Django 1.8 → 5.",
            s["bullet"],
        ),
        Paragraph(
            "• Modernized infrastructure: MySQL 5 upgrade, Docker containerization, and AWS deployment.",
            s["bullet"],
        ),
        Paragraph(
            "• Delivered full-stack work across Django APIs and React interfaces during the transition.",
            s["bullet"],
        ),
        Paragraph("PROJECTS", s["h"]),
        Paragraph("<b>Legacy System Modernization &amp; Cloud Migration</b>", s["body"]),
        Paragraph(
            "End-to-end modernization of a production Python/Django stack — language and "
            "framework upgrades, database migration, containerization, and a move onto AWS.",
            s["muted"],
        ),
        Spacer(1, 4),
        Paragraph("<b>AI-Powered Exam and Student Monitoring System</b>", s["body"]),
        Paragraph(
            "Intelligent monitoring layer for assessments: backend pipelines, model-assisted "
            "signals, and a web console for real-time educator insight.",
            s["muted"],
        ),
        Spacer(1, 4),
        Paragraph("<b>AI-Enhanced Educational Mobile App</b>", s["body"]),
        Paragraph(
            "React Native client backed by Django services, weaving AI-assisted learning "
            "features into a mobile experience used by students day to day.",
            s["muted"],
        ),
        Paragraph("EDUCATION", s["h"]),
        job_header(s, "Computer Science", "1337 Coding School, Tetouane", "2022 — 2025"),
        Paragraph(
            "Peer-to-peer, project-based curriculum in the 42 Network.",
            s["muted"],
        ),
        Paragraph("SKILLS", s["h"]),
        Paragraph(
            "<b>Frameworks</b> — Django, React, React Native, Next.js<br/>"
            "<b>Languages</b> — Python, JavaScript, C, C++<br/>"
            "<b>Databases</b> — MySQL, PostgreSQL<br/>"
            "<b>DevOps</b> — Docker, AWS, Git",
            s["body"],
        ),
    ]

    doc.build(story)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
