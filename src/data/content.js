// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit copy, metrics, and links in
//  one place — the components read from this file.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Tharun Derangula',
  initials: 'TD',
  role: 'Full-Stack Software Engineer',
  focus: ['AI / ML Integration', 'Distributed Systems'],
  location: 'San Francisco Bay Area, CA',
  status: 'Open to Senior / Staff roles',
  email: 'dtharun209@gmail.com',
  phone: '+1 (408) 652-9472',
  tagline:
    'I build AI products and event-driven systems that stay calm under load — and ship them at Walmart scale.',
  intro:
    'Full-stack engineer with 4+ years turning ambiguous product ideas into production systems that serve millions. Lately I live where AI meets distributed infrastructure: RAG and LLM features on top of resilient, observable, event-driven backends. I own features end to end, mentor the engineers around me, and move fast without leaving a mess.',
  links: [
    { label: 'GitHub', href: 'https://github.com/', handle: '@tharun' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', handle: 'in/tharun' },
    { label: 'Email', href: 'mailto:dtharun209@gmail.com', handle: 'dtharun209@gmail.com' },
  ],
}

// Headline stats for the hero ribbon + metrics band
export const headlineStats = [
  { value: 4, suffix: '+', label: 'Years shipping production systems' },
  { value: 35, suffix: '%', label: 'p95 latency cut on hot-path APIs' },
  { value: 50, suffix: '%', label: 'Faster, zero-downtime deploys' },
  { value: 85, suffix: '%', label: 'Test coverage held on owned services' },
]

export const projects = [
  {
    id: 'sparky',
    index: '01',
    company: 'Walmart Global Tech',
    title: 'Sparky — Walmart’s AI Shopping Agent',
    period: 'Apr 2025 — Present',
    region: 'USA',
    blurb:
      'Customer-facing conversational shopping and cart workflows across web and mobile, plus the AI relevance and event pipelines underneath them — built at Walmart scale with PM, design, and ML teams.',
    metrics: [
      { value: '−35%', label: 'p95 API latency on recommendation endpoints' },
      { value: '+20%', label: 'AI recommendation relevance (A/B tested)' },
      { value: '<50ms', label: 'Median latency held through traffic spikes' },
      { value: 'millions', label: 'Shopping events processed reliably / day' },
    ],
    highlights: [
      'Shipped conversational shopping & cart features in React, Next.js, and TypeScript.',
      'Architected cart auto-build and intent-routing microservices in Java, Spring Boot, Kafka, and PostgreSQL with idempotent retries and dead-letter queues.',
      'Integrated Walmart’s Wallaby LLM via the Element ML Platform using RAG, pgvector, and vector retrieval.',
      'Automated infra with Docker, Kubernetes, Terraform, WCNP, and GitHub Actions; observability via Datadog + Grafana.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Redis', 'RAG', 'pgvector', 'GCP', 'Kubernetes'],
  },
  {
    id: 'ksu',
    index: '02',
    company: 'Kennesaw State University',
    title: 'Campus Hub — One Platform for a University',
    period: 'Jan 2024 — Dec 2024',
    region: 'USA',
    blurb:
      'Consolidated Owl Express, D2L Brightspace, DegreeWorks, and KSUMail into a single responsive platform for students and faculty — with reconciliation services keeping every connected system honest.',
    metrics: [
      { value: '−30%', label: 'Dashboard load time' },
      { value: '−40%', label: 'Manual data correction across systems' },
      { value: '−50%', label: 'Deployment cycle time' },
      { value: '80%+', label: 'Test coverage maintained' },
    ],
    highlights: [
      'Built the platform in React, Next.js, and TypeScript over Node.js, Spring Boot, REST, and Redis APIs.',
      'Integrated Ellucian Banner and DegreeWorks with query tuning and caching.',
      'Owned Java/Spring Boot services over PostgreSQL with REST-webhook reconciliation for enrollment, grades, and financial aid.',
      'Deployed on AWS EC2/S3 with Docker and GitHub Actions CI/CD — low-disruption releases during peak registration.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Spring Boot', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
  },
  {
    id: 'hcl',
    index: '03',
    company: 'HCL Tech',
    title: 'Enterprise Banking — Payments at Scale',
    period: 'May 2020 — Dec 2022',
    region: 'India',
    blurb:
      'Invoice tracking and payment workflows for enterprise banking customers across regions — front to back, with exactly-once event processing and a legacy-to-microservices modernization underneath.',
    metrics: [
      { value: 'exactly-once', label: 'Transaction handling under high load' },
      { value: '−35%', label: 'Peak-period API response time' },
      { value: '−45%', label: 'Batch processing time (analytics & compliance)' },
      { value: '−40%', label: 'Production defects after modernization' },
    ],
    highlights: [
      'Built responsive React/TypeScript interfaces backed by Java and Spring Boot APIs.',
      'Engineered event-driven payment processing with Kafka using idempotent retries and dead-letter queues.',
      'Built ETL pipelines with Python and GCP BigQuery for downstream finance teams.',
      'Modernized legacy backends into microservices on Docker, Terraform, GCP Cloud Run, and GKE — releases from days to hours.',
    ],
    stack: ['React', 'TypeScript', 'Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Python', 'BigQuery', 'Docker', 'GKE'],
  },
]

export const stackGroups = [
  {
    label: 'Languages',
    items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'Go', 'SQL'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js (SSR)', 'Redux', 'Tailwind CSS', 'Jest', 'Cypress'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'Spring Boot', 'GraphQL', 'gRPC', 'Kafka', 'Redis', 'Microservices'],
  },
  {
    label: 'AI / ML',
    items: ['LLM Integration', 'RAG', 'pgvector', 'Vector Retrieval', 'LangChain', 'OpenAI API', 'Anthropic API'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['GCP', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Helm', 'GitHub Actions', 'Prometheus', 'Grafana'],
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Snowflake', 'Elasticsearch', 'DynamoDB'],
  },
]

export const principles = [
  {
    k: 'Calm under load',
    v: 'Idempotent retries, dead-letter queues, graceful degradation, and caching layers so the system holds its shape when traffic doesn’t.',
  },
  {
    k: 'Own it end to end',
    v: 'From the React surface to the Kafka consumer to the Terraform that ships it — I take features the whole way and stay accountable for them in production.',
  },
  {
    k: 'Measure, then move',
    v: 'Every change earns its place against p95s, coverage, and A/B lift. Observability first, opinions second.',
  },
  {
    k: 'Build with AI, deliberately',
    v: 'Claude Code, Copilot, Cursor, and Codex for scaffolding and refactors — paired with judgment, tests, and review, not in place of them.',
  },
]

export const timeline = [
  { kind: 'work', role: 'Software Engineer', org: 'Walmart Global Tech', period: 'Apr 2025 — Present', place: 'USA' },
  { kind: 'work', role: 'Software Engineer', org: 'Kennesaw State University', period: 'Jan 2024 — Dec 2024', place: 'USA' },
  { kind: 'edu', role: 'M.S. Information Technology', org: 'Kennesaw State University', period: '2023 — 2024', place: 'USA' },
  { kind: 'work', role: 'Software Engineer', org: 'HCL Tech', period: 'May 2020 — Dec 2022', place: 'India' },
  { kind: 'edu', role: 'B.S. Computer Science & Engineering', org: 'Lovely Professional University', period: '2018 — 2022', place: 'India' },
]

export const certifications = [
  'Google Professional Cloud Architect',
  'Google AI Essentials Specialization',
  'IBM Generative AI Engineering Professional',
  'Microsoft Full-Stack Developer Professional',
]

// Tech words for the hero marquee
export const marqueeItems = [
  'Distributed Systems', 'Event-Driven Architecture', 'RAG', 'Kafka', 'Spring Boot',
  'React / Next.js', 'pgvector', 'Kubernetes', 'GraphQL', 'Domain-Driven Design',
  'LLM Integration', 'Redis', 'Terraform', 'gRPC', 'Observability',
]
