// All site content lives here, pulled from the April 2026 resume.

export const profile = {
  name: 'Julie Exel',
  fullName: 'Julie Natalie Exel',
  title: 'Senior Software Engineer',
  years: 18,
  email: 'julie.exel@gmail.com',
  github: 'https://github.com/jules-exel',
  linkedin: 'https://www.linkedin.com/in/julienexel/',
  awsBadge: 'https://www.credly.com/badges/7bf82d75-90e8-46c2-a9bd-ae7bc5856897/public_url',
  summary: [
    'Senior Software Engineer with 18+ years of experience specializing in proprietary code solutions, API development, and enterprise cloud architecture. Proven track record of modernizing legacy systems and architecting scalable, API-driven infrastructures using microservices, serverless computing, and machine learning.',
    'Experienced in designing and implementing RESTful and GraphQL APIs, third-party integrations, and event-driven architectures to enable seamless system communication. Strong background in cloud-native design (AWS & Azure), containerization, and CI/CD pipelines to accelerate delivery and improve reliability.',
    'A collaborative technical leader and mentor who guides teams in API-first development, domain-driven design, and best practices in security and observability. Industry experience includes finance, natural gas, insurance, and aviation.',
  ],
  industries: ['Finance', 'Natural Gas', 'Insurance', 'Aviation'],
};

export const splashes = [
  '18+ years of XP!',
  'Now with GraphQL!',
  'AWS Certified!',
  'Also try Kafka!',
  'API-first!',
  'Serverless & block-ful!',
  '~90% test coverage!',
  'Mines legacy code!',
  'Crafts microservices!',
  'Bilingual QA!',
  'Domain-driven!',
  'Ships to prod!',
];

// icon keys map to pixel art in PixelIcon.jsx
export const skillGroups = [
  {
    name: 'Programming & Scripting',
    icon: 'pickaxe',
    items: ['Python', 'Java', 'C#', 'PHP', 'JavaScript', 'SwiftUI'],
  },
  {
    name: 'API & Integration',
    icon: 'redstone',
    items: ['REST', 'GraphQL', 'gRPC', 'JSON/XML', 'OAuth 2.0', 'OpenAPI', 'Postman', 'Kong', 'AWS API GW', 'Azure APIM'],
  },
  {
    name: 'Frameworks & Tools',
    icon: 'table',
    items: ['React', 'Next.js', 'Angular', 'Vue.js', 'Spring Boot', 'Laravel', 'Tailwind', 'PyTorch'],
  },
  {
    name: 'Cloud & Platforms',
    icon: 'pearl',
    items: ['AWS', 'Azure', 'Lambda', 'Azure Functions', 'SQS', 'Kafka', 'Fastly'],
  },
  {
    name: 'Data & Databases',
    icon: 'chest',
    items: ['MS SQL Server', 'PostgreSQL', 'DynamoDB', 'Realm', 'Big Data ETL', 'Streaming', 'Query Tuning'],
  },
  {
    name: 'DevOps & Automation',
    icon: 'piston',
    items: ['Kubernetes', 'Docker', 'Argo', 'Jenkins', 'GitHub Actions', 'CI/CD'],
  },
  {
    name: 'Architecture & Practices',
    icon: 'map',
    items: ['Microservices', 'API-first', 'Event-driven', 'DDD', 'IAM', 'JWT', 'Secrets Mgmt', 'Observability'],
  },
  {
    name: 'Soft Skills',
    icon: 'heart',
    items: ['Problem Solving', 'Tech Leadership', 'Mentorship', 'Collaboration', 'Stakeholders'],
  },
];

// Newest first. `layer` decides which rock the quest card is carved from as we dig deeper.
export const jobs = [
  {
    company: 'Agility CMS',
    location: 'Toronto, ON (Remote)',
    role: 'Senior Full Stack Developer',
    dates: 'Oct 2025 – Present',
    ore: 'diamond',
    bullets: [
      'Developed and maintained a custom headless CMS, delivering customer-requested enhancements and fixes to improve reliability, performance, and user experience',
      'Built full-stack features using React, Next.js, and C#',
      'Designed and supported Azure cloud infrastructure including App Services, storage, monitoring, and deployment pipelines',
      'Integrated Fastly and PostHog to improve edge delivery, performance monitoring, and customer analytics',
      'Translated client feedback and support tickets into technical solutions with support and product teams',
      'Reduced technical debt by debugging production issues and improving developer workflows',
    ],
  },
  {
    company: 'Pegasus',
    location: 'Edmonton, AB (Remote)',
    role: 'IT Consultant / iOS Software Engineer',
    dates: 'Feb 2025 – Oct 2025',
    ore: 'emerald',
    bullets: [
      'Designed and maintained Azure cloud infrastructure with secure, cost-optimized CI/CD pipelines',
      'Developed cross-platform applications using Swift and Node.js with RESTful API integrations',
      'Built and tested APIs using Postman with automated test suites to reduce regressions',
      'Worked with product and design teams in Figma to deliver responsive, production-ready features',
      'Led end-to-end delivery from requirements and architecture to deployment and monitoring',
    ],
  },
  {
    company: 'Bellwood – Chick-fil-A',
    location: 'Atlanta, GA (Remote)',
    role: 'Senior Software Engineer',
    dates: 'May 2022 – Feb 2025',
    ore: 'gold',
    bullets: [
      'Architected and implemented AI-driven solutions to modernize legacy enterprise systems',
      'Developed a proprietary backpropagation-based machine learning system for internal financial controls',
      'Improved fraud detection and reporting through optimized data workflows',
      'Implemented custom data pre-processing pipelines for large-scale datasets',
      'Achieved and maintained ~90% unit test coverage',
      'Mentored developers on best practices, improving delivery speed and code quality',
    ],
  },
  {
    company: 'NAL Insurance',
    location: 'London, ON (Hybrid)',
    role: 'Senior Application Developer',
    dates: 'Jun 2020 – Dec 2021',
    ore: 'redstone',
    bullets: [
      'Rewrote and modernized legacy .NET VB applications for performance and maintainability',
      'Refactored complex MS SQL stored procedures and queries to optimize execution time',
      'Developed frontend functionality in JavaScript to modernize the user experience',
      'Partnered with business analysts to design scalable replacements for outdated systems',
      'Documented system architecture and migration pathways for future cloud adoption',
    ],
  },
  {
    company: 'HRDownloads',
    location: 'London, ON',
    role: 'Senior Application Developer & Team Lead',
    dates: 'Jun 2019 – Dec 2019',
    ore: 'lapis',
    bullets: [
      'Built containerized applications using Docker to support real-time data streaming',
      'Implemented caching and query optimization for data-intensive systems',
    ],
  },
  {
    company: 'Doxim',
    location: 'London, ON',
    role: 'Senior Software Developer & Team Lead',
    dates: 'Jun 2018 – Jan 2019',
    ore: 'iron',
    bullets: [
      'Designed and deployed features for client-facing applications to improve personalization',
      'Collaborated with product owners while leading a team of developers',
    ],
  },
  {
    company: 'Union Gas',
    location: 'London, ON',
    role: 'Senior Application Developer',
    dates: 'Jan 2012 – Jun 2018',
    ore: 'gold',
    bullets: [
      'Enhanced internal data visualization dashboards to support operational decision-making',
      'Led modernization of backend and frontend systems',
      'Provided 24/7 on-call support for critical applications',
    ],
  },
  {
    company: 'GateSeven Media Group',
    location: 'London, ON',
    role: 'Application Developer',
    dates: 'Apr 2009 – May 2011',
    ore: 'iron',
    bullets: [
      'Built websites from Photoshop mockups using HTML, CSS, JavaScript, ColdFusion, AJAX, and JSON',
      'Conducted functional testing throughout the development lifecycle',
      'Maintained websites, CMS updates, and end-user documentation',
      'Implemented online transactions using Authorize.NET and Moneris',
    ],
  },
  {
    company: 'CIBC',
    location: 'Toronto, ON',
    role: 'QA Analyst',
    dates: 'Sep 2008 – Dec 2008',
    ore: 'coal',
    bullets: [
      'Created test cases from business requirements',
      'Tested banking software in English and French for bilingual compliance',
    ],
  },
  {
    company: 'illumiCell / Multiplied Media',
    location: 'Thornton, ON',
    role: 'Junior .NET Developer',
    dates: 'May 2007 – May 2008',
    ore: 'coal',
    bullets: [
      'Built and maintained dynamic websites',
      'Developed instant messenger bots for MSN Messenger and AIM',
      'Worked with object-oriented programming, CSS, unit testing, and Quality Center',
    ],
  },
];

export const achievements = [
  { title: 'Cloud Architect', desc: 'AWS Certified Solutions Architect – Associate', icon: 'pearl', rare: true, link: 'https://www.credly.com/badges/7bf82d75-90e8-46c2-a9bd-ae7bc5856897/public_url' },
  { title: 'Veteran Miner', desc: '18+ years shipping software', icon: 'pickaxe' },
  { title: 'Test Everything', desc: '~90% unit test coverage maintained', icon: 'shield' },
  { title: 'Brain Builder', desc: 'Shipped a proprietary backprop ML system', icon: 'redstone' },
  { title: 'Taming the Legacy', desc: 'Modernized VB.NET & legacy enterprise systems', icon: 'table' },
  { title: 'Party Leader', desc: 'Led teams and mentored developers', icon: 'heart' },
  { title: 'Bilingual', desc: 'Tested banking software in English & French', icon: 'map' },
  { title: 'Night Watch', desc: '24/7 on-call for critical systems', icon: 'torch' },
];

export const education = [
  {
    school: 'Georgian College of Applied Arts & Technology',
    program: 'Computer Programming',
    dates: 'Sep 2006 – Apr 2009',
    notes: 'Java, Oracle, DB2, Networking, PHP, Mainframe Technologies',
  },
  {
    school: 'H.B. Beal Secondary School',
    program: 'Specialized Fine Art Program',
    dates: 'Sep 2005 – Jun 2006',
    notes: 'Where the pixel-art eye comes from.',
  },
];
