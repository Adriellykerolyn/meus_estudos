export type StudyStatus = 'Planejado' | 'Em andamento' | 'Concluído';

export interface StudyResource {
  id: string;
  name: string;
  url: string;
  platform: string;
  status: StudyStatus;
}

export interface StudyTopic {
  id: string;
  name: string;
  resources: StudyResource[];
}

export interface StudyCategory {
  id: string;
  title: string;
  topics: StudyTopic[];
}

export const mockStudies: StudyCategory[] = [
  {
    id: 'cat-frontend',
    title: '💻 Front-end',
    topics: [
      { id: 'top-fe-htmlcss', name: 'HTML5 & CSS3', resources: [ { id: 'res-html1', name: 'Responsive Web Design', url: 'https://www.freecodecamp.org/', platform: 'freeCodeCamp', status: 'Concluído' }, { id: 'res-html2', name: 'W3Schools HTML & CSS', url: 'https://www.w3schools.com/', platform: 'W3Schools', status: 'Planejado' } ] },
      { id: 'top-fe-js', name: 'JavaScript (ES6+)', resources: [ { id: 'res-js1', name: 'Algorithms and Data Structures', url: 'https://www.freecodecamp.org/', platform: 'freeCodeCamp', status: 'Em andamento' }, { id: 'res-js2', name: 'The Modern JS Tutorial', url: 'https://javascript.info/', platform: 'javascript.info', status: 'Planejado' }, { id: 'res-js3', name: 'The Odin Project (Full Stack JS)', url: 'https://www.theodinproject.com/', platform: 'The Odin Project', status: 'Planejado' } ] },
      { id: 'top-fe-react', name: 'React', resources: [ { id: 'res-react1', name: 'Front End Libraries', url: 'https://www.freecodecamp.org/', platform: 'freeCodeCamp', status: 'Concluído' } ] },
      { id: 'top-fe-next', name: 'Next.js & Tailwind', resources: [] }
    ]
  },
  {
    id: 'cat-backend',
    title: '⚙️ Back-end',
    topics: [
      { id: 'top-node', name: 'JavaScript / Node.js', resources: [ { id: 'res-node1', name: 'JSNAD Certification', url: 'https://training.linuxfoundation.org/', platform: 'OpenJS', status: 'Planejado' } ] },
      { id: 'top-python', name: 'Python', resources: [ { id: 'res-py1', name: 'Scientific Computing', url: 'https://www.freecodecamp.org/', platform: 'freeCodeCamp', status: 'Em andamento' } ] },
      { id: 'top-java', name: 'Java + Spring Boot', resources: [ { id: 'res-jv1', name: 'Bootcamp NTT Data', url: 'https://web.dio.me/', platform: 'DIO', status: 'Em andamento' }, { id: 'res-jv2', name: 'Oracle Java SE', url: 'https://education.oracle.com/', platform: 'Oracle', status: 'Planejado' } ] }
    ]
  },
  {
    id: 'cat-dados',
    title: '📊 Dados',
    topics: [
      { id: 'top-dados-sql', name: 'SQL & Modelagem', resources: [ { id: 'res-sql1', name: 'Oracle Database SQL', url: 'https://education.oracle.com/', platform: 'Oracle', status: 'Planejado' } ] },
      { id: 'top-dados-pbi', name: 'Power BI & Python p/ Dados', resources: [ { id: 'res-pbi', name: 'PL-300: Power BI Analyst', url: 'https://learn.microsoft.com/', platform: 'Microsoft', status: 'Planejado' } ] },
      { id: 'top-dados-eng', name: 'Engenharia e Azure (DP-900)', resources: [] }
    ]
  },
  {
    id: 'cat-devops',
    title: '🚀 DevOps & Infraestrutura',
    topics: [
      { id: 'top-do-base', name: 'Fundação (Linux, Redes e Git)', resources: [ { id: 'res-linux', name: 'Introduction to Linux', url: 'https://training.linuxfoundation.org/', platform: 'Linux Foundation', status: 'Planejado' } ] },
      { id: 'top-do-containers', name: 'Containers (Docker & K8s)', resources: [ { id: 'res-docker', name: 'Docker Certified Associate', url: 'https://www.docker.com/', platform: 'Docker', status: 'Planejado' } ] },
      { id: 'top-do-cicd', name: 'CI/CD e IaC', resources: [ { id: 'res-actions', name: 'GitHub Actions', url: 'https://lab.github.com/', platform: 'GitHub', status: 'Planejado' } ] },
      { id: 'top-do-finops', name: 'Cloud Financial Management', resources: [ { id: 'res-finops', name: 'FinOps Foundation', url: 'https://learn.finops.org/', platform: 'FinOps.org', status: 'Planejado' } ] },
      { id: 'top-do-cloud', name: 'Nuvem Pública (AWS/Azure)', resources: [ { id: 'res-aws-ca', name: 'AWS Practice Exams', url: 'https://clouding.academy/', platform: 'Clouding Academy', status: 'Planejado' } ] }
    ]
  },
  {
    id: 'cat-ia',
    title: '🧠 Inteligência Artificial',
    topics: [
      {
        id: 'top-ia-fund',
        name: 'Fundação (Estatística e Python)',
        resources: [
          { id: 'res-ia-math', name: 'Khan Academy - Estatística', url: 'https://pt.khanacademy.org/', platform: 'Khan Academy', status: 'Planejado' },
          { id: 'res-ia-eai', name: 'Elements of AI', url: 'https://www.elementsofai.com/', platform: 'Universidade de Helsinki', status: 'Planejado' }
        ]
      },
      {
        id: 'top-ia-ml',
        name: 'Machine Learning Clássico',
        resources: [
          { id: 'res-ia-ml', name: 'Machine Learning Specialization', url: 'https://www.coursera.org/', platform: 'DeepLearning.AI', status: 'Planejado' }
        ]
      },
      {
        id: 'top-ia-gen',
        name: 'IA Generativa e LLMs',
        resources: [
          { id: 'res-ia-goog', name: 'Certificado Profissional IA Google', url: 'https://www.coursera.org/', platform: 'Coursera / CIEE', status: 'Em andamento' },
          { id: 'res-ia-az', name: 'AI-900: Azure AI Fundamentals', url: 'https://learn.microsoft.com/', platform: 'Microsoft', status: 'Planejado' },
          { id: 'res-ia-prompt', name: 'Engenharia de Prompt (Extensão)', url: 'https://www.usp.br/', platform: 'USP', status: 'Concluído' }
        ]
      },
      {
        id: 'top-ia-sys',
        name: 'IA Aplicada (APIs & RAG)',
        resources: [
          { id: 'res-ia-rag', name: 'LangChain Docs', url: 'https://python.langchain.com/', platform: 'Docs', status: 'Planejado' }
        ]
      },
      {
        id: 'top-ia-diff',
        name: 'Diferencial (Geoprocessamento e Ética)',
        resources: [
          { id: 'res-ia-resp', name: 'Responsible AI', url: 'https://learn.microsoft.com/', platform: 'Microsoft', status: 'Planejado' },
          { id: 'res-ia-owasp', name: 'OWASP Top 10 for LLMs', url: 'https://owasp.org/', platform: 'OWASP', status: 'Planejado' }
        ]
      }
    ]
  },
  {
    id: 'cat-idiomas',
    title: '🌍 Idiomas',
    topics: [
      {
        id: 'top-idiomas-en',
        name: 'Inglês (Meta: C1)',
        resources: [
          { id: 'res-idiomas-en1', name: 'Prática Diária de Vocabulário', url: 'https://www.duolingo.com/', platform: 'Duolingo', status: 'Em andamento' },
          { id: 'res-idiomas-en2', name: 'Conversação Avançada (C1)', url: 'https://gemini.google.com/', platform: 'Gemini Live / ChatGPT', status: 'Em andamento' }
        ]
      },
      {
        id: 'top-idiomas-es',
        name: 'Espanhol (Meta: C1)',
        resources: [
          { id: 'res-idiomas-es1', name: 'Prática Diária de Vocabulário', url: 'https://www.duolingo.com/', platform: 'Duolingo', status: 'Em andamento' },
          { id: 'res-idiomas-es2', name: 'Conversação Avançada (C1)', url: 'https://gemini.google.com/', platform: 'Gemini Live / ChatGPT', status: 'Planejado' }
        ]
      },
      {
        id: 'top-idiomas-fr',
        name: 'Francês (Meta: B2)',
        resources: [
          { id: 'res-idiomas-fr1', name: 'Prática Diária de Vocabulário', url: 'https://www.duolingo.com/', platform: 'Duolingo', status: 'Planejado' },
          { id: 'res-idiomas-fr2', name: 'Treino de Fluência (B2)', url: 'https://gemini.google.com/', platform: 'Gemini Live / ChatGPT', status: 'Planejado' }
        ]
      },
      {
        id: 'top-idiomas-it',
        name: 'Italiano (Meta: B2)',
        resources: [
          { id: 'res-idiomas-it1', name: 'Prática Diária de Vocabulário', url: 'https://www.duolingo.com/', platform: 'Duolingo', status: 'Planejado' },
          { id: 'res-idiomas-it2', name: 'Treino de Fluência (B2)', url: 'https://gemini.google.com/', platform: 'Gemini Live / ChatGPT', status: 'Planejado' }
        ]
      }
    ]
  }
];
