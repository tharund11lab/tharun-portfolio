// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit copy, metrics, and links in
//  one place — the components read from this file.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Tharun Derangula',
  initials: 'TD',
  role: 'Software Engineer | Applied AI & Full-Stack',
  focus: ['Applied AI / LLM & RAG', 'Distributed Systems'],
  location: 'United States',
  status: 'Open to Senior / Staff roles',
  email: 'dtharun209@gmail.com',
  phone: '+1 (408) 652-9472',
  tagline:
    'I build production AI and distributed systems: LLM and RAG experiences for Walmart’s Sparky shopping agent, running across millions of daily events.',
  intro:
    'Software engineer with 5 years building production AI and distributed systems in Python, Java, TypeScript, React, and the cloud. At Walmart I ship LLM and RAG experiences for Sparky, the AI shopping agent, including vector retrieval and evaluation pipelines operating across millions of daily events. I own features end to end, from prompt orchestration and pgvector tuning to Kafka services, Kubernetes deploys, and the observability that keeps them honest.',
  links: [
    { label: 'GitHub', href: 'https://github.com/', handle: '@tharun' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tharund11/', handle: 'in/tharund11' },
    { label: 'Email', href: 'mailto:dtharun209@gmail.com', handle: 'dtharun209@gmail.com' },
  ],
}

// Headline stats for the hero ribbon + metrics band
export const headlineStats = [
  { value: 5, suffix: '', label: 'Years shipping production systems' },
  { value: 20, suffix: '%', label: 'AI recommendation relevance lift in A/B tests' },
  { value: 35, suffix: '%', label: 'p95 latency cut on hot-path APIs' },
  { value: 85, suffix: '%', label: 'Test coverage held on owned services' },
]

export const projects = [
  {
    id: 'sparky',
    index: '01',
    company: 'Walmart Global Tech',
    project: "Sparky - Walmart’s AI Shopping Agent",
    period: 'Apr 2025 - Present',
    region: 'USA',
    narrative: [
      'Sparky is Walmart’s AI shopping agent: customers discover products, compare options, and get personalized recommendations through natural-language conversation. I ship the customer-facing conversational shopping and cart features across web and mobile in React, Next.js, and TypeScript, working with product, design, and ML from experimentation through launch.',
      'On the AI side I build Python and FastAPI services for prompt orchestration, embedding generation, and retrieval-quality evaluation. Python RAG evaluation pipelines, Walmart’s Wallaby LLM through the Element ML Platform, and pgvector retrieval tuning lifted AI recommendation relevance 20% in A/B testing and raised add-to-cart conversion, with pytest regression suites and GitHub Actions quality gates catching RAG failures before release.',
      'Underneath sit cart auto-build and intent-routing microservices in Java, Spring Boot, Kafka, and PostgreSQL processing millions of daily shopping events, with idempotent retries, dead-letter queues, and near real-time GCP Pub/Sub pipelines for inventory and fulfillment. Redis caching, connection pooling, and query-plan tuning cut p95 latency 35% on hot recommendation endpoints, holding sub-50ms median through seasonal spikes, while Docker, Kubernetes, Terraform, WCNP, and GitHub Actions enable zero-downtime releases with Datadog and Grafana observability.',
    ],
    stack: ['Python', 'FastAPI', 'RAG', 'pgvector', 'LLM Evaluation', 'React', 'Next.js', 'TypeScript', 'Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Redis', 'GCP Pub/Sub', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Datadog'],
  },
  {
    id: 'ksu',
    index: '02',
    company: 'Kennesaw State University',
    project: 'Campus Hub - One Platform for a University',
    period: 'Jan 2024 - Dec 2024',
    region: 'USA',
    narrative: [
      'Campus Hub is a unified student and faculty platform that brings Owl Express, D2L Brightspace, DegreeWorks, and KSUMail together behind a single responsive interface. Before it, students juggled several disconnected systems to register for classes, track grades, and check financial aid - slow, confusing, and error-prone, especially during peak registration.',
      'I built the platform end to end: the React, Next.js, and TypeScript front end, the Node.js and Spring Boot APIs behind it, and the integrations into Ellucian Banner and DegreeWorks with query tuning and caching to keep dashboards fast. I owned the Java/Spring Boot services over PostgreSQL and the reconciliation layer that keeps enrollment, grades, and financial-aid data consistent across every connected system.',
      'The result was one calm front door to the university: dashboards loaded noticeably faster, manual data corrections across systems dropped sharply, and zero-downtime deploys on AWS with Docker and GitHub Actions let us ship through peak registration without disrupting students.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Spring Boot', 'PostgreSQL', 'Redis', 'REST APIs', 'AWS', 'Docker', 'GitHub Actions'],
  },
  {
    id: 'hcl',
    index: '03',
    company: 'HCL Tech',
    project: 'Enterprise Banking - Payments at Scale',
    period: 'May 2020 - Dec 2022',
    region: 'India',
    narrative: [
      'This was an enterprise banking platform for invoice tracking and payment workflows used by corporate banking customers across regions. Payments at this scale cannot drop or double-charge, so the system needed exactly-once processing and resilience under heavy, bursty load - while a legacy monolith underneath was slowing every release down to days.',
      'I worked across the stack: responsive React and TypeScript interfaces backed by Java and Spring Boot APIs, and the event-driven payment engine built on Kafka with idempotent retries and dead-letter queues so transactions stayed correct under pressure. I also built ETL pipelines in Python, pandas, SQL, and BigQuery that cut batch processing time 45% and fed partitioned warehouse tables to finance and compliance, with Airflow-orchestrated validation and reconciliation checks that dropped data-quality incidents 35%.',
      'I helped modernize the legacy backend into microservices on Docker, Terraform, and Google Cloud (Cloud Run and GKE), which cut release cycles from days to hours, reduced peak-period response times, and brought down production defects after the migration - a more reliable payments platform that the business could evolve quickly.',
    ],
    stack: ['React', 'TypeScript', 'Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Redis', 'Python', 'pandas', 'Airflow', 'BigQuery', 'Docker', 'Terraform', 'GKE', 'Cloud Run'],
  },
]

export const stackGroups = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'TypeScript', 'JavaScript (ES6+)', 'Go', 'SQL'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js (SSR)', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3', 'Jest', 'React Testing Library', 'Cypress'],
  },
  {
    label: 'Backend',
    items: ['FastAPI', 'Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'gRPC', 'Kafka', 'Redis', 'Microservices', 'OpenAI API', 'Anthropic API'],
  },
  {
    label: 'AI / ML',
    items: ['Generative AI', 'LLM Integration & Evaluation', 'RAG', 'Embeddings', 'pgvector', 'Vector Search', 'LangChain', 'AI Agents', 'Prompt Engineering'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['GCP', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Helm', 'GitHub Actions', 'CI/CD', 'Datadog', 'Prometheus', 'Grafana'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Snowflake', 'Elasticsearch', 'BigQuery', 'DynamoDB'],
  },
  {
    label: 'Testing & Quality',
    items: ['pytest', 'JUnit', 'Jest', 'React Testing Library', 'Cypress', 'TDD', 'A/B Testing'],
  },
  {
    label: 'Engineering Practices',
    items: ['System Design', 'Distributed Systems', 'Event-Driven Architecture', 'MLOps', 'Agentic Workflows', 'Microservices', 'TDD', 'CI/CD', 'Agile / Scrum'],
  },
  {
    label: 'AI Developer Tools',
    items: ['Claude Code', 'GitHub Copilot', 'Cursor', 'Codex'],
  },
]

export const principles = [
  {
    k: 'Calm under load',
    v: 'Idempotent retries, dead-letter queues, graceful degradation, and caching layers so the system holds its shape when traffic doesn’t.',
  },
  {
    k: 'Own it end to end',
    v: 'From the React surface to the Kafka consumer to the Terraform that ships it - I take features the whole way and stay accountable for them in production.',
  },
  {
    k: 'Measure, then move',
    v: 'Every change earns its place against p95s, coverage, and A/B lift. Observability first, opinions second.',
  },
  {
    k: 'Build with AI, deliberately',
    v: 'Claude Code, Copilot, Cursor, and Codex for scaffolding and refactors - paired with judgment, tests, and review, not in place of them.',
  },
]

export const timeline = [
  { kind: 'work', role: 'Software Engineer', org: 'Walmart Global Tech', period: 'Apr 2025 - Present', place: 'USA' },
  { kind: 'work', role: 'Software Engineer', org: 'Kennesaw State University', period: 'Jan 2024 - Dec 2024', place: 'USA' },
  { kind: 'edu', role: 'M.S. Information Technology', org: 'Kennesaw State University', period: '2023 - 2024', place: 'USA' },
  { kind: 'work', role: 'Software Engineer', org: 'HCL Tech', period: 'May 2020 - Dec 2022', place: 'India' },
  { kind: 'edu', role: 'B.S. Computer Science & Engineering', org: 'Lovely Professional University', period: '2018 - 2022', place: 'India' },
]

export const certifications = [
  'Google Professional Cloud Architect',
  'Google AI Essentials Specialization',
  'AWS Certified Solutions Architect',
  'Microsoft Generative AI Engineering Professional',
  'Anthropic - AI Fluency Framework & Foundations',
  'Anthropic - Claude Code 101',
]

// Tech words for the hero marquee
export const marqueeItems = [
  'RAG Evaluation', 'LLM Integration', 'pgvector', 'Python', 'FastAPI',
  'Distributed Systems', 'Event-Driven Architecture', 'Kafka', 'Spring Boot',
  'React / Next.js', 'Kubernetes', 'Terraform', 'Redis', 'AI Agents', 'Observability',
]
