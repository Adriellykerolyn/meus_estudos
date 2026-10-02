export type ProjectType = 'Front-end' | 'Back-end' | 'Dados' | 'DevOps' | 'Nuvem' | 'QA' | 'Full-stack' | 'IA';

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  githubUrl?: string;
  deployUrl?: string;
  imageUrl?: string;
}

export const mockProjects: Project[] = [
  // --- BLOCO 1: FRONT-END ---
  {
    id: 'proj-1',
    title: '1. Painel de Indicadores Ambientais Municipais',
    type: 'Front-end',
    shortDescription: 'Dashboard para visualização de indicadores ambientais de um município fictício.',
    fullDescription: 'Destaques para recrutador: Demonstra capacidade de transformar dado bruto em decisão visual — habilidade direta do seu trabalho real na Secretaria de Sustentabilidade, agora documentada como projeto autoral.',
    technologies: ['React', 'TypeScript', 'Recharts', 'Tailwind']
  },
  {
    id: 'proj-2',
    title: '2. Catálogo de Roteiros Turísticos Sustentáveis',
    type: 'Front-end',
    shortDescription: 'Busca e filtro de roteiros categorizados por impacto ambiental.',
    fullDescription: 'Destaques para recrutador: Une front-end sólido com domínio de negócio em turismo — um diferencial raro que poucos candidatos full stack conseguem provar com experiência real por trás.',
    technologies: ['React', 'React Router', 'CSS Modules']
  },
  {
    id: 'proj-3',
    title: '3. Simulador de Risco Climático por Região',
    type: 'Front-end',
    shortDescription: 'Mapa interativo de risco climático (calor, seca, chuva intensa).',
    fullDescription: 'Destaques para recrutador: Reaproveita e evolui o conceito do IRIF (projeto real) como peça de portfólio pública, mostrando consistência de especialização em geovisualização.',
    technologies: ['React', 'Leaflet', 'Context API']
  },
  {
    id: 'proj-4',
    title: '4. Formulário Inteligente de Coleta de Dados Públicos',
    type: 'Front-end',
    shortDescription: 'Formulário multi-etapas para coleta de dados de capacitação de servidores.',
    fullDescription: 'Destaques para recrutador: Prova domínio de validação em tempo real e boas práticas de UX para dados sensíveis — tema recorrente em vagas corporativas.',
    technologies: ['React', 'React Hook Form', 'Zod']
  },
  {
    id: 'proj-5',
    title: '5. Landing Page — Portfólio Pessoal',
    type: 'Front-end',
    shortDescription: 'Página pessoal com storytelling de dados.',
    fullDescription: 'Destaques para recrutador: É o próprio cartão de visitas. Mostra front-end refinado e comunicação (storytelling de turismo para tecnologia).',
    technologies: ['React', 'Framer Motion', 'Vite']
  },

  // --- BLOCO 2: BACK-END COM NODE.JS ---
  {
    id: 'proj-6',
    title: '6. API de Cadastro de Pontos Turísticos',
    type: 'Back-end',
    shortDescription: 'API REST para pontos turísticos com autenticação e paginação.',
    fullDescription: 'Destaques para recrutador: Primeiro projeto de back-end puro em Node — mostra que você sai do "só front" e assume o ciclo completo de uma aplicação.',
    technologies: ['Node.js', 'Express', 'PostgreSQL']
  },
  {
    id: 'proj-7',
    title: '7. Serviço de Alertas Climáticos via Webhook',
    type: 'Back-end',
    shortDescription: 'Serviço que consulta API pública de clima e dispara e-mails de alerta.',
    fullDescription: 'Destaques para recrutador: Demonstra automação de processos com Node — extensão direta do trabalho de automação que você já faz em Python.',
    technologies: ['Node.js', 'node-cron', 'Nodemailer']
  },
  {
    id: 'proj-8',
    title: '8. API de Gestão de Eventos Institucionais',
    type: 'Back-end',
    shortDescription: 'API para organização de eventos públicos e feiras.',
    fullDescription: 'Destaques para recrutador: Conecta com sua experiência real (ABAV, Expo Rio) — mostra que os sistemas que você constrói resolvem problemas que você já viveu.',
    technologies: ['Node.js', 'Express', 'JWT', 'MongoDB']
  },
  {
    id: 'proj-9',
    title: '9. Microsserviço de Geocodificação Simplificada',
    type: 'Back-end',
    shortDescription: 'Serviço que converte endereço em coordenadas com cache local.',
    fullDescription: 'Destaques para recrutador: Mostra raciocínio de performance e custo (cache), competência técnica valorizada em qualquer vaga back-end.',
    technologies: ['Node.js', 'Express', 'API Externa']
  },
  {
    id: 'proj-10',
    title: '10. Sistema de Fila de Atendimento Digital',
    type: 'Back-end',
    shortDescription: 'Fila em tempo real para atendimento público via WebSocket.',
    fullDescription: 'Destaques para recrutador: Prova domínio de comunicação em tempo real (Socket.io) e resolve um problema real de atendimento.',
    technologies: ['Node.js', 'Socket.io', 'Express']
  },

  // --- BLOCO 3: BACK-END COM PYTHON ---
  {
    id: 'proj-11',
    title: '11. Automação de Cruzamento de Dados Territoriais',
    type: 'Dados',
    shortDescription: 'Script que cruza base de escolas com áreas de risco ambiental.',
    fullDescription: 'Destaques para recrutador: Versão pública do tipo de automação que você já faz profissionalmente, sem expor dados sigilosos.',
    technologies: ['Python', 'Pandas', 'GeoPandas']
  },
  {
    id: 'proj-12',
    title: '12. API de Análise de Dados Climáticos Históricos',
    type: 'Back-end',
    shortDescription: 'API de previsão e estatística climática histórica.',
    fullDescription: 'Destaques para recrutador: Conecta diretamente com a ideia do projeto de turismo astronômico. Transforma dado histórico em previsão probabilística.',
    technologies: ['Python', 'FastAPI', 'Pandas']
  },
  {
    id: 'proj-13',
    title: '13. Bot de Relatórios Automáticos via Google Sheets',
    type: 'Dados',
    shortDescription: 'Script que lê planilha, gera relatório e escreve insights.',
    fullDescription: 'Destaques para recrutador: Evolução do trabalho real de integração com Google Sheets. Mostra domínio em linguagens diferentes para a mesma automação.',
    technologies: ['Python', 'gspread', 'Google Apps Script']
  },
  {
    id: 'proj-14',
    title: '14. Pipeline de Limpeza de Dados Públicos',
    type: 'Dados',
    shortDescription: 'Pipeline de regras de limpeza e validação automática de dados sujos.',
    fullDescription: 'Destaques para recrutador: Data quality é requisitado. Este projeto prova rigor técnico além da automação simples.',
    technologies: ['Python', 'Pandas', 'Great Expectations']
  },
  {
    id: 'proj-15',
    title: '15. Classificador Simples de Risco (Machine Learning)',
    type: 'IA',
    shortDescription: 'Árvore de decisão para prever risco de incêndio com base no clima.',
    fullDescription: 'Destaques para recrutador: Conecta direto com o IRIF real e com os cursos da USP — prova aplicação real do estudo de ML.',
    technologies: ['Python', 'Scikit-learn', 'Pandas']
  },

  // --- BLOCO 4: JAVA & SPRING BOOT ---
  {
    id: 'proj-16',
    title: '16. API REST de Gestão de Servidores Públicos',
    type: 'Back-end',
    shortDescription: 'CRUD completo com relacionamentos de servidores e cursos.',
    fullDescription: 'Destaques para recrutador: Clássico de entrevista Java. Mostra que aplicou o bootcamp num caso de uso real do seu domínio.',
    technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL']
  },
  {
    id: 'proj-17',
    title: '17. Sistema de Autenticação com Spring Security',
    type: 'Back-end',
    shortDescription: 'Login com controle de papéis (admin, gestor, servidor).',
    fullDescription: 'Destaques para recrutador: Segurança é obrigatório em vagas pleno. Você não fica só no CRUD básico.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT']
  },
  {
    id: 'proj-18',
    title: '18. API de Reservas de Espaços Públicos',
    type: 'Back-end',
    shortDescription: 'Reserva de salas e quadras com validação de conflito de horário.',
    fullDescription: 'Destaques para recrutador: Validação de conflito é clássico em teste técnico. Prova raciocínio lógico forte.',
    technologies: ['Java', 'Spring Boot', 'Hibernate']
  },
  {
    id: 'proj-19',
    title: '19. Serviço de Geração de Relatórios em PDF',
    type: 'Back-end',
    shortDescription: 'Gera relatórios de sustentabilidade em PDF.',
    fullDescription: 'Destaques para recrutador: Demanda constante corporativa. Mostra que você cobre a "última milha" que muitos back-ends ignoram.',
    technologies: ['Java', 'Spring Boot', 'JasperReports']
  },

  // --- BLOCO 5: DADOS E SQL ---
  {
    id: 'proj-20',
    title: '20. Modelagem de Banco para Gestão Turística',
    type: 'Dados',
    shortDescription: 'Modelagem completa e diagrama ER.',
    fullDescription: 'Destaques para recrutador: Sustenta na prática o know-how do certificado Oracle.',
    technologies: ['PostgreSQL', 'SQL', 'Diagrama ER']
  },
  {
    id: 'proj-21',
    title: '21. Conjunto de Queries Avançadas',
    type: 'Dados',
    shortDescription: 'Repositório de rankings, médias móveis e CTEs em base pública.',
    fullDescription: 'Destaques para recrutador: Window functions e CTEs separam júnior de pleno em entrevistas.',
    technologies: ['PostgreSQL', 'SQL']
  },
  {
    id: 'proj-22',
    title: '22. Data Warehouse Simplificado (Sustentabilidade)',
    type: 'Dados',
    shortDescription: 'Estrutura Fato/Dimensão para indicadores, conectada ao Looker Studio.',
    fullDescription: 'Destaques para recrutador: Traz a camada de banco de dados para a sua experiência real já comprovada de visualização no Looker Studio.',
    technologies: ['PostgreSQL', 'SQL', 'Looker Studio']
  },

  // --- BLOCO 6: NUVEM ---
  {
    id: 'proj-23',
    title: '23. Deploy de API na Nuvem com Azure',
    type: 'Nuvem',
    shortDescription: 'Deploy real com passo a passo no Azure App Service.',
    fullDescription: 'Destaques para recrutador: Prova prática do AZ-900. Muitos têm certificado, mas nunca fizeram deploy real.',
    technologies: ['Azure App Service', 'Node.js/Python']
  },
  {
    id: 'proj-24',
    title: '24. Armazenamento com AWS S3',
    type: 'Nuvem',
    shortDescription: 'Script que faz upload, download e listagem em bucket S3.',
    fullDescription: 'Destaques para recrutador: Storage em nuvem é competência básica esperada, e complementa sua jornada Azure.',
    technologies: ['AWS S3', 'Python/boto3', 'Node.js']
  },

  // --- BLOCO 7: DEVOPS E CONTAINERS ---
  {
    id: 'proj-25',
    title: '25. Pipeline CI/CD com GitHub Actions',
    type: 'DevOps',
    shortDescription: 'Deploy e testes automáticos a cada push na branch principal.',
    fullDescription: 'Destaques para recrutador: Demonstra visão de ciclo de vida completo do software.',
    technologies: ['GitHub Actions', 'Docker', 'Cloud']
  },
  {
    id: 'proj-26',
    title: '26. Containerização Full Stack com Docker',
    type: 'DevOps',
    shortDescription: 'Empacotamento de API + Banco usando Docker Compose.',
    fullDescription: 'Destaques para recrutador: Evita a temida pergunta "você sabe usar container?" virar ponto fraco na entrevista.',
    technologies: ['Docker', 'Docker Compose']
  },
  {
    id: 'proj-27',
    title: '27. Ambiente Padronizado com Dev Containers',
    type: 'DevOps',
    shortDescription: 'Configuração de ambiente via VS Code Dev Containers.',
    fullDescription: 'Destaques para recrutador: Preocupação invisível com colaboração e padronização da equipe.',
    technologies: ['Docker', 'VS Code Dev Containers']
  },

  // --- BLOCO 8: TESTES E QA ---
  {
    id: 'proj-28',
    title: '28. Suíte de Testes Unitários (Node.js)',
    type: 'QA',
    shortDescription: 'Testes cobrindo casos de erro e sucesso em uma API.',
    fullDescription: 'Destaques para recrutador: Testes são a lacuna mais citada em currículos. Você preenche ela com um projeto dedicado.',
    technologies: ['Jest', 'Supertest']
  },
  {
    id: 'proj-29',
    title: '29. Testes de Componentes React',
    type: 'QA',
    shortDescription: 'Validação de comportamento de formulário e botões no front.',
    fullDescription: 'Destaques para recrutador: Mostra maturidade de front-end além da tela bonita, focando em manutenção.',
    technologies: ['React Testing Library', 'Jest']
  },

  // --- BLOCO 9: INTEGRADOR ---
  {
    id: 'proj-30',
    title: '30. Plataforma Completa de Turismo Sustentável (Vitrine)',
    type: 'Full-stack',
    shortDescription: 'A plataforma definitiva integrando recomendação e gestão turística.',
    fullDescription: 'Destaques para recrutador: O projeto carro-chefe. Une back, front, banco e nuvem no SEU domínio exclusivo (turismo sustentável + gestão pública). É sua "prova de conceito" final do estudo de 2026.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS/Azure']
  },

  // === DIVERSIDADE E IMPACTO (Projetos Universais) ===
  
  // --- BLOCO 1: FRONT-END ---
  {
    id: 'proj-31',
    title: '31. Calculadora de Orçamento Doméstico Interativa',
    type: 'Front-end',
    shortDescription: 'App de receitas, despesas e gráficos de categorias.',
    fullDescription: 'Destaques para recrutador: Tema universal (finanças pessoais) que qualquer recrutador entende de cara — mostra domínio de manipulação de estado e visualização de dados sem precisar de contexto explicado.',
    technologies: ['React', 'TypeScript', 'Chart.js']
  },
  {
    id: 'proj-32',
    title: '32. Rastreador de Hábitos com Gamificação',
    type: 'Front-end',
    shortDescription: 'Aplicativo de hábitos diários com sequência de dias e conquistas visuais.',
    fullDescription: 'Destaques para recrutador: Produto consumer app — prova sensibilidade de UX e capacidade de criar engajamento, habilidade valorizada em startups e produtos B2C.',
    technologies: ['React', 'LocalStorage', 'Framer Motion']
  },
  {
    id: 'proj-33',
    title: '33. Comparador de Preços entre Lojas',
    type: 'Front-end',
    shortDescription: 'Interface que busca produtos e compara preços simulados entre lojas.',
    fullDescription: 'Destaques para recrutador: Consumo de API externa bem tratado (loading, erro, cache) é item recorrente em teste técnico.',
    technologies: ['React', 'Fake Store API']
  },
  {
    id: 'proj-34',
    title: '34. Dashboard de Produtividade Pessoal',
    type: 'Front-end',
    shortDescription: 'Quadro Kanban de tarefas com drag-and-drop.',
    fullDescription: 'Destaques para recrutador: Drag-and-drop é um desafio de front-end muito citado em entrevista.',
    technologies: ['React', 'dnd-kit', 'Zustand']
  },
  {
    id: 'proj-35',
    title: '35. Plataforma de Avaliação de Filmes/Séries',
    type: 'Front-end',
    shortDescription: 'Busca de filmes com sistema de "minha lista".',
    fullDescription: 'Destaques para recrutador: Projeto clássico mas muito bem executado (com React Query pra cache) mostra que aplica boas práticas modernas.',
    technologies: ['React', 'TMDb API', 'React Query']
  },

  // --- BLOCO 2: BACK-END COM NODE.JS ---
  {
    id: 'proj-36',
    title: '36. API de Controle Financeiro Pessoal',
    type: 'Back-end',
    shortDescription: 'API com autenticação, transações e relatórios de gastos.',
    fullDescription: 'Destaques para recrutador: Domínio universalmente compreendido + autenticação real. Dá pra falar sobre esse projeto em qualquer entrevista.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT']
  },
  {
    id: 'proj-37',
    title: '37. Sistema de Encurtador de URLs',
    type: 'Back-end',
    shortDescription: 'API que encurta URLs e conta cliques, com cache.',
    fullDescription: 'Destaques para recrutador: Clássico de entrevista técnica. Usar Redis mostra que você pensa em performance.',
    technologies: ['Node.js', 'Express', 'Redis', 'PostgreSQL']
  },
  {
    id: 'proj-38',
    title: '38. API de Marketplace Simples',
    type: 'Back-end',
    shortDescription: 'API com produtos, carrinho e cálculo de frete.',
    fullDescription: 'Destaques para recrutador: E-commerce é um dos domínios que mais contratam. Amplia o leque de vagas.',
    technologies: ['Node.js', 'Express', 'MongoDB']
  },
  {
    id: 'proj-39',
    title: '39. Serviço de Notificações Push',
    type: 'Back-end',
    shortDescription: 'Serviço que envia push notification do navegador.',
    fullDescription: 'Destaques para recrutador: Notificação em tempo real é muito pedida e poucos candidatos implementam de verdade.',
    technologies: ['Node.js', 'Web Push API', 'Express']
  },
  {
    id: 'proj-40',
    title: '40. API de Agendamento de Serviços',
    type: 'Back-end',
    shortDescription: 'Sistema de agendamento com verificação de horários.',
    fullDescription: 'Destaques para recrutador: Regra de negócio de agenda (conflito) é tema recorrente em teste técnico pleno.',
    technologies: ['Node.js', 'Express', 'PostgreSQL']
  },

  // --- BLOCO 3: BACK-END COM PYTHON ---
  {
    id: 'proj-41',
    title: '41. API de Recomendação de Filmes com ML',
    type: 'IA',
    shortDescription: 'API que retorna recomendações baseadas em similaridade.',
    fullDescription: 'Destaques para recrutador: Combina back-end com ML aplicado. Mostra que não só fez o curso, mas aplicou.',
    technologies: ['Python', 'FastAPI', 'Scikit-learn']
  },
  {
    id: 'proj-42',
    title: '42. Bot de Monitoramento de Preços',
    type: 'Back-end',
    shortDescription: 'Script que monitora preço via web scraping e alerta quedas.',
    fullDescription: 'Destaques para recrutador: Web scraping responsável é habilidade procurada para vagas de automação e RPA.',
    technologies: ['Python', 'BeautifulSoup', 'SQLite']
  },
  {
    id: 'proj-43',
    title: '43. API de Análise de Sentimento em Avaliações',
    type: 'IA',
    shortDescription: 'API que classifica sentimento de texto (positivo/negativo).',
    fullDescription: 'Destaques para recrutador: Processamento de linguagem natural (NLP) direto ao ponto num problema de negócio real.',
    technologies: ['Python', 'FastAPI', 'NLTK']
  },
  {
    id: 'proj-44',
    title: '44. Sistema de Fila de Processamento',
    type: 'Back-end',
    shortDescription: 'API que processa tarefas pesadas em segundo plano.',
    fullDescription: 'Destaques para recrutador: Processamento assíncrono separa júnior de pleno em entrevistas Python.',
    technologies: ['Python', 'Celery', 'Redis', 'FastAPI']
  },
  {
    id: 'proj-45',
    title: '45. Dashboard de Análise de Vendas',
    type: 'Dados',
    shortDescription: 'Dashboard gerando gráficos interativos a partir de planilhas.',
    fullDescription: 'Destaques para recrutador: Streamlit é muito usado em vagas de dados para transformar análises em ferramentas rápidas.',
    technologies: ['Python', 'Pandas', 'Streamlit']
  },

  // --- BLOCO 4: JAVA & SPRING BOOT ---
  {
    id: 'proj-46',
    title: '46. API de Biblioteca Digital',
    type: 'Back-end',
    shortDescription: 'Empréstimo de livros com cálculo de prazos e multas.',
    fullDescription: 'Destaques para recrutador: Regra de negócio com data e cálculo é ótimo pra mostrar raciocínio lógico em testes.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL']
  },
  {
    id: 'proj-47',
    title: '47. API de Controle de Estoque',
    type: 'Back-end',
    shortDescription: 'Entrada e saída com alerta de saldo mínimo.',
    fullDescription: 'Destaques para recrutador: Estoque é domínio clássico em ERPs, provando entendimento de sistemas transacionais.',
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'MySQL']
  },
  {
    id: 'proj-48',
    title: '48. Sistema de Pedidos com Máquina de Estados',
    type: 'Back-end',
    shortDescription: 'Controle rigoroso de status (criado, pago, enviado).',
    fullDescription: 'Destaques para recrutador: Máquina de estados é conceito avançado, sinaliza maturidade técnica.',
    technologies: ['Java', 'Spring Boot', 'Spring State Machine']
  },
  {
    id: 'proj-49',
    title: '49. API de Chat Simples com WebSocket',
    type: 'Back-end',
    shortDescription: 'Chat em tempo real com histórico salvo em banco.',
    fullDescription: 'Destaques para recrutador: WebSocket em Java é bem menos comum no portfólio, te destacando de CRUDs comuns.',
    technologies: ['Java', 'Spring Boot', 'WebSocket']
  },

  // --- BLOCO 5: BANCO DE DADOS E SQL ---
  {
    id: 'proj-50',
    title: '50. Modelagem de Banco para Sistema Financeiro',
    type: 'Dados',
    shortDescription: 'Modelagem completa com regras de integridade rígidas.',
    fullDescription: 'Destaques para recrutador: Exige atenção à consistência de dados, tema super cobrado em entrevistas.',
    technologies: ['PostgreSQL', 'SQL', 'Diagrama ER']
  },
  {
    id: 'proj-51',
    title: '51. Queries Avançadas — E-commerce',
    type: 'Dados',
    shortDescription: 'Queries complexas simulando ticket médio e retenção.',
    fullDescription: 'Destaques para recrutador: Base de e-commerce facilita a conversa técnica, todos os avaliadores entendem o contexto.',
    technologies: ['PostgreSQL', 'SQL']
  },
  {
    id: 'proj-52',
    title: '52. Otimização de Performance de Consultas',
    type: 'Dados',
    shortDescription: 'Estudo de caso usando EXPLAIN ANALYZE e criação de índices.',
    fullDescription: 'Destaques para recrutador: Projeto "prova de senioridade técnica". Quase ninguém documenta otimização de consulta no portfólio.',
    technologies: ['PostgreSQL', 'EXPLAIN ANALYZE', 'Índices']
  },

  // --- BLOCO 6: NUVEM ---
  {
    id: 'proj-53',
    title: '53. API Serverless com AWS Lambda',
    type: 'Nuvem',
    shortDescription: 'API rodando inteiramente sem servidor fixo.',
    fullDescription: 'Destaques para recrutador: Serverless é tendência forte, mostra visão moderna de arquitetura.',
    technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB']
  },
  {
    id: 'proj-54',
    title: '54. Sistema de Autenticação com Azure AD',
    type: 'Nuvem',
    shortDescription: 'Login social federado usando provedor da Microsoft.',
    fullDescription: 'Destaques para recrutador: Autenticação corporativa comum em empresas, mostra prontidão pro ecossistema Microsoft 365.',
    technologies: ['Azure AD B2C', 'Node.js']
  },
  {
    id: 'proj-55',
    title: '55. Monitoramento de Aplicação com Azure Monitor',
    type: 'Nuvem',
    shortDescription: 'Dashboards de logs, erros e tempo de resposta de API.',
    fullDescription: 'Destaques para recrutador: Observabilidade separa "sobe pra produção e reza" de infraestrutura madura.',
    technologies: ['Azure Monitor', 'AWS CloudWatch']
  },

  // --- BLOCO 7: DEVOPS E CONTAINERS ---
  {
    id: 'proj-56',
    title: '56. Ambiente Multi-Container com Docker Compose',
    type: 'DevOps',
    shortDescription: 'Proxy reverso, API, banco e cache orquestrados.',
    fullDescription: 'Destaques para recrutador: Simula arquitetura real de produção em miniatura, provando que você entende o fluxo todo.',
    technologies: ['Docker Compose', 'Nginx', 'Redis']
  },
  {
    id: 'proj-57',
    title: '57. Pipeline CI/CD com Testes Bloqueantes',
    type: 'DevOps',
    shortDescription: 'Workflow do GitHub que impede merge se testes falharem.',
    fullDescription: 'Destaques para recrutador: Prática de equipe madura. Mostra preocupação com qualidade além do código individual.',
    technologies: ['GitHub Actions', 'Docker', 'Testes']
  },

  // --- BLOCO 8: TESTES ---
  {
    id: 'proj-58',
    title: '58. Suíte de Testes para API (Java)',
    type: 'QA',
    shortDescription: 'Testes unitários com mockagem de dependências.',
    fullDescription: 'Destaques para recrutador: Fecha uma lacuna comum do portfólio júnior (falta de testes) usando a stack Java.',
    technologies: ['JUnit', 'Mockito']
  },
  {
    id: 'proj-59',
    title: '59. Testes End-to-End com Cypress',
    type: 'QA',
    shortDescription: 'Simulação do fluxo real de usuário num app front-end.',
    fullDescription: 'Destaques para recrutador: Testes E2E são o que dá confiança ao produto. Habilidade rara em júnior.',
    technologies: ['Cypress', 'React']
  },

  // --- BLOCO 9: INTEGRADOR ---
  {
    id: 'proj-60',
    title: '60. Plataforma de Educação Financeira Gamificada (Vitrine)',
    type: 'Full-stack',
    shortDescription: 'Integra front, back, banco, testes e deploy num produto educacional.',
    fullDescription: 'Destaques para recrutador: Domínio fácil de explicar em qualquer setor. Funciona como prova de conceito definitiva da stack inteira sem depender do nicho público.',
    technologies: ['React', 'Node.js/Java', 'PostgreSQL', 'Docker', 'CI/CD']
  }
];
