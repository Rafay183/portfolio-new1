import {
  ServiceItem,
  ProjectCardItem,
  IntegrationCategory,
  ProcessStep,
  OutcomeItem,
} from '../types';

export const CONSULTANT_INFO = {
  name: 'Rafay Shaikh',
  role: 'AI Solutions & Automation Consultant',
  experience: '8+ Years Experience',
  experienceStatement:
    '8+ years of experience across software engineering, data, AI, analytics, automation, training and technology implementation.',
  valueProposition:
    'I help organizations identify where AI can create real value, design the right solution, integrate it with existing systems, automate repetitive workflows and build practical AI applications that improve efficiency and performance.',
  brandMessage:
    'AI is not about adding another tool. AI is about redesigning how work gets done.',
  heroHeadline: 'Build Smarter Organizations with AI, Automation & Intelligent Systems',
  heroSupportingHeadline:
    'AI Solutions. LLM Applications. Intelligent Automation. Business Transformation.',
  heroDescription:
    'I help organizations design and implement practical AI solutions, LLM applications, intelligent automations and technology integrations that reduce manual effort, improve productivity and create more efficient business operations.',
  links: {
    linkedin: 'https://www.linkedin.com/in/hellorafayshaikh/',
    website: 'https://rafay183.github.io',
    preply: 'https://preply.com/en/tutor/7389596',
    email: 'mailto:hellorafayshaikh@gmail.com', // standard verifiable channel or direct mailto
  },
};

export const TRUST_STRIP_ITEMS = [
  { label: '8+ Years Professional Experience', sub: 'Engineering & Tech Delivery' },
  { label: 'AI & Machine Learning', sub: 'Production LLM Solutions' },
  { label: 'Intelligent Automation', sub: 'API & Workflow Orchestration' },
  { label: 'Software Engineering', sub: 'Full-Stack Scalable Architecture' },
  { label: 'Analytics & BI', sub: 'Data Modeling & Insights' },
  { label: 'Professional Training', sub: 'Team & Corporate Enablement' },
];

export const ORGANIZATIONAL_PROBLEMS = [
  {
    title: 'Repetitive Manual Work',
    desc: 'High-value employees spend critical hours copying data, formatting files, and moving items across tools.',
    icon: 'Repeat',
  },
  {
    title: 'Scattered Information',
    desc: 'Enterprise knowledge is fragmented across emails, documentation, chat tools, and buried file systems.',
    icon: 'FolderTree',
  },
  {
    title: 'Slow Reporting Cycles',
    desc: 'Management and stakeholders wait days or weeks for manual compilation of essential KPI dashboards.',
    icon: 'Clock',
  },
  {
    title: 'Inefficient Workflows',
    desc: 'Multi-step business processes stall at human bottlenecks with low visibility and high friction.',
    icon: 'GitPullRequestDraft',
  },
  {
    title: 'Data Silos',
    desc: 'Databases, CRMs, and operational tools fail to communicate, causing blind spots and inconsistencies.',
    icon: 'DatabaseZap',
  },
  {
    title: 'Manual Document Processing',
    desc: 'Unstructured invoices, legal documents, contracts, and briefs require tedious manual reading and entry.',
    icon: 'FileText',
  },
  {
    title: 'Poor Internal Knowledge Access',
    desc: 'Teams ask the same questions repeatedly because internal policies and technical docs are hard to search.',
    icon: 'SearchCode',
  },
  {
    title: 'Repetitive Customer & Partner Support',
    desc: 'Support agents answer standard recurring inquiries instead of resolving complex, relationship-critical issues.',
    icon: 'MessageSquareShare',
  },
  {
    title: 'Slow Decision-Making',
    desc: 'Leadership lacks real-time, consolidated context needed to make confident, data-backed business choices.',
    icon: 'TrendingDown',
  },
  {
    title: 'Lack of AI Adoption Strategy',
    desc: 'Companies test generic chat tools without a clear plan, compliance framework, or measurable business goals.',
    icon: 'Compass',
  },
  {
    title: 'Disconnected Software Systems',
    desc: 'Fragmented SaaS subscriptions operate in isolation, requiring constant human glue to bridge the gaps.',
    icon: 'Unplug',
  },
  {
    title: 'Teams Trapped in Low-Value Tasks',
    desc: 'Talented staff expend cognitive bandwidth on mundane operations that should run autonomously in the background.',
    icon: 'Users',
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Consulting',
    tag: 'Strategic Roadmap',
    shortDesc: 'Design practical AI strategies and implementation roadmaps aligned with business objectives.',
    fullDesc:
      'We assess your organization’s operational workflows, audit data readiness, and create a realistic, phased implementation plan that prioritizes high-ROI initiatives over speculative technology hype.',
    deliverables: [
      'AI Opportunity Assessment & Readiness Audit',
      'Technical Architecture & Security Evaluation',
      'Cost-Benefit & ROI Projection Models',
      'Phased Implementation & Governance Roadmap',
    ],
    iconName: 'BrainCircuit',
  },
  {
    id: 'llm-apps',
    title: 'LLM Application Development',
    tag: 'Custom Production Systems',
    shortDesc: 'Build AI-powered applications using modern Large Language Models for internal and customer-facing use cases.',
    fullDesc:
      'Turn cutting-edge language models into reliable software products. From custom RAG systems to context-aware document processing, we build production-grade applications that handle real-world business complexity.',
    deliverables: [
      'Retrieval-Augmented Generation (RAG) Architecture',
      'Custom Context-Aware Application Logic',
      'Evaluation Frameworks & Hallucination Guardrails',
      'Enterprise API Integration & Token Cost Optimization',
    ],
    iconName: 'Boxes',
  },
  {
    id: 'claude-genai',
    title: 'Claude / Generative AI Implementation',
    tag: 'Model-Agnostic Execution',
    shortDesc: 'Implement Claude and other modern LLM technologies into business workflows, applications and knowledge systems where appropriate.',
    fullDesc:
      'Evaluate, benchmark, and deploy Claude and frontier models based on technical requirements, reasoning depth, security standards, and cost efficiency. We implement models tailored to your exact operational use case.',
    deliverables: [
      'Model Evaluation & Benchmarking Matrix',
      'Complex Reasoning & Structured Output Pipelines',
      'Enterprise Privacy & Compliance Guardrails',
      'Prompt Engineering & Agent Orchestration',
    ],
    iconName: 'Sparkles',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    tag: 'Intelligent Workflows',
    shortDesc: 'Transform repetitive manual workflows into intelligent automated processes.',
    fullDesc:
      'Connect triggers, AI processing logic, and business databases to eliminate manual copy-paste work, invoice extraction, and data routing, preserving human sign-off only where judgment is required.',
    deliverables: [
      'End-to-End Workflow Mapping & Orchestration',
      'Unstructured Document Extraction & Routing',
      'Exception Handling & Human-in-the-Loop Safeguards',
      'Continuous Process Reliability Monitoring',
    ],
    iconName: 'Cpu',
  },
  {
    id: 'ai-integrations',
    title: 'AI Integrations',
    tag: 'System Connectivity',
    shortDesc: 'Connect AI systems with existing APIs, databases, CRM, ERP, cloud platforms, and analytics.',
    fullDesc:
      'AI delivers value only when deeply integrated with your existing tech stack. We connect intelligence layers directly to your SQL databases, CRMs, cloud storage, Slack/Teams, and internal platforms.',
    deliverables: [
      'REST & Webhook Custom Middleware Connectors',
      'Database Ingestion & Bi-Directional Sync Pipelines',
      'Enterprise Collaboration Tool Integrations (Slack/Teams)',
      'Legacy System AI Augmentation & Adapters',
    ],
    iconName: 'Network',
  },
  {
    id: 'knowledge-assistants',
    title: 'AI Knowledge Assistants',
    tag: 'Internal Intelligence',
    shortDesc: 'Build internal AI assistants that help teams search, understand and interact with organizational information.',
    fullDesc:
      'Free your staff from searching buried files and manuals. We build secure internal AI knowledge systems grounded strictly in your proprietary documentation, codebases, and historical data.',
    deliverables: [
      'Enterprise Document Ingestion & Vector Indexing',
      'Role-Based Permissions & Data Segmentation',
      'Verifiable Source Citations & Precision Retrieval',
      'Intuitive Search & Conversational Interfaces',
    ],
    iconName: 'MessageSquareCode',
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    tag: 'Actionable Insights',
    shortDesc: 'Build data-driven reporting, dashboards and analytical solutions using modern analytics technologies.',
    fullDesc:
      'Transform raw operational data into clear, automated executive dashboards and predictive analytical models. Gain real-time visibility into business performance across Power BI, Tableau, and custom data stacks.',
    deliverables: [
      'Automated Data Modeling & ETL Pipelines (SQL / Python)',
      'Interactive Power BI & Tableau Executive Dashboards',
      'KPI Tracking & Operational Health Metrics',
      'Data Cleanliness & Quality Assurance Auditing',
    ],
    iconName: 'BarChart3',
  },
  {
    id: 'training-enablement',
    title: 'AI Training & Enablement',
    tag: 'Workforce Upskilling',
    shortDesc: 'Train teams to use AI, LLMs, automation and modern data technologies effectively.',
    fullDesc:
      'Technology succeeds only when teams embrace it. We provide structured, hands-on corporate workshops and practical coaching for engineers, analysts, and business teams to cultivate true organizational AI fluency.',
    deliverables: [
      'Custom Corporate AI & Generative AI Workshops',
      'Hands-On LLM Application & Tool Coaching',
      'Power BI, Tableau & Python Data Enablement',
      'Practical Implementation Playbooks & Best Practices',
    ],
    iconName: 'GraduationCap',
  },
];

export const LLM_BUSINESS_USE_CASES = [
  { title: 'Internal Knowledge Assistants', desc: 'Instant search across company SOPs, manuals, and internal documentation.' },
  { title: 'Document Intelligence', desc: 'Automated extraction of key fields, terms, and tables from PDFs, contracts, and forms.' },
  { title: 'Customer Support Augmentation', desc: 'Tier-1 draft replies and triage that escalate complex cases with full context.' },
  { title: 'Content & Research Workflows', desc: 'Rapid synthesis of market research, competitive analysis, and briefing papers.' },
  { title: 'Data Analysis & Querying', desc: 'Natural language to SQL interfaces enabling non-technical teams to query data safely.' },
  { title: 'Automated Report Generation', desc: 'Synthesizing operational KPIs into executive summaries with clear insights.' },
  { title: 'Workflow Automation', desc: 'Triggering multi-step downstream actions based on semantic intent in text or emails.' },
  { title: 'Document Summarization', desc: 'Condensing lengthy call transcripts, agreements, and customer meetings into action items.' },
  { title: 'Intelligent Enterprise Search', desc: 'Semantic search that understands context and intent rather than crude keywords.' },
  { title: 'Decision Support Systems', desc: 'Surfacing relevant historical precedents and quantitative context to decision makers.' },
];

export const LLM_PIPELINE_STEPS = [
  { id: '1', name: 'USER / TEAM', desc: 'Initiates action or inquiry through existing business interfaces', icon: 'User' },
  { id: '2', name: 'APPLICATION', desc: 'Handles authentication, context packaging, and security sanitization', icon: 'Laptop' },
  { id: '3', name: 'LLM / AI MODEL', desc: 'Interprets semantics, synthesizes reasoning, and structures logic', icon: 'Cpu' },
  { id: '4', name: 'KNOWLEDGE & DATA', desc: 'Retrieves verified enterprise context via vector or relational search', icon: 'Database' },
  { id: '5', name: 'TOOLS & APIs', desc: 'Executes verified function calls and queries external operational systems', icon: 'Wrench' },
  { id: '6', name: 'AUTOMATION', desc: 'Orchestrates validation, error checking, and background pipeline runs', icon: 'Workflow' },
  { id: '7', name: 'BUSINESS SYSTEM', desc: 'Updates CRM, ERP, records, or notifies team channels', icon: 'Layers' },
  { id: '8', name: 'MEASURABLE OUTCOME', desc: 'Reduced hours, faster turnaround, and auditable business value', icon: 'CheckCircle2' },
];

export const BEFORE_AUTOMATION_STEPS = [
  { step: '1', name: 'Manual Input', desc: 'Staff re-types data from incoming emails or scanned PDFs' },
  { step: '2', name: 'Spreadsheet', desc: 'Data pasted into local spreadsheet with formatting friction' },
  { step: '3', name: 'Email Chain', desc: 'Sent back and forth across teams seeking basic clarification' },
  { step: '4', name: 'Copy / Paste', desc: 'Values manually transferred into CRM or enterprise ERP' },
  { step: '5', name: 'Human Review', desc: 'Senior employee spends hours proofreading routine rows' },
  { step: '6', name: 'Delayed Report', desc: 'Consolidated report arrives days late with human errors' },
];

export const AFTER_AUTOMATION_STEPS = [
  { step: '1', name: 'System Trigger', desc: 'Webhooks or inbox listeners detect incoming business event instantly' },
  { step: '2', name: 'AI Processing', desc: 'LLM extracts, parses, and validates structured fields with confidence scores' },
  { step: '3', name: 'Data Integration', desc: 'Clean payload automatically synced into SQL databases, CRM, and cloud storage' },
  { step: '4', name: 'Automated Decision', desc: 'Pre-set business rules route requests or trigger scheduled pipeline actions' },
  { step: '5', name: 'Human Approval', desc: 'Flagged exceptions ping senior staff via Slack/Teams only when necessary' },
  { step: '6', name: 'Real-Time Analytics', desc: 'Dashboards update instantaneously with complete audit trails' },
];

export const INTEGRATION_ECOSYSTEM: IntegrationCategory[] = [
  {
    name: 'Data & Databases',
    description: 'Structured, semi-structured, and API data persistence',
    iconName: 'Database',
    tools: [
      { name: 'SQL', role: 'Relational data query design & optimization', verified: true },
      { name: 'PostgreSQL', role: 'Enterprise relational store & pgvector pipelines', verified: true },
      { name: 'MySQL', role: 'Production database integration & querying', verified: true },
      { name: 'MongoDB', role: 'Document-oriented schemas & unstructured storage', verified: true },
      { name: 'REST & Webhook APIs', role: 'Custom bi-directional payload sync', verified: true },
    ],
  },
  {
    name: 'Business Analytics & BI',
    description: 'Executive dashboards, data modeling, and reporting',
    iconName: 'PieChart',
    tools: [
      { name: 'Power BI', role: 'Executive dashboards, DAX, data modeling', verified: true },
      { name: 'Tableau', role: 'Visual analytics, drill-down operational metrics', verified: true },
    ],
  },
  {
    name: 'Development & Engineering',
    description: 'Core backend, services, and web application interfaces',
    iconName: 'Code2',
    tools: [
      { name: 'Python', role: 'Data science, AI logic, automation scripts', verified: true },
      { name: 'Flask', role: 'Microservice API backends & lightweight endpoints', verified: true },
      { name: 'Streamlit', role: 'Rapid AI prototypes, internal tools & dashboards', verified: true },
      { name: 'Node.js', role: 'Backend services, async task runners & APIs', verified: true },
      { name: 'React', role: 'Production modern client web interfaces', verified: true },
    ],
  },
  {
    name: 'AI & Machine Learning',
    description: 'Frontier models, NLP pipelines, and autonomous agents',
    iconName: 'Sparkle',
    tools: [
      { name: 'Large Language Models (LLMs)', role: 'Multi-provider reasoning, prompt engineering & RAG', verified: true },
      { name: 'Generative AI', role: 'Document intelligence & context transformation', verified: true },
      { name: 'Machine Learning & NLP', role: 'Supervised classification, feature engineering & text analytics', verified: true },
      { name: 'AI Assistants & Agents', role: 'Tool-augmented task planning & autonomous workflow execution', verified: true },
    ],
  },
  {
    name: 'Intelligent Automation',
    description: 'End-to-end process orchestration and system glue',
    iconName: 'Workflow',
    tools: [
      { name: 'Workflow Automation', role: 'Trigger-based multi-step process orchestration', verified: true },
      { name: 'API Automation', role: 'Connecting disconnected third-party SaaS services', verified: true },
      { name: 'AI Agents', role: 'Semi-autonomous task loops with guardrails', verified: true },
      { name: 'Business Process Automation', role: 'Streamlining repetitive document & operational workflows', verified: true },
    ],
  },
  {
    name: 'Cloud & DevOps',
    description: 'Containerization, version control, and infrastructure',
    iconName: 'Cloud',
    tools: [
      { name: 'Microsoft Azure', role: 'Cloud services, data platforms & app hosting', verified: true },
      { name: 'Git & GitHub', role: 'Version control, repository management & collaboration', verified: true },
      { name: 'Docker', role: 'Application containerization & consistent environments', verified: true },
      { name: 'CI/CD Pipelines', role: 'Automated test execution & continuous deployment', verified: true },
    ],
  },
];

export const CONSULTING_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    desc: 'Understand the organization’s workflows, pain points, technology stack and objectives.',
    details: [
      'Comprehensive workflow review & stakeholder interviews',
      'Audit of existing software stack, data assets & bottlenecks',
      'Clear definition of business success criteria & security bounds',
    ],
  },
  {
    step: '02',
    title: 'Identify',
    desc: 'Find processes where AI and automation can create meaningful, measurable value.',
    details: [
      'Filtering high-impact use cases vs. speculative experiments',
      'Feasibility evaluation based on data quality & process volume',
      'Selection of appropriate models, tools, and integration points',
    ],
  },
  {
    step: '03',
    title: 'Design',
    desc: 'Design the AI architecture, integrations, data flows and workflow guardrails.',
    details: [
      'End-to-end system architecture & schema specifications',
      'Human-in-the-loop validation & fallback protocols',
      'Cost modeling (token usage, infrastructure & API budgets)',
    ],
  },
  {
    step: '04',
    title: 'Implement',
    desc: 'Build, integrate, test and deploy the production-ready solution.',
    details: [
      'Clean modular software engineering & API development',
      'Integration with production databases and business tools',
      'Thorough evaluation, latency optimization & security testing',
    ],
  },
  {
    step: '05',
    title: 'Optimize',
    desc: 'Measure performance, monitor reliability, and continuously improve the system.',
    details: [
      'Real-world usage monitoring & error tracking',
      'Prompt refinement, cache tuning & cost optimizations',
      'Hands-on team training for sustainable internal ownership',
    ],
  },
];

export const SELECTED_PROJECTS: ProjectCardItem[] = [
  {
    id: 'proj-1',
    title: 'Enterprise Knowledge Assistant & Semantic Search System',
    category: 'LLM Applications',
    summary: 'Internal knowledge retrieval platform grounded on proprietary documentation and multi-format files.',
    objective:
      'Empower cross-functional teams to query extensive technical manuals, SOPs, and internal policies in natural language without manual document searching.',
    implementation:
      'Engineered a RAG architecture parsing PDFs and structured documents, indexing into a vector store with hybrid keyword-semantic search and strict citations to source paragraphs.',
    techStack: ['Python', 'LLM APIs', 'Vector Database', 'Streamlit', 'REST APIs'],
    outcome:
      'Eliminated hours spent hunting for internal information; provided teams with verifiable, hallucination-resistant answers with direct document page citations.',
  },
  {
    id: 'proj-2',
    title: 'Multi-Source Operational Data Pipeline & Power BI Executive Suite',
    category: 'Data & Analytics',
    summary: 'Automated data extraction and interactive business intelligence dashboard suite.',
    objective:
      'Consolidate fragmented sales, operations, and support data scattered across disparate databases into unified, real-time executive dashboards.',
    implementation:
      'Designed SQL data transformation routines and scheduled Python ETL scripts feeding directly into a normalized data model visualized via Power BI with role-based access.',
    techStack: ['Power BI', 'SQL', 'Python', 'PostgreSQL', 'Data Modeling'],
    outcome:
      'Replaced slow weekly spreadsheet reporting with automated, real-time executive visibility into key operational bottlenecks and financial metrics.',
  },
  {
    id: 'proj-3',
    title: 'Intelligent Document Extraction & Workflow Automation System',
    category: 'AI Automation',
    summary: 'Automated processing of incoming business documents with human-in-the-loop review.',
    objective:
      'Eliminate manual data entry and human copy-paste verification across complex multi-page operational forms and invoices.',
    implementation:
      'Constructed a pipeline combining document parsing, structured LLM extraction schemas, confidence scoring, and automated webhook delivery into operational databases with approval triggers.',
    techStack: ['Python', 'LLMs', 'Flask', 'Webhooks', 'Docker', 'SQL'],
    outcome:
      'Transformed manual paper/email workflows into an automated process where human attention is required only for low-confidence edge cases.',
  },
  {
    id: 'proj-4',
    title: 'Cross-System API Integration & Automated Event Orchestrator',
    category: 'AI Integration',
    summary: 'Unified middleware synchronizing customer actions and business database triggers.',
    objective:
      'Bridge disconnected CRM, database, and messaging platforms to keep operational teams instantly alerted of critical business events.',
    implementation:
      'Built custom Python and Node.js middleware managing webhook subscriptions, rate-limiting, error retries, and data transformations connecting APIs with Azure cloud services.',
    techStack: ['Node.js', 'Python', 'Azure', 'REST APIs', 'Git/GitHub'],
    outcome:
      'Connected legacy data stores with modern communication channels, eliminating communication delays and synchronization discrepancies across departments.',
  },
];

export const BUSINESS_OUTCOMES: OutcomeItem[] = [
  {
    title: 'Efficiency',
    subtitle: 'Reduce Repetitive Manual Work',
    description:
      'Automate rote data entry, document reading, and inter-system copying so your highest-paid talent focuses on high-leverage strategic initiatives.',
    iconName: 'Zap',
    businessMetricLabel: 'Hours Reclaimed Every Week',
  },
  {
    title: 'Productivity',
    subtitle: 'Help Teams Complete Tasks Faster',
    description:
      'Equip staff with contextual AI assistants that synthesize research, draft documentation, and surface critical answers in seconds rather than hours.',
    iconName: 'TrendingUp',
    businessMetricLabel: 'Accelerated Turnaround Time',
  },
  {
    title: 'Intelligence',
    subtitle: 'Turn Organizational Data Into Actionable Insights',
    description:
      'Unlock the value trapped in internal reports, customer conversations, and operational databases with intelligent query interfaces and BI dashboards.',
    iconName: 'Lightbulb',
    businessMetricLabel: 'Higher Decision Confidence',
  },
  {
    title: 'Integration',
    subtitle: 'Connect AI With Existing Business Systems',
    description:
      'Avoid isolated chatbots on island websites. Embed intelligent automation directly into your existing CRMs, ERPs, databases, and communication channels.',
    iconName: 'Link2',
    businessMetricLabel: 'Unified System Operations',
  },
  {
    title: 'Scalability',
    subtitle: 'Workflows That Scale With Organizational Growth',
    description:
      'Build resilient pipelines that handle 10x process volume without requiring a proportional linear increase in administrative headcount.',
    iconName: 'Maximize2',
    businessMetricLabel: 'Headcount-Independent Growth',
  },
  {
    title: 'Better Decisions',
    subtitle: 'Faster Access to Relevant Information',
    description:
      'Eliminate guesswork. Give managers instant access to consolidated analytics, clean historical summaries, and grounded data-backed forecasts.',
    iconName: 'CheckCircle',
    businessMetricLabel: 'Data-Driven Governance',
  },
];

export const WHY_WORK_WITH_ME = [
  {
    title: 'Business-Oriented AI',
    desc: 'Solutions must solve actual business problems, not just showcase novel technology. We focus on measurable business ROI from day one.',
    icon: 'Target',
  },
  {
    title: 'Technical Depth',
    desc: 'Over 8 years of cross-disciplinary experience bridging software engineering, data architecture, machine learning, and automation.',
    icon: 'Layers',
  },
  {
    title: 'Practical Implementation',
    desc: 'We don’t just deliver static slide decks or theoretical advice. We build, integrate, and deploy working systems into your production environment.',
    icon: 'Terminal',
  },
  {
    title: 'End-to-End Thinking',
    desc: 'From initial problem discovery through architecture design, data pipelines, deployment, and post-launch tuning, every phase is covered.',
    icon: 'GitMerge',
  },
  {
    title: 'Human + AI Approach',
    desc: 'AI is designed to augment human intellect and remove drudgery, maintaining human approval and governance where ethical or operational judgment matters.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Continuous Improvement',
    desc: 'AI systems require ongoing monitoring for accuracy, latency, and cost efficiency. We design systems built to be maintained and optimized easily.',
    icon: 'RefreshCw',
  },
];

export const TRAINING_OFFERINGS = [
  {
    title: 'Corporate AI & Generative AI Strategy',
    audience: 'Leadership & Department Heads',
    desc: 'Demystifying LLMs, identifying high-ROI use cases, risk management, and formulating actionable organizational AI roadmaps.',
    topics: ['LLM Capabilities & Limitations', 'Data Privacy & Security Guardrails', 'ROI & Build vs. Buy Evaluation'],
  },
  {
    title: 'LLM Application & Prompt Engineering',
    audience: 'Technical Teams & Product Managers',
    desc: 'Hands-on instruction in building RAG applications, structured prompting, agent design, and production evaluation frameworks.',
    topics: ['Context Management & Embeddings', 'Structured Function Calling', 'Hallucination Mitigation'],
  },
  {
    title: 'Data Analytics with Power BI & Tableau',
    audience: 'Analysts & Operations Teams',
    desc: 'Mastering data modeling, DAX queries, ETL routines, and designing high-impact executive dashboards.',
    topics: ['Relational Data Modeling', 'Interactive Visual Storytelling', 'Automated Refresh Pipelines'],
  },
  {
    title: 'Python for Data, AI & Automation',
    audience: 'Engineers & Aspiring Developers',
    desc: 'Practical, project-based programming focused on data wrangling, API connectors, web scraping, and automation scripts.',
    topics: ['API Orchestration & Webhooks', 'Pandas & Data Manipulation', 'Microservices with Flask'],
  },
];
