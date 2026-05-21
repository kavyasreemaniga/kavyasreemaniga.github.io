export const profile = {
  name: "Kavya Sree Maniga",
  role: "Senior Data Engineer",
  blurb:
    "6+ years engineering production data platforms across GCP, AWS, and Azure — from real-time CDC pipelines and medallion architectures to dbt transformation layers and AI-powered workflows.",
  location: "Philadelphia, PA",
  email: "kavyasreede@gmail.com",
  linkedin: "https://linkedin.com/in/kavyasreede",
  github: "https://github.com/kavyasreemaniga",
  resume: "/resume.pdf",
};

export const stats = [
  { value: "6+", label: "Years experience" },
  { value: "3", label: "Cloud platforms" },
  { value: "200GB+", label: "Daily data processed" },
  { value: "99%+", label: "Pipeline SLA" },
];

export const techStack = [
  { category: "Languages", items: ["Python", "SQL", "Scala", "PySpark", "PowerShell"] },
  { category: "Data Stack", items: ["dbt", "Apache Airflow", "Snowflake", "BigQuery", "Redshift"] },
  { category: "Cloud", items: ["GCP", "AWS", "Azure", "Terraform", "Docker"] },
  { category: "Pipeline Tools", items: ["Apache Kafka", "Pub/Sub", "Dataflow", "AWS Glue", "ADF"] },
  { category: "BI & Viz", items: ["Power BI", "Looker", "Tableau", "Streamlit"] },
  { category: "Governance", items: ["dbt Tests", "Microsoft Purview", "Dataplex", "RBAC", "IAM"] },
];

export const experience = [
  {
    title: "Senior Data Engineer",
    company: "Digimarc",
    period: "Apr 2024 – Present",
    location: "OR, USA",
    highlights: [
      "Architected end-to-end GCP data platform migration, reducing pipeline processing time by 35%",
      "Built real-time CDC pipelines using Pub/Sub and Dataflow ingesting PostgreSQL and MongoDB into BigQuery",
      "Implemented dbt transformation layer with 20+ modular models, cutting debugging time by 40%",
      "Developed Airflow DAGs from scratch achieving 99%+ pipeline SLA adherence",
      "Integrated Claude API and LangGraph for AI-powered data quality and enrichment workflows",
    ],
  },
  {
    title: "Data Engineer",
    company: "Wells Fargo",
    period: "Nov 2022 – Dec 2023",
    location: "MD, USA",
    highlights: [
      "Designed Medallion architecture (Bronze/Silver/Gold) in Azure Data Lakehouse for regulated finance data",
      "Built ETL/ELT pipelines using Azure Data Factory, PySpark, and Databricks at enterprise scale",
      "Reduced manual data processing time by 50% across 15+ regulated financial pipelines",
      "Delivered Power BI dashboards integrated with Microsoft Fabric for Finance and Sales stakeholders",
    ],
  },
  {
    title: "Data Engineer",
    company: "HCLTech",
    period: "Nov 2018 – Dec 2021",
    location: "India",
    highlights: [
      "Led end-to-end migration of clinical and claims data to AWS Redshift, processing 200GB+ daily",
      "Integrated Epic EHR data pipelines, reducing clinical reporting latency by 40%",
      "Enforced HIPAA compliance through IAM policies, RBAC, encryption, and audit-ready data lineage",
      "Built Tableau and Power BI dashboards for provider performance metrics and patient outcomes reporting",
    ],
  },
];

export const projects = [
  {
    title: "SDOH Community Health Analytics Platform",
    category: "Analytics Engineering",
    featured: true,
    description:
      "End-to-end SDOH analytics platform integrating Synthea FHIR R4 clinical data with PRAPARE screening results and community program referrals. Tracks intervention effectiveness and health equity outcomes across 1,100+ synthetic patients using a Medallion dbt architecture on PostgreSQL.",
    tech: ["dbt", "PostgreSQL", "Python", "Synthea FHIR", "Tableau", "SQL"],
    github: "https://github.com/kavyasreemaniga/sdoh-community-health-analytics",
    demo: "",
    highlights: [
      "Bronze → Staging → Marts dbt pipeline with automated unique, not-null, and referential integrity tests",
      "PRAPARE 9-domain SDOH risk scoring (0–10 scale) across 1,725 screening records",
      "Health equity dashboard model surfacing demographic disparities in access and outcomes",
      "ICD-10 Z-code social determinants, Epic FHIR-compatible data, HIPAA-safe synthetic data only",
    ],
  },
  {
    title: "GCP CDC Pipeline Modernization",
    category: "Streaming Data",
    featured: false,
    description:
      "Real-time Change Data Capture platform ingesting PostgreSQL and MongoDB operational data via Pub/Sub and Dataflow into BigQuery. Built for low-latency analytics with Terraform-managed infrastructure and standardized IaC patterns.",
    tech: ["GCP", "Pub/Sub", "Dataflow", "BigQuery", "Terraform"],
    github: "",
    demo: "",
    highlights: [
      "Near real-time ingestion for high-throughput operational datasets",
      "Reduced downstream processing time by 35% through modernized streaming architecture",
      "Standardized cloud infrastructure with reusable Terraform modules",
    ],
  },
  {
    title: "Azure Medallion Finance Pipelines",
    category: "Analytics Engineering",
    featured: false,
    description:
      "Bronze/Silver/Gold data flows in the Azure ecosystem supporting regulatory reporting and business analytics for a major financial institution. Reduced manual effort by 50% across 15+ pipelines with layered governance and stakeholder-facing dashboards.",
    tech: ["Azure Data Factory", "PySpark", "Databricks", "Power BI", "Microsoft Fabric"],
    github: "",
    demo: "",
    highlights: [
      "50% reduction in manual processing across 15+ regulated financial pipelines",
      "Layered transformation with governance checkpoints at each medallion tier",
      "Stakeholder-facing Power BI dashboards for Finance and Sales teams",
    ],
  },
  {
    title: "AI-Powered Data Quality Workflows",
    category: "AI / Data Engineering",
    featured: false,
    description:
      "LangGraph-orchestrated agents integrated with the Claude API to automate data quality triage, anomaly explanation, and pipeline remediation suggestions — reducing mean time to resolution for data incidents.",
    tech: ["LangGraph", "Claude API", "Python", "Airflow", "BigQuery"],
    github: "",
    demo: "",
    highlights: [
      "LangGraph agent graph for multi-step anomaly investigation and root cause analysis",
      "Claude API integration for natural-language incident summaries surfaced in Slack",
      "Automated remediation suggestions reducing on-call response time",
    ],
  },
];

export const education = [
  {
    degree: "Master of Professional Studies in Data Science",
    school: "University of Maryland Baltimore County",
    location: "Baltimore, USA",
    year: "2022",
  },
  {
    degree: "Bachelor of Technology in Civil Engineering",
    school: "Manipal Institute of Technology",
    location: "Karnataka, India",
    year: "2018",
  },
];

export const certifications = [
  {
    name: "dbt Fundamentals",
    issuer: "dbt Labs",
  },
  {
    name: "Google Cloud Data Engineer (Hands-on Track)",
    issuer: "Google Cloud Learning Path",
  },
  {
    name: "Azure Data Engineering Practitioner Path",
    issuer: "Microsoft Learn",
  },
];
