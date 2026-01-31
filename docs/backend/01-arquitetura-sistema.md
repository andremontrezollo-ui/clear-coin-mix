# Back-end — Arquitetura de Sistema

## 1.1. Princípios Norteadores

### Separação de Responsabilidades (SRP)
Cada módulo possui um propósito único e interfaces mínimas. Isso garante que alterações em um componente não afetem outros desnecessariamente.

### Baixo Acoplamento / Alta Coesão
- Comunicação entre módulos via eventos e contratos estáveis
- Dependências explícitas e minimizadas
- Interfaces bem definidas entre camadas

### Privacidade por Arquitetura
- **Minimização de dados**: coletar apenas o estritamente necessário
- **Segregação de contexto**: isolar informações sensíveis em domínios separados
- **Trilhas de auditoria não-reidentificantes**: logs que permitem verificação sem expor usuários

### Segurança por Design
- Threat modeling explícito para cada componente
- Defesa em profundidade (múltiplas camadas de proteção)
- Chaves e segredos gerenciados fora do plano de aplicação
- Rotação automática de credenciais quando possível

### Auditabilidade Controlada
- Logs "privacy-preserving" que não rastreiam usuários
- Contabilidade interna verificável
- Métricas agregadas sem correlação individual
- Retenção mínima de metadados operacionais
