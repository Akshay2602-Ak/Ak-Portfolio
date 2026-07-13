// Every field here is sourced directly from Akshaya Kumar T's resume.
// No companies, dates, certifications, or achievements are invented.

import { link } from "framer-motion/client"
import { Link } from "lucide-react"

export const profile = {
  name: 'Akshay Kumar T',
  role: 'Oracle Apps DBA · Cloud & Networking · Automation',
  phone: '+91 9363867353',
  email: 'takshaykumar26022004@gmail.com',
  location: 'Coimbatore, India',
  linkedin: 'https://www.linkedin.com/in/akshay-kumar-t-37bb9b285',
  github: 'https://github.com/Akshay2602-Ak',
  tagline:
    'Software Engineer specializing in Oracle Applications DBA, enterprise automation, and full-stack development — with a growing focus on cloud, networking, and AI-driven operations.',
  summary:
    'Software Engineer with hands-on experience in Oracle Applications DBA, automation, and full-stack web development. Strong foundation in Python, networking, cloud computing, and enterprise infrastructure. Experienced with Oracle EBS R12, Cisco networking, AWS, GCP, Linux, and CI/CD. Skilled in infrastructure automation, troubleshooting, and scripting, with a growing focus on Artificial Intelligence and enterprise cloud solutions.',
}

export const skillCategories = [
  {
    id: 'programming',
    label: 'Programming',
    context: 'Used in professional & freelance projects',
    skills: ['Python', 'PL/SQL', 'HTML5', 'CSS3', 'Tailwind CSS', 'Shell Script', 'JavaScript'],
  },
  {
    id: 'oracle',
    label: 'Oracle',
    context: 'Applied daily as Oracle Apps DBA at CTS',
    skills: [
      'Oracle EBS R12',
      'Oracle SQL',
      'PL/SQL',
      'RMAN',
      'Data Guard',
      'Flashback Database',
      'Alert Log Monitoring',
      'Oracle SQL Developer',
    ],
  },
  {
    id: 'networking',
    label: 'Networking',
    context: 'Hands-on labs, Networking & Cloud Fundamentals 2026',
    skills: [
      'TCP/IP',
      'OSI Model',
      'IPv4/IPv6',
      'Subnetting (VLSM, CIDR)',
      'Static Routing',
      'OSPF',
      'RIP',
      'EIGRP (Concepts)',
      'STP',
      'ACLs',
      'ARP',
      'ICMP',
      'DHCP',
      'SLAAC',
      'Wildcard Masks',
    ],
  },
  {
    id: 'cisco',
    label: 'Cisco',
    context: 'Cisco Packet Tracer topology labs',
    skills: [
      'Cisco IOS CLI',
      'Cisco Packet Tracer',
      'Router & Switch Configuration',
      'Network Troubleshooting',
      'Connectivity Testing',
    ],
  },
  {
    id: 'cloud-devops',
    label: 'Cloud & DevOps',
    context: 'Freelance deployment + cloud fundamentals training',
    skills: ['AWS', 'GCP', 'Docker', 'CI/CD', 'Linux (Ubuntu)', 'Git', 'GitHub', 'Vercel'],
  },
  {
    id: 'ai',
    label: 'AI & GenAI',
    context: 'Applied at CTS + internal GenAI certification',
    skills: ['LLM Fundamentals', 'Generative AI Tools', 'AI-based Process Automation', 'Prompt Engineering'],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    context: 'Daily working tools',
    skills: ['VS Code', 'Arduino', 'Oracle SQL Developer', 'Cisco Packet Tracer'],
  },
]

export const experience = [
  {
    company: 'Cognizant Technology Solutions (CTS)',
    role: 'Oracle Apps DBA',
    duration: 'Oct 2025 – Apr 2026',
    technologies: ['Oracle EBS R12', 'RMAN', 'Shell Script', 'Flashback Database', 'Generative AI'],
    responsibilities: [
      'Managed Oracle EBS R12 database administration, including backup, recovery, and maintenance using RMAN.',
      'Automated database operations through Shell scripting, reducing manual DBA effort by 30%.',
      'Administered Oracle EBS Application and Database tiers, including cloning, patching, and configuration management.',
      'Implemented Flashback Database and Disaster Recovery (DR) solutions to support business continuity and RTO/RPO objectives.',
      'Applied Generative AI concepts to automate Oracle Apps operational workflows.',
    ],
    achievement: '30% reduction in manual DBA effort through Shell automation.',
  },
  {
    company: 'Freelance Web Developer',
    role: 'Aesthete Canvaz Portfolio Website',
    duration: '2024 – 2025',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'GitHub', 'Vercel'],
    responsibilities: [
      'Designed, developed, and deployed a responsive portfolio website using HTML5, Tailwind CSS, and JavaScript.',
      'Managed version control and production deployment using GitHub and Vercel.',
    ],
    achievement: 'Shipped and deployed a live client site end-to-end, from design to production hosting.',
  },
  {
    company: 'Technical Training & Hands-on Labs',
    role: 'Networking & Cloud Fundamentals',
    duration: '2026',
    technologies: ['Cisco Packet Tracer', 'Cisco IOS CLI', 'AWS', 'GCP'],
    responsibilities: [
      'Designed and configured Cisco Packet Tracer network topologies using IPv4/IPv6, static routing, and Cisco IOS CLI.',
      'Configured routers, switches, STP, Root Bridge election, Port Cost, and Layer 2 redundancy.',
      'Implemented Standard and Extended ACLs with wildcard masks and validated traffic using Cisco diagnostic commands.',
      'Performed network troubleshooting using ping, traceroute, and Cisco IOS show commands.',
      'Applied networking concepts including TCP/IP, OSI, Subnetting (VLSM/CIDR), ARP, ICMP, NDP, TCP/UDP, RIP, OSPF, and EIGRP.',
      'Gained foundational knowledge of AWS and GCP services, including compute, storage, networking, and cloud architecture.',
    ],
    achievement: 'Built full Layer 2/3 topologies from scratch, including redundancy and ACL security.',
  },
]

export const projects = [
  {
    title: 'Creators Career Development Platform',
    period: '2024 – 2025',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    liveDemo: 'https://creators-career-web-development.vercel.app/login',
    description:
      'A full-stack web platform enabling creators to build customizable profiles, showcase projects, and access career development resources with a responsive, accessible UI.',
    features: [
      'Customizable creator profiles',
      'Project showcase pages',
      'Career development resource library',
      'Responsive, accessible UI',
    ],
    architecture:
      'RESTful APIs built with Node.js and MongoDB handle dynamic content, user profiles, and project data at scale.',
    outcome: 'Hands-on experience designing REST APIs and modeling user/content data for a multi-user platform.',
  },
  {
    title: 'Oracle Alert Log Monitoring Automation',
    period: '2025',
    technologies: ['Shell Script', 'Oracle DB'],
    description:
      'An automated Shell script solution for real-time Oracle database alert log monitoring, significantly reducing error detection time and manual DBA intervention.',
    features: ['Real-time alert log scanning', 'Automated error detection', 'Reduced manual DBA checks'],
    architecture: 'Shell scripts poll and parse the Oracle alert log, flagging errors for faster DBA response.',
    outcome: 'Directly cut error-detection time in production Oracle environments.',
  },
  {
    title: 'Responsive Full-Stack Web Application',
    period: '2023 – 2024',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveDemo: 'https://aesthete-canvaz-portfolio.vercel.app/',
    description:
      'A cross-device responsive web application with a focus on accessibility, clean code architecture, and performance optimization, built during full-stack training.',
    features: ['Cross-device responsive layout', 'Accessible markup', 'Performance-optimized front end'],
    architecture: 'Clean, componentized HTML/CSS/JS structure emphasizing maintainability.',
    outcome: 'Strengthened fundamentals in accessibility and performance-focused front-end architecture.',
  },
  {
    title: 'Autonomous Line Follower Robot',
    period: 'SIH Hackathon 2023 – 2024',
    technologies: ['Arduino', 'C++', 'IR Sensors'],
    liveDemo:'https://drive.google.com/file/d/1VtnpBbPXuGm2Ww7ZvR-n83_sZlLVjgd7/view?usp=sharing',
    description:
      'An autonomous line-follower robot using Arduino microcontrollers and IR sensors, demonstrated at the South Indian Hackathon (SIH).',
    features: ['IR sensor-based line detection', 'Real-time control loop', 'Embedded C++ firmware'],
    architecture: 'Arduino microcontroller reads IR sensor arrays and drives motor control in real time.',
    outcome: 'Showcased embedded systems design and real-time control expertise at a national hackathon.',
  },
]

export const education = [
  {
    degree: 'Bachelor of Science (B.Sc.) in Computer Technology',
    school: 'KG College of Arts & Science, Coimbatore',
    duration: '2022 – 2025',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    school: 'CMS Matriculation Hr Sec School, Coimbatore',
    duration: '2021 – 2022',
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    school: 'CMS Matriculation Hr Sec School, Coimbatore',
    duration: '2019 – 2020',
  },
]

export const certifications = [
  { title: 'Oracle Database Administration (19c & 21c)', org: 'Oracle', link: 'https://www.udemy.com/certificate/UC-04baf00b-4756-4759-8113-fd6a805d6daa' },
  { title: 'Oracle Apps DBA (EBS R12.2)', org: 'Oracle', link: 'https://www.udemy.com/certificate/UC-62acc7d2-04cd-498f-90b1-e6c9e9c64ffb/' },
  { title: 'PL/SQL Programming', org: 'Oracle', link: 'https://www.udemy.com/certificate/UC-6d83ca13-c7d3-4679-aff2-a58af897631b/' },
  { title: 'Oracle SQL', org: 'Oracle', link: 'https://www.udemy.com/certificate/UC-99beed8b-0196-4522-afba-f174d756ea43' },
  {
    title: 'CCNA-Level Networking Fundamentals',
    org: 'Cisco IOS, IPv4/IPv6, Routing, Switching, STP, ACLs & Cisco Packet Tracer', 
  },
  { title: 'AWS & GCP Fundamentals', org: 'AWS / GCP' },
  { title: 'GenAI & LLM Fundamentals', org: 'Cognizant Technology Solutions — Internal Upskilling Program' },
  {
    title: 'South Indian Hackathon (SIH) 2023–2024',
    org: 'Developed an Autonomous Line Follower Robot using Arduino and IR Sensors',
  },
  {
    title: 'Freelance Web Development',
    org: 'Designed and deployed the Aesthete Canvaz Portfolio Website on Vercel',
    link: 'https://aesthete-canvaz-portfolio.vercel.app/'
  },
]

export const oracleLab = {
  intro:
    'Enterprise Oracle EBS R12 administration: backup and recovery, disaster recovery, and proactive monitoring, applied in a live production environment at Cognizant Technology Solutions.',
  capabilities: [
    { title: 'Oracle EBS R12', detail: 'Application and Database tier administration, cloning, patching, and configuration management.' },
    { title: 'RMAN', detail: 'Backup and recovery operations for Oracle databases.' },
    { title: 'Data Guard', detail: 'Listed core Oracle DBA skill for high-availability database environments.' },
    { title: 'Flashback Database', detail: 'Implemented for Disaster Recovery solutions supporting RTO/RPO objectives.' },
    { title: 'Alert Log Monitoring', detail: 'Engineered a Shell script automation solution for real-time alert log monitoring.' },
    { title: 'Shell Automation', detail: 'Automated database operations, reducing manual DBA effort by 30%.' },
  ],
}

export const networkingLab = {
  intro:
    'Hands-on Cisco Packet Tracer topologies covering routing, switching, redundancy, and access control — built during dedicated networking and cloud fundamentals training in 2026.',
  concepts: [
    { title: 'Addressing', items: ['IPv4/IPv6', 'Subnetting (VLSM, CIDR)', 'Wildcard Masks'] },
    { title: 'Routing', items: ['Static Routing', 'OSPF', 'RIP', 'EIGRP (Concepts)'] },
    { title: 'Switching', items: ['STP', 'Root Bridge Election', 'Port Cost', 'Layer 2 Redundancy'] },
    { title: 'Security', items: ['Standard ACLs', 'Extended ACLs', 'Wildcard Masks'] },
    { title: 'Protocols', items: ['TCP/IP', 'OSI Model', 'ARP', 'ICMP', 'NDP', 'DHCP', 'SLAAC'] },
    { title: 'Diagnostics', items: ['Cisco IOS CLI show commands', 'ping', 'traceroute', 'Connectivity Testing'] },
  ],
}

export const cloudDevops = {
  intro:
    'Foundational knowledge of AWS and GCP compute, storage, and networking services, paired with practical Git/GitHub, Docker, CI/CD, and Linux experience from freelance and DBA work.',
  workflow: [
    { title: 'Source Control', detail: 'Git & GitHub for version control across freelance and personal projects.' },
    { title: 'Containers', detail: 'Docker for packaging and running applications consistently.' },
    { title: 'CI/CD', detail: 'CI/CD pipeline exposure alongside Jenkins in enterprise infrastructure context.' },
    { title: 'Linux', detail: 'Ubuntu-based Linux administration and scripting.' },
    { title: 'Cloud Platforms', detail: 'AWS and GCP fundamentals: compute, storage, networking, and cloud architecture.' },
    { title: 'Deployment', detail: 'Production deployment and hosting via Vercel.' },
  ],
}

export const aiAutomation = {
  intro:
    'A growing specialization in Generative AI applied to enterprise operations — from Oracle Apps workflow automation to prompt engineering fundamentals.',
  pillars: [
    { title: 'LLM Fundamentals', detail: 'Core concepts of large language models and how they can be applied in enterprise workflows.' },
    { title: 'Prompt Engineering', detail: 'Structuring prompts to reliably automate and support operational tasks.' },
    { title: 'AI-based Process Automation', detail: 'Applying Generative AI concepts to automate Oracle Apps operational workflows at Cognizant.' },
    { title: 'GenAI & LLM Fundamentals Certification', detail: 'Completed via Cognizant Technology Solutions Internal Upskilling Program.' },
  ],
}
