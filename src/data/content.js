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
    'I build LLM and RAG features for Walmart’s Sparky shopping assistant, on commerce systems handling 20M+ daily events.',
  intro:
    'Software engineer with five years building full-stack applications and distributed systems in Python, Java, and TypeScript. At Walmart I develop LLM and RAG features for Sparky, the AI shopping assistant: vector retrieval, evaluation pipelines, and cart services inside commerce systems handling 20M+ daily events. I own features end to end, from prompt orchestration and pgvector tuning to Kafka services, Kubernetes deploys, and the observability that keeps them honest.',
  links: [
    { label: 'GitHub', href: 'https://github.com/', handle: '@tharun' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tharund11/', handle: 'in/tharund11' },
    { label: 'Email', href: 'mailto:dtharun209@gmail.com', handle: 'dtharun209@gmail.com' },
  ],
}

// Headline stats for the hero ribbon + metrics band
export const headlineStats = [
  { value: 20, suffix: 'M+', label: 'Daily shopping events on systems I build' },
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
      'Sparky is Walmart’s AI shopping assistant: customers discover products, compare options, and get personalized recommendations through natural-language conversation. I ship its conversational shopping and cart features across web and mobile in React, Next.js, and TypeScript, connecting the UI to Python and Java services and Walmart’s Wallaby LLM.',
      'On the AI side I build Python and FastAPI services for prompt orchestration, embedding generation, and retrieval evaluation. RAG evaluation pipelines, pgvector retrieval tuning, and Wallaby integration through the Element ML Platform improved recommendation relevance 20% in A/B tests, with pytest regression suites catching RAG failures and GitHub Actions quality gates enforcing 85% minimum test coverage.',
      'Underneath sit intent-routing and cart auto-build services in Java, Spring Boot, Kafka, and PostgreSQL, connecting conversational requests to cart workflows in systems processing 20M+ daily shopping events. Redis caching, connection pooling, and index tuning cut recommendation p95 latency 35%, holding sub-50ms median at 5K+ requests/sec through holiday peaks. APIs are secured with OAuth 2.0, JWT, and RBAC, and Docker, Kubernetes, Terraform, and GitHub Actions on WCNP halved deploys from about 20 to 10 minutes with zero downtime.',
      'I author design docs and lead architecture reviews for cart automation, intent routing, and RAG evaluation, and use Claude Code, Copilot, Codex, and Gemini for refactoring and test generation, cutting PR turnaround by roughly a third with CI checks required before every merge.',
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
      'Campus Hub is a unified student and faculty platform that brings Owl Express, D2L Brightspace, DegreeWorks, and KSUMail together behind one responsive interface for 40,000+ students and faculty. Before it, students juggled disconnected systems to register, track grades, and check financial aid.',
      'I built it in React, Next.js, and TypeScript, integrated university single sign-on with role-based access and protected API routes, and developed Node.js and Spring Boot REST APIs for Ellucian Banner and DegreeWorks that improved dashboard load time 30%. Java and Spring Boot services on PostgreSQL synchronized enrollment, grades, and financial aid through REST APIs and webhooks, reducing manual data correction 40%.',
      'Docker and GitHub Actions deploys to AWS EC2, with static assets on S3, halved deployment cycle time and kept releases smooth through peak registration, while 80%+ Jest and React Testing Library coverage caught UI regressions early.',
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
      'An enterprise banking platform for invoice tracking and payment workflows used by corporate banking customers across regions. Payments at this scale cannot drop or double-process, so the system needed correctness and resilience under heavy, bursty settlement load.',
      'I built React and TypeScript frontends backed by Java and Spring Boot APIs, tuned connection pooling for peak banking activity, and developed real-time Kafka transaction pipelines with idempotent consumers and dead-letter queues. ETL pipelines in Python, pandas, SQL, and BigQuery cut batch processing time 45%, and Airflow validation and reconciliation checks reduced data-quality incidents 35%.',
      'I also helped modernize legacy banking backends into microservices on Docker, Terraform, GCP Cloud Run, and GKE, reducing production defects 40% through TDD with JUnit and pytest and automated GitHub Actions checks.',
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
    items: ['Claude Code', 'GitHub Copilot', 'Codex', 'Gemini', 'Cursor'],
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
    v: 'Claude Code, Copilot, Codex, and Gemini for scaffolding and refactors - paired with judgment, tests, and review, not in place of them.',
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
