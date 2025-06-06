# 🚀 HelpDesk Pro - Suporte TI Ágil

![Tech Logo](https://via.placeholder.com/150x50?text=HD+Pro)

Sistema de suporte técnico moderno e eficiente, construído com tecnologias de ponta e focado em agilidade e facilidade de uso. Este projeto oferece uma experiência completa de suporte técnico, incluindo agendamento, gerenciamento de chamados e notificações automatizadas.

## 🎯 Visão Geral

O HelpDesk Pro é uma solução completa para gerenciamento de suporte técnico, projetada para equipes de TI e departamentos de suporte. O sistema oferece:

- Interface moderna e responsiva
- Sistema de agendamento completo
- Notificações por e-mail automatizadas
- Gerenciamento de chamados em tempo real
- Relatórios e estatísticas
- Autenticação segura
- Integração com DevOps

### 🎪 Para Quem é Este Sistema?

- **💼 Empresas de TI**: Organização de chamados e agendamentos
- **🏢 Departamentos Internos**: Suporte aos colaboradores
- **👥 Equipes de Suporte**: Mais eficiência e organização
- **🔧 Técnicos Freelancers**: Profissionalização do atendimento
- **🏭 Indústrias**: Manutenção preventiva

### 🎯 Problemas Que Resolve

✅ **Desorganização de Chamados** - Sistema centralizado de tickets
✅ **Agendamentos Conflitantes** - Calendário inteligente integrado
✅ **Falta de Visibilidade** - Dashboard com métricas em tempo real
✅ **Comunicação Fragmentada** - Histórico completo de interações
✅ **Relatórios Manuais** - Geração automática de insights
✅ **Acesso Descontrolado** - Sistema de autenticação robusto
✅ **Falta de Escalabilidade** - Arquitetura preparada para containers

## ✨ Características Principais

### 🔐 Sistema de Autenticação Completo
- **👤 Registro de Usuários**: Cadastro completo com validação de dados
- **🔑 Login Seguro**: Autenticação com email e senha
- **👥 Perfil de Usuário**: Gerenciamento de informações pessoais
- **🛡️ Proteção de Rotas**: Controle de acesso às páginas
- **🔄 Sessões Persistentes**: Manter login entre sessões
- **📱 Menu de Usuário**: Interface moderna para gerenciar conta

### 🎛️ Dashboard Inteligente
- **📊 Métricas em Tempo Real**: Acompanhe KPIs importantes instantaneamente
- **📈 Gráficos Interativos**: Visualize tendências e padrões com charts modernos
- **⚡ Performance Overview**: Monitore uptime, tempo de resposta e satisfação
- **🎨 Interface Futurística**: Design tech com glassmorphism e gradientes

### 🎫 Sistema de Tickets Avançado
- **📝 Criação Intuitiva**: Formulários inteligentes com categorização automática
- **🏷️ Categorias Flexíveis**: Hardware, Software, Rede, Manutenção, Instalação
- **⚡ Prioridades Dinâmicas**: Alta, Média, Baixa com cores visuais
- **🔄 Status Automático**: Aberto → Em Andamento → Fechado
- **🔍 Busca Avançada**: Filtre por qualquer campo rapidamente
- **📱 Responsivo Total**: Funciona perfeitamente em qualquer dispositivo

### 📅 Agendamentos Inteligentes
- **📆 Calendário Moderno**: Interface limpa e intuitiva para marcações
- **⏰ Horários Flexíveis**: Defina disponibilidade por período e técnico
- **🔔 Notificações Smart**: Lembretes automáticos por email e no sistema
- **👥 Gestão de Técnicos**: Atribua chamados aos profissionais certos
- **📊 Analytics de Agenda**: Veja produtividade e ocupação da equipe

### 🧭 Navegação Moderna
- **🍔 Menu Hamburger**: Navegação moderna e intuitiva
- **📱 Sidebar Tech**: Design futurista com efeitos visuais
- **⌨️ Atalhos de Teclado**: Navegação rápida com shortcuts
- **🎨 Animações Suaves**: Transições elegantes e responsivas

## 🛠️ Pré-requisitos

Para executar o HelpDesk Pro localmente, você precisará ter instalado:

- Node.js (v18 ou superior)
- npm ou yarn
- Docker e Docker Compose
- Git
- Supabase CLI (opcional)

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/AlessandroWindson/agile-desk-system.git
cd agile-desk-system
```

2. Configure as variáveis de ambiente:
- Copie o arquivo `.env.example` para `.env` no diretório backend
- Configure suas credenciais do Supabase
- Adicione sua chave API do Resend

3. Instale as dependências:
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

4. Inicie os containers Docker:
```bash
docker-compose up -d
```

5. Inicie o backend:
```bash
cd backend
npm run dev
```

6. Inicie o frontend:
```bash
cd frontend
npm run dev
```

## 📊 Estrutura do Projeto

```
helpdesk-pro/
├── backend/              # Backend Node.js + Express
├── frontend/            # Frontend React + TypeScript
├── docker/              # Configurações Docker
├── kubernetes/          # Arquivos de configuração Kubernetes
├── jenkins/             # Configurações Jenkins
└── docs/               # Documentação do projeto
```

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Por favor, leia nosso [guia de contribuição](CONTRIBUTING.md) antes de enviar um pull request.

## 📞 Suporte

Para suporte ou dúvidas, entre em contato através do email: suporte@helpdeskpro.com

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

### 💝 Créditos Especiais

- **⚛️ React Team**: Por criar uma biblioteca incrível
- **🎨 Tailwind CSS**: Por revolucionar o CSS utilitário  
- **🟢 Supabase**: Por democratizar o backend
- **🧩 shadcn**: Por componentes UI perfeitos
- **🎭 Lucide**: Por ícones lindos e consistentes
- **🐳 Docker**: Por simplificar containerização
- **☸️ Kubernetes**: Por orquestração robusta
- **🚀 Jenkins**: Por CI/CD confiável
- **🌍 Open Source Community**: Por inspiração constante

### 🏆 Contribuidores

<div align="center">

[![Contributors](https://contrib.rocks/image?repo=helpdesk-pro/helpdesk-pro)](https://github.com/helpdesk-pro/helpdesk-pro/graphs/contributors)

**Obrigado a todos que contribuíram para este projeto! 🚀**

</div>

## 🛠️ Pré-requisitos

Para executar o HelpDesk Pro localmente, você precisará ter instalado:

- Node.js (v18 ou superior)
- npm ou yarn
- Docker e Docker Compose
- Git
- Supabase CLI (opcional)

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/AlessandroWindson/agile-desk-system.git
cd agile-desk-system
```

2. Configure as variáveis de ambiente:
- Copie o arquivo `.env.example` para `.env` no diretório backend
- Configure suas credenciais do Supabase
- Adicione sua chave API do Resend

3. Instale as dependências:
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

4. Inicie os containers Docker:
```bash
docker-compose up -d
```

5. Inicie o backend:
```bash
cd backend
npm run dev
```

6. Inicie o frontend:
```bash
cd frontend
npm run dev
```

## 📊 Estrutura do Projeto

```
helpdesk-pro/
├── backend/              # Backend Node.js + Express
├── frontend/            # Frontend React + TypeScript
├── docker/              # Configurações Docker
├── kubernetes/          # Arquivos de configuração Kubernetes
├── jenkins/             # Configurações Jenkins
└── docs/               # Documentação do projeto
```

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Por favor, leia nosso [guia de contribuição](CONTRIBUTING.md) antes de enviar um pull request.

## 📞 Suporte

Para suporte ou dúvidas, entre em contato através do email: suporte@helpdeskpro.com

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

### 💝 Créditos Especiais

- **⚛️ React Team**: Por criar uma biblioteca incrível
- **🎨 Tailwind CSS**: Por revolucionar o CSS utilitário  
- **🟢 Supabase**: Por democratizar o backend
- **🧩 shadcn**: Por componentes UI perfeitos
- **🎭 Lucide**: Por ícones lindos e consistentes
- **🐳 Docker**: Por simplificar containerização
- **☸️ Kubernetes**: Por orquestração robusta
- **🚀 Jenkins**: Por CI/CD confiável
- **🌍 Open Source Community**: Por inspiração constante

### 🏆 Contribuidores

<div align="center">

[![Contributors](https://contrib.rocks/image?repo=helpdesk-pro/helpdesk-pro)](https://github.com/helpdesk-pro/helpdesk-pro/graphs/contributors)

**Obrigado a todos que contribuíram para este projeto! 🚀**

</div>

## 🎯 Como Usar

### Acessando o Sistema

1. Acesse o sistema através do navegador em `http://localhost:3000`
2. Faça login com suas credenciais
3. Explore as diferentes funcionalidades através do menu lateral

### Agendamento

1. Acesse `/agendamento` ou `/agendamentos`
2. Na aba "Novo Agendamento":
   - Preencha o formulário com as informações necessárias
   - Selecione a prioridade do atendimento
   - Escolha o horário desejado
3. Na aba "Lista de Agendamentos":
   - Visualize todos os agendamentos
   - Filtre por status ou data
   - Gerencie o status dos atendimentos
4. Teste o processamento em lote:
   - Clique em "Processar Lote (Demo)"
   - Observe o processamento em tempo real

## 🛠️ Configuração do Resend

Para que o sistema de e-mails funcione, você precisará configurar a chave do Resend:

1. Acesse o [Resend Dashboard](https://resend.dev/dashboard)
2. Crie uma conta gratuita se ainda não tiver
3. Copie sua API Key
4. Adicione a chave no arquivo `.env`:
```
RESEND_API_KEY=sua_chave_aqui
```

## 📊 Estrutura do Projeto

```
helpdesk-pro/
├── backend/              # Backend Node.js + Express
├── frontend/            # Frontend React + TypeScript
├── docker/              # Configurações Docker
├── kubernetes/          # Arquivos de configuração Kubernetes
├── jenkins/             # Configurações Jenkins
└── docs/               # Documentação do projeto
```

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Por favor, leia nosso [guia de contribuição](CONTRIBUTING.md) antes de enviar um pull request.

## 📞 Suporte

Para suporte ou dúvidas, entre em contato através do email: suporte@helpdeskpro.com
```

---

## 🙏 Agradecimentos

### 💝 Créditos Especiais

- **⚛️ React Team**: Por criar uma biblioteca incrível
- **🎨 Tailwind CSS**: Por revolucionar o CSS utilitário  
- **🟢 Supabase**: Por democratizar o backend
- **🧩 shadcn**: Por componentes UI perfeitos
- **🎭 Lucide**: Por ícones lindos e consistentes
- **🐳 Docker**: Por simplificar containerização
- **☸️ Kubernetes**: Por orquestração robusta
- **🚀 Jenkins**: Por CI/CD confiável
- **🌍 Open Source Community**: Por inspiração constante

### 🏆 Contribuidores

<div align="center">

[![Contributors](https://contrib.rocks/image?repo=helpdesk-pro/helpdesk-pro)](https://github.com/helpdesk-pro/helpdesk-pro/graphs/contributors)

**Obrigado a todos que contribuíram para este projeto! 🚀**

</div>

---

<div align="center">

### 🚀 **Desenvolvido com ❤️ e muito ☕ no Brasil**

[![Made in Brazil](https://img.shields.io/badge/Made%20in-Brazil-green?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjMDA5MjM5Ii8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjgiIGZpbGw9IiNGRkRGMDAiLz4KPC9zdmc+)](https://github.com/helpdesk-pro/helpdesk-pro)

**🎯 Sistema Completo • 🔐 Autenticação Robusta • 🐳 Docker Ready • ☸️ Kubernetes Native • 🚀 CI/CD Integrado**

**Se este projeto te ajudou, considere dar uma ⭐!**

[⭐ Dar uma estrela](https://github.com/helpdesk-pro/helpdesk-pro) • [🐦 Seguir no Twitter](https://twitter.com/helpdeskpro) • [💼 LinkedIn](https://linkedin.com/company/helpdeskpro)

</div>
