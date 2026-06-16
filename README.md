# Plataforma Inteligente Integrada de Monitoramento Rural

## IA · Drones · IoT · Visão Computacional — Projeto de Engenharia Econômica

Este repositório contém a documentação e os modelos financeiros para o projeto final da disciplina de Engenharia Econômica. O objetivo é propor um modelo de negócio viável para monitoramento rural em médias e grandes fazendas [1, 2].

### 👥 Equipe

* **Higor Ferreira Silva**
* **Wallyson Miranda Aguiar**
* **Igor Barbosa Lino**

### 🎯 Visão Geral do Projeto

O projeto avalia a viabilidade econômica de uma plataforma B2B que utiliza drones, sensores IoT e visão computacional para transformar dados de campo em decisões acionáveis (prescrições de taxa variável, alertas de pragas e estresse hídrico) [2, 3].

A solução foca em resolver a fragmentação de ferramentas no agronegócio e a falta de conectividade estável no campo através de uma arquitetura *offline-first* [3, 4].

### 🛠️ Estrutura da Solução

A metodologia técnica divide-se em camadas para garantir escalabilidade:

1. **Captação (Edge):** Drones e IoT.
2. **Borda (Gateway):** Processamento local para superar falhas de internet.
3. **Nuvem:** Processamento pesado de imagens (IA/GPU).
4. **Aplicação:** Dashboard e mapas de prescrição [5].

### 💰 Análise Financeira (Destaques)

Com base no estudo preliminar, o **Modelo Híbrido** (Taxa de Implantação + SaaS por hectare) apresentou os melhores resultados [2, 6]:

* **VPL (TMA 20%):** R$ 2.937.891
* **TIR:** 85,6%
* **Payback Descontado:** ~3 anos [7, 8].

### 📂 Estrutura do Repositório

Abaixo, a organização sugerida para os arquivos do projeto:

```text
eng_eco/
├── assets/             # Imagens, logotipos e diagramas de arquitetura
│   ├── diagramas/      # Fluxogramas e modelos UML
│   └── fotos/          # Fotos de campo e do case real
├── docs/               # Documentação textual
│   ├── relatorios/     # Relatórios em .md, .docx e .tex
│   └── apresentacao/   # Slides e roteiro do vídeo
├── mvp/                # Protótipo funcional ou código da solução
│   └── src/            # Código-fonte (IA, Dashboard, etc.)
├── papers/             # Artigos de referência e trabalhos similares
├── sheets/             # Planilhas financeiras e modelos de indicadores
│   └── modelos/        # Planilha definitiva com fórmulas de VPL/TIR
└── README.md           # Visão geral do projeto (este arquivo)
🚀 Próximos Passos
Coleta de dados reais de mercado para substituir premissas
.
Finalização do relatório de 6 páginas
.
Produção do vídeo de apresentação (3 minutos)
.
Este projeto foi desenvolvido como requisito para a disciplina de Engenharia Econômica - 2026.
