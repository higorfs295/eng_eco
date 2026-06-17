# Plataforma Inteligente Integrada de Monitoramento Rural
### IA · Drones · IoT · Visão Computacional — Relatório de Viabilidade (Engenharia Econômica)

**Equipe:** [preencher] · **Data:** [preencher]/2026 · **Produto (nome a definir)**

> Os valores financeiros deste relatório são **premissas de trabalho conferidas matematicamente**, não dados de mercado verificados. A versão final deve substituí-los pelas cotações e preços de concorrentes coletados (Seção 4). A planilha `modelo_financeiro.xlsx` recalcula tudo automaticamente ao editar as premissas.

---

## Resumo

Este relatório avalia a viabilidade econômica de uma plataforma B2B de monitoramento rural que integra drones, IoT e visão computacional com IA, voltada a médias e grandes fazendas de grãos. Comparam-se três modelos de receita (SaaS, DaaS e Híbrido) pelos indicadores de Engenharia Econômica — VPL, TIR, payback simples e descontado, IBC e ROIA — usando a Selic vigente como base da TMA. O modelo Híbrido (taxa de implantação + assinatura por hectare) é o recomendado, com VPL positivo e payback descontado de cerca de três anos. A análise de sensibilidade mostra que a viabilidade depende criticamente da velocidade de adoção de hectares.

## 0. Contextualização

O agronegócio brasileiro opera sob margens apertadas, exigência crescente de rastreabilidade e janelas de decisão curtas — pragas, doenças e estresse hídrico comprometem a safra em poucos dias. Simultaneamente, três habilitadores amadureceram: conectividade rural em forte expansão (parcela relevante da área já com 4G/5G), queda no custo de drones e sensores, e IA/visão computacional com precisão operacional. O resultado é uma transição para "fazendas inteligentes". **A demanda já está validada por concorrentes ativos** (Perfect Flight, com dezenas de milhões de hectares digitalizados; SIMA, com milhões de hectares monitorados) — o risco não é de mercado, é de execução comercial. O papel da análise econômica é duplo: provar que o investimento **se paga**, e em quanto tempo, tanto para o produtor quanto para o negócio que oferece a plataforma.

## 1. Problema (a dor do cliente)

M�dias e grandes fazendas de grãos perdem produtividade por **detecção tardia** de pragas, doenças, falhas de plantio e estresse hídrico, e gastam mais que o necessário com insumos por aplicação uniforme. Hoje resolvem com inspeção manual amostral e **ferramentas fragmentadas** (um app de satélite, outro fornecedor de drone, planilha de sensores, ERP à parte — sem integração). As soluções atuais falham por: (i) fragmentação dos dados; (ii) pressuposto de conectividade estável, que quebra no campo; (iii) entrega de "mapas", não de **prescrições acionáveis**; e (iv) retorno não demonstrado em R$, o que trava a adoção. A consequência prática é perda financeira recorrente que o produtor sequer mede com precisão.

## 2. Proposta de solução

Uma plataforma única que conecta **drones, sensores IoT e visão computacional com IA** e transforma imagens e leituras em **decisões acionáveis**: alertas priorizados de praga/doença, mapas de prescrição de taxa variável (VRT) exportáveis para o maquinário e indicadores de produtividade por talhão — funcionando mesmo com conectividade ruim (operação *offline-first*).

**Diferenciais defensáveis:** integração ponta-a-ponta (drone + IoT + satélite + ERP) em uma camada só; tradução em prescrição e em R$, não apenas visualização; resiliência de conectividade; e base de dados proprietária que melhora os modelos a cada safra (efeito de rede de dados).

## 3. Metodologia da solução

### 3.1 Técnico — arquitetura

A arquitetura é organizada em camadas, o que permite um MVP enxuto e escala sem reescrever o núcleo. A separação entre borda (campo) e nuvem é a decisão central: tarefas leves e o buffer offline ficam num *gateway* na fazenda; o processamento pesado (ortomosaico, treino de modelos) fica na nuvem, com custo elástico.

| Camada | Função | Racional |
|---|---|---|
| Captação (Edge) | Drone (RGB/multiespectral) + IoT + satélite | Redundância de fonte de dado |
| Borda (Gateway) | Buffer offline, pré-processamento, inferência leve | Resolve conectividade intermitente; reduz custo de nuvem |
| Processamento (Nuvem) | Ortomosaico, treino, visão computacional pesada | Escala elástica de GPU |
| Dados | Geoespacial + séries temporais + imagens | Cada dado no banco adequado |
| Aplicação | Dashboard, alertas, mapas de prescrição | Onde o dado vira decisão |
| Integração | Exportar prescrição (ex.: ISOBUS/ISO-XML) e ERP | O "último metro" do valor |

*Faseamento:* MVP (uma fonte + um caso de IA + dashboard + 1 fazenda-piloto) → V1 (IoT, satélite e mapa de prescrição) → V2 (modelos preditivos, integrações com maquinário, base multi-fazenda).

### 3.2 Financeiro — viabilidade

**Indicadores utilizados (e o que cada um mede):**

| Indicador | O que mede | Regra de decisão |
|---|---|---|
| TMA | Custo de oportunidade (melhor aplicação de baixo risco) | Taxa de desconto usada no VPL |
| VPL | Riqueza criada hoje, já descontada a TMA | Viável se VPL > 0 |
| TIR | Taxa que zera o VPL (rentabilidade intrínseca) | Atrativo se TIR > TMA |
| Payback simples | Tempo para recuperar o capital (sem desconto) | Quanto menor, melhor |
| Payback descontado | Tempo para recuperar o capital pagando a TMA | Início real da criação de valor |
| IBC | Valor presente dos benefícios ÷ investimento | Cria valor se IBC > 1 |
| ROIA | Ganho percentual real acima da TMA | Quanto maior, melhor |

**TMA.** A referência atual é a **Selic = 14,50% a.a. (Copom, jun/2026)**. Usamos três níveis: **piso 14,5%** (custo de oportunidade puro), **recomendada 20%** (Selic + prêmio de risco de venture) e **estresse 30%**.

**Premissas centrais (ilustrativas — recalibrar com dados reais):**

| Premissa | Valor |
|---|---|
| Investimento inicial (Ano 0) | R$ 380.000 |
| Horizonte de análise | 5 anos |
| Curva de adoção (hectares ativos) | 25 mil → 550 mil ha |
| Fazenda média (médias/grandes grãos) | 3.000 ha/cliente |
| Preço SaaS (modelo recomendado) | R$ 22/ha/ano + implantação |

**Comparação dos três modelos de receita** (à TMA recomendada de 20% a.a.):

| Indicador | A) SaaS asset-light | B) DaaS frota própria | C) Híbrido (setup + SaaS) |
|---|---|---|---|
| Investimento Ano 0 | R$ 380.000 | R$ 380.000 | R$ 380.000 |
| VPL (TMA 20%) | R$ 2.788.869 | R$ 431.690 | **R$ 2.937.891** |
| VPL (TMA 14,5%) | R$ 3.581.113 | R$ 843.042 | R$ 3.743.110 |
| VPL (TMA 30%) | R$ 1.774.627 | −R$ 67.162 | R$ 1.903.646 |
| TIR | 79,9% | 28,3% | **85,6%** |
| Payback simples | 2,91 anos | 4,21 anos | **2,70 anos** |
| Payback descontado | 3,20 anos | 4,70 anos | **3,07 anos** |
| IBC | 8,34 | 2,14 | 8,73 |
| ROIA | 52,8% a.a. | 16,4% a.a. | 54,2% a.a. |

**Leitura (decisão entre alternativas excludentes — método do Módulo 4 do material):**
- **C (Híbrido)** é o melhor: a taxa de implantação adianta caixa e dá o **menor payback** com o **maior VPL**. Recomendado como modelo principal.
- **A (SaaS asset-light)** é alternativa enxuta, simples de escalar, quase tão boa quanto C.
- **B (DaaS frota própria)** parece atraente (ticket 3× maior), mas é **intensivo em capital** (frota crescente — 46 unidades no Ano 5) e de **margem fina** (serviço de campo: pilotos, logística, manutenção). Resultado: VPL muito menor, payback de ~4,7 anos e **valor negativo a 30% de TMA**. É a alternativa a **rejeitar** (ou oferecer só como serviço premium pago pelo cliente).

**Fluxo de caixa do modelo recomendado (C — Híbrido):**

| Ano | Receita (R$) | Custo total (R$) | Fluxo líquido (R$) | Fluxo acumulado (R$) |
|---|---|---|---|---|
| 0 | — | — | −380.000 | −380.000 |
| 1 | 716.667 | 1.115.000 | −398.333 | −778.333 |
| 2 | 1.840.000 | 1.752.000 | 88.000 | −690.333 |
| 3 | 4.120.000 | 3.136.000 | 984.000 | 293.667 |
| 4 | 8.106.667 | 5.632.000 | 2.474.667 | 2.768.333 |
| 5 | 13.633.333 | 9.090.000 | 4.543.333 | 7.311.667 |

**"A partir de quando se tem lucro?"** — três respostas, da mais simples à mais rigorosa (modelo C):
1. **Break-even operacional** (fluxo anual deixa de ser negativo): **Ano 2** (fluxo +R$ 88 mil).
2. **Payback simples** (recupera o capital, sem descontar): **≈ 2,7 anos** (o acumulado cruza zero no Ano 3).
3. **Payback descontado** (recupera já pagando a TMA — definição mais rigorosa de início de criação de riqueza): **≈ 3,1 anos**. Como o horizonte é de 5 anos, o projeto é **viável**: VPL > 0, TIR ≫ TMA e IBC > 1.

**Análise de sensibilidade (modelo C — o motor é a adoção):**

| Cenário | Premissa | VPL (TMA 20%) | TIR | Veredito |
|---|---|---|---|---|
| Otimista | adoção +25%, preço +10% | R$ 6.048.934 | 133,8% | Muito viável |
| Base | premissas centrais | R$ 2.937.891 | 85,6% | Viável |
| Pessimista | adoção −40%, preço −15% | −R$ 381.183 | 5,1% | **Inviável no horizonte** |

A viabilidade **depende da adoção**: se a contratação de hectares ficar ~40% abaixo do esperado, o projeto não se paga em 5 anos. A tese é, no fundo, sobre **velocidade de aquisição de hectares**.

## 4. Case Real (dados a coletar)

Para fechar o trabalho, substituir as premissas por dados verificáveis: (1) tamanho de mercado atual com fonte citada e datada; (2) preço e escopo de concorrentes reais (Perfect Flight, SIMA, SSCrop); (3) caso de uma fazenda representativa do Centro-Oeste — área, cultura, **perda média por safra**, gasto com insumos, horas de inspeção — traduzido em **R$ economizados/ano** (a proposta de valor quantificada que justifica o preço/ha); (4) cotações reais de drone, sensores, nuvem e equipe para o CAPEX/OPEX; e (5) recálculo dos indicadores com esses números na planilha. Como a equipe está em Goiânia, no coração do agro, o acesso a um caso real é uma vantagem.

## 5. Riscos e mitigações

- **Adoção mais lenta que o previsto (risco nº 1):** mitigar com pilotos que provem o ROI em R$, canal de vendas via cooperativas e revendas, e contratos plurianuais que reduzem a rotatividade.
- **Conectividade no campo:** mitigada por design (operação offline-first no gateway de borda).
- **Custo de nuvem/processamento:** empurrar inferência leve para a borda reduz o OPEX variável.
- **Prompt/segurança e qualidade do dado:** validação humana (agrônomo) sobre as recomendações da IA antes da ação em campo.
- **Dependência de poucos clientes grandes:** diversificar a base para reduzir concentração de receita.

## 6. Conclusões e próximos passos

O problema é real e validado pelo mercado; a solução tem diferencial defensável (integração + offline-first + prescrição acionável); é construível em fases. No modelo recomendado (Híbrido), a análise indica **viabilidade**: VPL positivo e TIR muito acima da TMA em todos os níveis testados (14,5% / 20% / 30%), com **payback descontado de ~3 anos**. A honestidade da análise está na sensibilidade: se a adoção decepcionar (~40% abaixo), o projeto **não se paga no horizonte** — logo, a decisão de investir é uma decisão sobre a capacidade de **acelerar a adoção de hectares**.

**Próximos passos (MVP até julho):** (1) construir o ciclo "voo → análise de IA → alerta" com uma fonte de dado e um caso de uso; (2) rodar um piloto em uma fazenda real e medir o R$ economizado; (3) coletar as cotações e preços de concorrentes para recalibrar a planilha; (4) consolidar os entregáveis (apresentação, vídeo, artigo) sobre estes números.

## Referências e fontes a verificar

As premissas devem ser confirmadas, com fonte citada e datada, antes da entrega final:
- **TMA / Selic:** Banco Central do Brasil — decisão do Copom (jun/2026). Reconfirmar a taxa vigente na data da apresentação.
- **Concorrentes:** Perfect Flight, SIMA e SSCrop — páginas oficiais das empresas (verificar os números de hectares e o escopo de cada serviço).
- **Conectividade rural:** usar uma fonte oficial (ex.: pesquisa setorial de conectividade no campo) e citar o ano da medição.
- **CAPEX/OPEX e preços por hectare:** são premissas próprias deste estudo, sem fonte externa; substituir por cotações reais de fornecedores e pela tabela de preços dos concorrentes.

> **Limite de confiança:** os números financeiros são premissas conferidas, não dados verificados. A defesa final depende de substituí-los pelos dados reais da Seção 4.
