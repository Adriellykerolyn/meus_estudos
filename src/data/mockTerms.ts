export type TermStatus = 'Já utilizei' | 'Preciso estudar' | 'Dominado';

export interface TechTerm {
  id: string;
  term: string;
  simpleExplanation: string;
  technicalExplanation?: string;
  source?: string;
  status: TermStatus;
  links?: string[];
}

export const mockTerms: TechTerm[] = [
  // --- INTELIGÊNCIA ARTIFICIAL E MACHINE LEARNING ---
  { id: 'ia', term: 'Inteligência Artificial (IA)', simpleExplanation: 'Fazer computador simular comportamento considerado inteligente.', technicalExplanation: 'Campo amplo focado na criação de sistemas capazes de raciocínio, aprendizado e decisão.', status: 'Preciso estudar' },
  { id: 'ml', term: 'Machine Learning', simpleExplanation: 'Sistema aprende padrões a partir de dados, em vez de regras manuais.', technicalExplanation: 'Subcampo da IA que usa algoritmos estatísticos para aprendizado de máquina.', status: 'Preciso estudar' },
  { id: 'dl', term: 'Deep Learning', simpleExplanation: 'IA que usa redes neurais para tarefas complexas como voz e imagem.', technicalExplanation: 'Subcampo do ML baseado em redes neurais artificiais com múltiplas camadas.', status: 'Preciso estudar' },
  { id: 'modelo-ia', term: 'Modelo (IA)', simpleExplanation: 'O "programa" resultante depois que a IA aprendeu.', technicalExplanation: 'Representação matemática gerada pelo processo de treinamento de um algoritmo.', status: 'Já utilizei' },
  { id: 'treino-ia', term: 'Treinar um modelo', simpleExplanation: 'Mostrar exemplos pra IA aprender antes de usá-la.', technicalExplanation: 'Processo iterativo de ajuste de pesos minimizando o erro.', status: 'Preciso estudar' },
  { id: 'dataset', term: 'Dataset', simpleExplanation: 'Conjunto de dados usado para treinar ou testar um modelo.', technicalExplanation: 'Estrutura base para treinamento e validação de modelos.', status: 'Já utilizei' },
  { id: 'sup-learn', term: 'Aprendizado Supervisionado', simpleExplanation: 'A IA aprende com exemplos que já têm a resposta certa.', technicalExplanation: 'Treinamento de modelo usando dados rotulados (labeled data).', status: 'Preciso estudar' },
  { id: 'unsup-learn', term: 'Aprendizado Não Supervisionado', simpleExplanation: 'A IA encontra o padrão sozinha, sem resposta prévia.', technicalExplanation: 'Algoritmos para encontrar estruturas ocultas em dados não rotulados.', status: 'Preciso estudar' },
  { id: 'acuracia', term: 'Acurácia', simpleExplanation: 'A porcentagem de acertos de um modelo.', technicalExplanation: 'Métrica de avaliação (VP + VN) / Total.', status: 'Preciso estudar' },
  { id: 'llm', term: 'LLM (Large Language Model)', simpleExplanation: 'A IA por trás do ChatGPT, treinada com muito texto.', technicalExplanation: 'Modelos arquitetura Transformer com bilhões de parâmetros.', status: 'Já utilizei' },
  { id: 'token', term: 'Token', simpleExplanation: 'A "unidade" de texto que a IA lê (pedaço de palavra).', technicalExplanation: 'Unidade base de representação lexical após tokenização.', status: 'Preciso estudar' },
  { id: 'prompt', term: 'Prompt', simpleExplanation: 'A instrução que você dá para a IA.', technicalExplanation: 'Entrada de texto fornecida como contexto inicial.', status: 'Já utilizei' },
  { id: 'prompt-eng', term: 'Engenharia de Prompt', simpleExplanation: 'Saber pedir coisas do jeito certo pra IA.', technicalExplanation: 'Otimização heurística de inputs para maximizar o desempenho do LLM.', status: 'Dominado' },
  { id: 'finetuning', term: 'Fine-tuning', simpleExplanation: 'Ajustar um modelo pronto pra ele ficar bom num assunto específico.', technicalExplanation: 'Ajuste de hiperparâmetros/pesos de modelo pré-treinado.', status: 'Preciso estudar' },
  { id: 'rag', term: 'RAG', simpleExplanation: 'Fazer a IA buscar informações numa base antes de responder.', technicalExplanation: 'Retrieval-Augmented Generation: acoplar banco vetorial ao LLM.', status: 'Preciso estudar' },
  { id: 'agente-ia', term: 'Agente de IA', simpleExplanation: 'Uma IA que toma decisões sozinha e usa ferramentas.', technicalExplanation: 'Sistema autônomo baseado em LLM capaz de raciocínio lógico.', status: 'Preciso estudar' },
  { id: 'alucinacao', term: 'Alucinação', simpleExplanation: 'Quando a IA inventa uma mentira com muita confiança.', technicalExplanation: 'Fenômeno de saídas sintaticamente corretas mas factualmente falsas.', status: 'Preciso estudar' },
  { id: 'embedding', term: 'Embedding', simpleExplanation: 'Representar texto como números pro computador entender o "significado".', technicalExplanation: 'Representação densa vetorial que captura relações semânticas.', status: 'Preciso estudar' },
  { id: 'prompt-inj', term: 'Prompt Injection', simpleExplanation: 'Um "ataque hacker" pra fazer a IA sair das regras.', technicalExplanation: 'Vulnerabilidade onde entradas maliciosas manipulam comportamento do LLM.', status: 'Preciso estudar' },
  { id: 'bias-ia', term: 'Viés (Bias) em IA', simpleExplanation: 'Quando a IA copia um preconceito dos dados de origem.', technicalExplanation: 'Anomalias sistemáticas no modelo originadas por distorções no dataset.', status: 'Preciso estudar' },
  { id: 'ia-resp', term: 'IA Responsável', simpleExplanation: 'Garantir que a IA seja justa, segura e transparente.', technicalExplanation: 'Framework de governança (Responsible AI) ético e mitigação de riscos.', status: 'Preciso estudar' },

  // --- BACKEND E INFRA ---
  { id: 'backend', term: 'Back-end', simpleExplanation: 'A parte escondida do usuário (servidor, banco).', technicalExplanation: 'Lida com banco de dados, regras de negócio e autenticação.', status: 'Já utilizei' },
  { id: 'api-rest', term: 'API REST', simpleExplanation: 'Um jeito padronizado de duas aplicações conversarem.', technicalExplanation: 'Arquitetura baseada em endpoints HTTP.', status: 'Já utilizei' },
  { id: 'crud', term: 'CRUD', simpleExplanation: 'Criar, Ler, Atualizar, Apagar dados.', technicalExplanation: 'Acrônimo para Create, Read, Update, Delete.', status: 'Já utilizei' },
  { id: 'orm', term: 'ORM', simpleExplanation: 'Mexer no banco sem escrever SQL puro.', technicalExplanation: 'Object-Relational Mapping.', status: 'Preciso estudar' },
  { id: 'middleware', term: 'Middleware', simpleExplanation: 'Intercepta requisições antes do destino final.', technicalExplanation: 'Camada no pipeline HTTP.', status: 'Preciso estudar' },
  { id: 'jwt', term: 'JWT', simpleExplanation: 'Um "crachá digital" criptografado.', technicalExplanation: 'JSON Web Token (RFC 7519) para autenticação stateless.', status: 'Preciso estudar' },
  { id: 'hash', term: 'Hash', simpleExplanation: 'Embaralhar senha de forma irreversível.', technicalExplanation: 'Função criptográfica unidirecional.', status: 'Já utilizei' },
  { id: 'cors', term: 'CORS', simpleExplanation: 'Regra que controla quem pode chamar sua API pelo navegador.', technicalExplanation: 'Cross-Origin Resource Sharing.', status: 'Preciso estudar' },
  { id: 'endpoint', term: 'Endpoint', simpleExplanation: 'Endereço específico de uma API.', technicalExplanation: 'Ponto final de comunicação web.', status: 'Já utilizei' },
  { id: 'req-res', term: 'Request/Response', simpleExplanation: 'O pedido do app e a resposta da API.', technicalExplanation: 'Mensagens HTTP de cliente/servidor.', status: 'Já utilizei' },
  { id: 'json', term: 'JSON', simpleExplanation: 'Formato de texto para trocar dados.', technicalExplanation: 'JavaScript Object Notation.', status: 'Já utilizei' },

  // --- FRONTEND ---
  { id: 'tipagem', term: 'Tipagem', simpleExplanation: 'Definir antecipadamente o tipo de dado.', technicalExplanation: 'Sistema de tipos do TypeScript.', status: 'Preciso estudar' },
  { id: 'framework', term: 'Framework', simpleExplanation: 'Um "esqueleto" pronto com regras de estrutura.', technicalExplanation: 'Abstração com Inversão de Controle.', status: 'Já utilizei' },
  { id: 'componente', term: 'Componente', simpleExplanation: 'Pedaço reutilizável de tela.', technicalExplanation: 'Unidade isolada de UI com estado e ciclo de vida.', status: 'Já utilizei' },
  { id: 'props', term: 'Props', simpleExplanation: 'Informação passada "de fora" para um componente.', technicalExplanation: 'Parâmetros read-only do React.', status: 'Já utilizei' },
  { id: 'state', term: 'State (Estado)', simpleExplanation: 'Dado que muda e atualiza a tela.', technicalExplanation: 'Estrutura mutável (useState).', status: 'Já utilizei' },
  { id: 'hook', term: 'Hook', simpleExplanation: 'Funções do React (useState, useEffect).', technicalExplanation: 'Acopla estado/ciclo de vida a funções.', status: 'Preciso estudar' },
  { id: 'ssr', term: 'SSR', simpleExplanation: 'Página montada no servidor (rápido).', technicalExplanation: 'Server-Side Rendering.', status: 'Preciso estudar' },
  { id: 'csr', term: 'CSR', simpleExplanation: 'Navegador monta a página.', technicalExplanation: 'Client-Side Rendering.', status: 'Já utilizei' },
  { id: 'bundler', term: 'Bundler', simpleExplanation: 'Junta arquivos num pacote.', technicalExplanation: 'Empacotador de assets web.', status: 'Preciso estudar' },
  { id: 'mvp', term: 'MVP', simpleExplanation: 'Versão mais simples e funcional.', technicalExplanation: 'Minimum Viable Product.', status: 'Já utilizei' },

  // --- DADOS E DEVOPS ---
  { id: 'db-relacional', term: 'Banco Relacional', simpleExplanation: 'Tabelas interligadas.', technicalExplanation: 'Usa SQL e álgebra relacional.', status: 'Já utilizei' },
  { id: 'db-nosql', term: 'NoSQL', simpleExplanation: 'Dados sem tabela fixa.', technicalExplanation: 'Bancos orientados a documentos/chave-valor.', status: 'Preciso estudar' },
  { id: 'pk', term: 'Primary Key', simpleExplanation: 'Identificador único da linha.', technicalExplanation: 'Garante unicidade.', status: 'Dominado' },
  { id: 'fk', term: 'Foreign Key', simpleExplanation: 'Conecta tabelas.', technicalExplanation: 'Garante integridade referencial.', status: 'Já utilizei' },
  { id: 'join', term: 'JOIN', simpleExplanation: 'Juntar dados de tabelas.', technicalExplanation: 'Cláusula de junção SQL.', status: 'Já utilizei' },
  { id: 'acid', term: 'ACID', simpleExplanation: 'Transação confiável.', technicalExplanation: 'Atomicidade, Consistência, Isolamento, Durabilidade.', status: 'Preciso estudar' },
  { id: 'etl', term: 'ETL', simpleExplanation: 'Extrair, Transformar, Carregar.', technicalExplanation: 'Pipeline de integração de dados.', status: 'Preciso estudar' },
  { id: 'dashboard', term: 'Dashboard', simpleExplanation: 'Painel visual.', technicalExplanation: 'Interface de BI.', status: 'Já utilizei' },
  { id: 'kpi', term: 'KPI', simpleExplanation: 'Indicador-chave de sucesso.', technicalExplanation: 'Key Performance Indicator.', status: 'Dominado' },
  { id: 'outlier', term: 'Outlier', simpleExplanation: 'Valor muito fora do padrão.', technicalExplanation: 'Ponto de desvio em dataset.', status: 'Dominado' },
  { id: 'devops', term: 'DevOps', simpleExplanation: 'Cultura de Dev e Operação juntos.', technicalExplanation: 'Integração de entrega e operações.', status: 'Preciso estudar' },
  { id: 'docker', term: 'Docker', simpleExplanation: 'Caixinha com a aplicação.', technicalExplanation: 'Virtualização a nível de OS.', status: 'Já utilizei' },
  { id: 'imagem-docker', term: 'Imagem Docker', simpleExplanation: 'A "receita" do container.', technicalExplanation: 'Template read-only de container.', status: 'Preciso estudar' },
  { id: 'k8s', term: 'Kubernetes', simpleExplanation: 'Gerenciar milhares de containers.', technicalExplanation: 'Orquestrador de containers.', status: 'Preciso estudar' },
  { id: 'ci-cd', term: 'CI/CD', simpleExplanation: 'Testar e publicar sozinho.', technicalExplanation: 'Integração e Entrega Contínuas.', status: 'Preciso estudar' },
  { id: 'deploy', term: 'Deploy/Rollback', simpleExplanation: 'Publicar o app ou desfazer.', technicalExplanation: 'Liberação de versão em produção.', status: 'Já utilizei' },
  { id: 'ambiente', term: 'Ambientes', simpleExplanation: 'Onde fazemos, testamos e usamos.', technicalExplanation: 'Separação de ciclos de software (Dev/Staging/Prod).', status: 'Já utilizei' },
  { id: 'iac', term: 'IaC', simpleExplanation: 'Servidores por código.', technicalExplanation: 'Infrastructure as Code (Terraform).', status: 'Preciso estudar' },
  { id: 'gitops', term: 'GitOps', simpleExplanation: 'Mudança de servidor passa pelo Git.', technicalExplanation: 'Git como fonte da verdade de infra.', status: 'Preciso estudar' },
  { id: 'observabilidade', term: 'Observabilidade', simpleExplanation: 'Ver a saúde do sistema de fora.', technicalExplanation: 'Inferencia de estado interno (Logs/Métricas).', status: 'Preciso estudar' },
  { id: 'sla-slo', term: 'SLA/SLO/SLI', simpleExplanation: 'Contrato, Meta e Medida do sistema.', technicalExplanation: 'Acordos de nível de serviço.', status: 'Preciso estudar' },
  { id: 'autoscaling', term: 'Auto Scaling', simpleExplanation: 'Servidor aumenta sozinho.', technicalExplanation: 'Ajuste dinâmico de recursos.', status: 'Preciso estudar' }
];
