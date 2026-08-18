export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  keyAreas: string[];
}

export interface ServiceBucket {
  title: string;
  id: string;
  services: Service[];
}

export const SERVICE_BUCKETS: ServiceBucket[] = [
  {
    title: "Operational Support Services",
    id: "operational",
    services: [
      {
        id: "program-management",
        title: "Correctional Healthcare Program Management",
        tagline: "Operational support that strengthens oversight, coordination, and accountability.",
        description: "ECHS provides program management support designed to help correctional healthcare organizations strengthen oversight, improve coordination, and maintain operational accountability across contracts, facilities, and service lines.",
        keyAreas: ["Operational coordination support", "Leadership reporting", "Issue tracking", "Stakeholder coordination", "Contract support", "Transition & implementation"]
      },
      {
        id: "staffing-support",
        title: "Healthcare Staffing Support",
        tagline: "Helping correctional healthcare providers strengthen workforce continuity and staffing coordination.",
        description: "ECHS provides healthcare staffing support services that help providers source, coordinate, and administratively support clinical staffing solutions in correctional settings.",
        keyAreas: ["Staffing vendor coordination", "Workforce sourcing", "Contract staffing", "Provider engagement", "Invoice processing support"]
      },
      {
        id: "claims-admin",
        title: "Medical Claims Administration Support",
        tagline: "Administrative support that improves visibility and control around claims-related workflows.",
        description: "ECHS provides medical claims administration support services to help correctional healthcare organizations manage the processes associated with offsite medical claims.",
        keyAreas: ["Claims workflow support", "Billing coordination", "Documentation management", "Vendor communication", "Claims tracking & reporting"]
      },
      {
        id: "vendor-management",
        title: "Vendor Management & Administrative Support",
        tagline: "Administrative coordination that helps correctional healthcare partners manage vendors, invoices, and service-line support.",
        description: "ECHS provides vendor management and administrative support services that help correctional healthcare providers better manage subcontractor relationships.",
        keyAreas: ["Vendor coordination", "Invoice processing", "Subcontractor administration", "Documentation tracking", "Service-line coordination"]
      }
    ]
  },
  {
    title: "Quality, Compliance & Oversight",
    id: "quality",
    services: [
      {
        id: "cqi",
        title: "Continuous Quality Improvement (CQI)",
        tagline: "Turning quality data into actionable operational oversight.",
        description: "ECHS provides CQI support services that help providers strengthen oversight, improve visibility into performance trends, and support a more structured approach to quality management.",
        keyAreas: ["Quality metric tracking", "Audit support", "Corrective action tracking", "Trend analysis", "Performance monitoring"]
      },
      {
        id: "peer-review",
        title: "Clinical Peer Review Support",
        tagline: "Structured, trackable, and defensible peer review support for correctional healthcare partners.",
        description: "ECHS provides clinical peer review support services designed to help organizations strengthen clinical oversight and support internal accountability.",
        keyAreas: ["Peer review workflow", "Case tracking", "Documentation support", "Reporting & trend visibility", "Follow-up tracking"]
      },
      {
        id: "compliance-analytics",
        title: "Compliance Reporting & Operational Analytics",
        tagline: "Technology-enabled reporting and analytics that improve visibility, accountability, and decision-making.",
        description: "ECHS provides compliance reporting and operational analytics services that help organizations improve performance visibility and better manage data.",
        keyAreas: ["Dashboard development", "KPI tracking", "Operational analytics", "Audit-support reporting", "Trend analysis"]
      }
    ]
  },
  {
    title: "Clinical Support & Care Continuity",
    id: "clinical",
    services: [
      {
        id: "mat-support",
        title: "MAT Support Services",
        tagline: "Supporting more organized, accountable substance-use treatment coordination in correctional settings.",
        description: "ECHS provides structured MAT support services to help providers strengthen substance use disorder response within detention settings.",
        keyAreas: ["Intake screening workflow", "Continuity-of-care coordination", "Treatment verification", "Reentry handoff", "Reporting & KPI tracking"]
      },
      {
        id: "reentry-support",
        title: "Reentry & Continuity of Care Support",
        tagline: "Helping correctional healthcare partners improve release planning and care transitions.",
        description: "ECHS provides reentry services designed to help providers strengthen transition planning and improve coordination with community resources.",
        keyAreas: ["Discharge coordination", "Referral workflow", "Care continuity planning", "Appointment coordination", "Community-provider linkage"]
      },
      {
        id: "pharmacy-coordination",
        title: "Pharmacy Services Coordination",
        tagline: "Pharmacy-related coordination that supports more organized medication operations.",
        description: "ECHS supports organizations with pharmacy-related coordination services designed to improve visibility and streamline communication.",
        keyAreas: ["Pharmacy vendor coordination", "Medication program admin", "Formulary support", "Pharmacy reporting", "Service-level oversight"]
      }
    ]
  },
  {
    title: "Specialized Service Solutions",
    id: "specialized",
    services: [
      {
        id: "diagnostic-lab",
        title: "Diagnostic and Laboratory Services",
        tagline: "Specialized diagnostic support designed for correctional healthcare environments.",
        description: "ECHS provides diagnostic and laboratory support services designed to help organizations strengthen access to timely, dependable laboratory testing.",
        keyAreas: ["Laboratory services support", "Test coordination", "Specimen collection workflow", "Results management", "Reporting integration"]
      }
    ]
  }
];
