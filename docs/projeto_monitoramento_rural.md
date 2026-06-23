# 🌾 Plataforma Inteligente Integrada de Monitoramento Rural

## IA · Drones · IoT · Visão Computacional — *Documento de Concepção (Engenharia Econômica)*

**Autores da Proposta:** [preencher — equipe]
**Data:** [preencher] / 2026
**Setor/Indústria:** AgTech · Agricultura de Precisão · IA aplicada ao Agronegócio (B2B)
**Nome do produto:** *(a decidir — ver sugestões na Seção 7)*

> **Como usar este documento.** Ele segue exatamente a estrutura do enunciado da disciplina
> (0 → 5) e foi pensado para alimentar os quatro entregáveis: **apresentação de 3 min**,
> **relatório de 6 páginas**, **vídeo de 3 min** e o **artigo opcional**. Os trechos marcados
> com 🟡 **[PREMISSA]** são hipóteses de trabalho que **precisam ser validadas com dados reais**
> (cotações, preços de concorrentes, caso de fazenda) antes da entrega — em especial na Seção 4
> ("Case Real / Dados reais"). Os números financeiros da Seção 3.2 são **ilustrativos e
> matematicamente conferidos**, servindo de *modelo* a ser recalibrado com os dados que vocês coletarem.

---

## 0. Contextualização *(essencial)*

O agronegócio brasileiro opera hoje sob três pressões simultâneas: **margens apertadas** (insumos
são um dos maiores custos da lavoura), **exigência crescente de rastreabilidade e sustentabilidade**
(mercados premium e compradores passaram a exigir cadeias com boas práticas e baixo desmatamento),
e uma **janela de decisão muito curta** — pragas, doenças e estresse hídrico podem comprometer a
safra em poucos dias se não forem detectados a tempo.

Ao mesmo tempo, três habilitadores tecnológicos amadureceram:

- **Conectividade rural** — a cobertura de internet no campo cresceu de forma expressiva; uma
  parcela relevante da área agrícola já conta com 4G/5G, viabilizando ferramentas digitais antes
  inviáveis. *(Dado de mercado a confirmar na Seção 4.)*
- **Custo decrescente de drones e sensores** — drones agrícolas e sensores IoT ficaram mais
  acessíveis, e boa parte do maquinário novo já sai de fábrica conectado.
- **IA e visão computacional** maduras o suficiente para análises de imagem (NDVI, detecção de
  pragas/falhas de plantio, contagem) com precisão operacional.

A consequência é uma transição em curso para "fazendas inteligentes" (uso integrado de dados, IoT
e modelos preditivos). **Existe demanda comprovada e concorrentes ativos** (ver Seção 1 e 4), o que
reduz o risco de mercado: o problema não é "convencer o produtor de que a tecnologia serve" — isso
já está provado —, e sim **entregar uma solução integrada, confiável e com retorno financeiro claro.**

> **Por que isto é relevante para Engenharia Econômica:** toda a tese do projeto é que o produtor
> investe (CAPEX/assinatura) hoje para **reduzir perdas e custos** ao longo da safra. O papel da
> análise econômica é provar que esse investimento se paga — e em quanto tempo (*payback*) — tanto
> para **o cliente** (a fazenda) quanto para **a startup** (o negócio).

---

## 1. O Problema (A Dor)

Quem sofre com isso

- **Produtores rurais (médias e grandes fazendas de grãos)** que perdem produtividade por detecção
  tardia de pragas, doenças, falhas de plantio, estresse hídrico e aplicação ineficiente de insumos.
- **Gerentes agrícolas / agrônomos** que dependem de inspeção visual a pé/caminhonete — lenta,
  amostral e sujeita a erro — em áreas de milhares de hectares.
- **Cooperativas e tradings** que precisam de rastreabilidade e dados consistentes para crédito,
  seguro agrícola e acesso a mercados que exigem comprovação de boas práticas.

Como resolvem hoje

- Inspeção manual amostral + experiência do agrônomo.
- Ferramentas **fragmentadas**: um app para imagens de satélite, outra empresa para voo de drone,
  uma planilha para sensores, e o ERP da fazenda à parte — **sem integração**.
- Imagens de satélite gratuitas têm **baixa resolução e alta latência** (nuvens, dias de defasagem),
  insuficientes para decisão em janela curta.

Por que as soluções atuais falham

- **Fragmentação:** o dado existe, mas espalhado; ninguém junta drone + IoT + satélite + histórico
  em uma única recomendação acionável.
- **Conectividade intermitente no field:** muitas soluções assumem internet estável e quebram em
  zonas sem sinal (o produtor precisa de operação **offline-first**).
- **Falta de tradução em decisão:** entregam "mapas bonitos", não **prescrições** (onde, quanto e
  quando aplicar) prontas para o maquinário.
- **Retorno não demonstrado:** o produtor é cético; sem prova de **redução de custo / aumento de
  produtividade em R$**, a adoção trava.

> **Dimensão da dor (a quantificar no Case, Seção 4):** quanto a fazenda-alvo perde por safra com
> (a) perdas por detecção tardia, (b) excesso de insumos por aplicação uniforme em vez de taxa
> variável, (c) horas de inspeção manual? Esse número é a **base do valor** que vendemos.

---

## 2. A Nossa Solução (A Proposta)

Pitch de elevador

> Uma plataforma única que conecta **drones, sensores IoT e visão computacional com IA** para
> transformar imagens e leituras do campo em **decisões acionáveis** — alertas de praga, mapas de
> prescrição de insumos e indicadores de produtividade — entregues ao produtor mesmo em áreas com
> conectividade ruim. Para médias e grandes fazendas que querem **reduzir perdas e custo de insumos**
> com retorno mensurável**, e não apenas "mais um painel".

O Produto (camadas de valor)

1. **Captura integrada:** voos de drone (RGB + multiespectral) + rede de sensores IoT de solo/clima
   - imagens de satélite, tudo no mesmo mapa georreferenciado da propriedade.
2. **Cérebro de IA / Visão Computacional:** detecção de anomalias (pragas, doenças, falhas de
   plantio), índices de vegetação (ex.: NDVI), estimativa de estresse hídrico e previsão simples de
   produtividade por talhão.
3. **Camada de decisão:** geração de **mapas de prescrição de taxa variável (VRT)** exportáveis para
   o maquinário, além de alertas priorizados ("talhão 7: foco de praga, agir em 48h").
4. **Operação offline-first:** o *gateway* na fazenda coleta e processa localmente; sincroniza com a
   nuvem quando há rede. O produtor não fica "cego" sem sinal.

O Grande Diferencial (o que nos torna difíceis de copiar)

- **Integração ponta-a-ponta** (drone + IoT + satélite + ERP) em uma camada só — versus concorrentes
  que cobrem apenas um pedaço.
- **Tradução em prescrição acionável e em R$**, não só visualização.
- **Resiliência de conectividade** (offline-first) projetada para a realidade do campo brasileiro.
- **Base de dados proprietária** que melhora os modelos a cada safra (efeito de rede de dados).

---

## 3. Metodologia da Solução

### 3.1 Técnico — Arquitetura de Desenvolvimento

A arquitetura é pensada em **camadas**, separando captação, borda, processamento, dados e aplicação.
Essa separação permite começar simples no MVP e escalar sem reescrever o núcleo.

```plaintext

[ CAMPO / EDGE ]                    [ NÚVEM ]                       [ USUÁRIO ]
 Drone (RGB + multiespectral) ┐
 Sensores IoT (solo, clima)   ├─► Gateway de borda  ──(sync)──►  Pipeline de    ──►  Dashboard web/mobile
 Imagem de satélite           ┘   (buffer offline,              processamento        + Alertas (app/WhatsApp)
                                   pré-processamento,           pesado:              + Mapas de prescrição (VRT)
                                   inferência leve)             ortomosaico,         + Relatórios p/ crédito/seguro
                                                                treino de modelos,
                                                                CV + IA preditiva
                                                                        │
                                                                [ DADOS ]
                                                          - Geoespacial (ex.: PostGIS)
                                                          - Séries temporais (IoT)
                                                          - Data lake de imagens
                                                                        │
                                                                [ INTEGRAÇÕES / APIs ]
                                                          - Exportação de mapas de prescrição
                                                            (padrões do agro, ex.: ISOBUS/ISO-XML)
                                                          - ERPs agrícolas e plataformas de maquinário
```

Decisões de arquitetura e justificativa

| Camada | Função | Racional de engenharia |
| --- | --- | --- |
| **Captação (Edge)** | Drone + IoT + satélite | Redundância de fonte: drone para alta resolução pontual, IoT para contínuo, satélite para cobertura ampla/baixo custo |
| **Borda (Gateway)** | Buffer offline, pré-processamento, inferência leve | Resolve conectividade intermitente; reduz volume enviado à nuvem (custo) |
| **Processamento (Núvem)** | Ortomosaico, treino de modelos, CV pesado | Escala elástica; concentra GPU onde compensa |
| **Dados** | Geoespacial + séries temporais + imagens | Cada tipo de dado tem o banco certo; evita gargalo |
| **Aplicação** | Dashboard, alertas, prescrições | É onde o valor "vira decisão"; foco em UX simples para o campo |
| **Integração** | Exportar prescrição p/ maquinário e ERP | Sem integração, o dado não vira ação — é o "último metro" do valor |

> 🟡 **[VERIFICAR — técnico]** Padrões e integrações de maquinário (ISOBUS/ISO-XML, plataformas de
> tratores conectados) são **reais e relevantes**, mas o **mecanismo exato de integração** (formatos,
> APIs, certificações) deve ser confirmado na documentação atual de cada fabricante antes de prometer
> compatibilidade. Não assuma uma API específica sem checar a doc vigente.
**Faseamento técnico (MVP → produto)**

- **MVP (até julho):** 1 fonte de dado bem-feita (ex.: drone RGB) + 1 caso de IA (NDVI ou detecção
  de falha de plantio) + dashboard básico + 1 fazenda-piloto. Provar o ciclo "voo → análise → alerta".
- **V1:** adicionar IoT e satélite; gerar mapa de prescrição exportável.
- **V2:** modelos preditivos + integrações com maquinário/ERP + base multi-fazenda.

---

### 3.2 Financeiro — Modelo de Negócio e Viabilidade

Esta seção responde diretamente à pergunta central da disciplina:
**a partir de quando o projeto dá lucro / se paga?** A metodologia segue os indicadores do material
de aula: **TMA, VPL, TIR, Payback (simples e descontado), IBC e ROIA**, com **análise de
sensibilidade**.

#### 3.2.1 Como o negócio ganha dinheiro (modelo de receita)

Há três arquiteturas possíveis de monetização. Recomendamos a **(A)** como núcleo, por ser a de
melhor margem e *payback* mais rápido, com **(B)** como upsell:

| Modelo | Como cobra | CAPEX (nosso) | Margem | Velocidade de payback |
| --- | --- | --- | --- | --- |
| **(A) SaaS por hectare** *(recomendado)* | Assinatura anual **R$/ha/ano** (drone/IoT do cliente ou parceiro) | Baixo | Alta | Rápida |
| **(B) Monitoramento como serviço (DaaS)** | Pacote completo, incluindo voos (frota nossa) | Alto (frota) | Média | Mais lenta |
| **(C) Híbrido** | *Setup fee* único + SaaS recorrente | Médio | Alta | Média |

**Decisão recomendada:** núcleo **SaaS por hectare** (receita recorrente / ARR — bom para valuation
e previsibilidade), com **taxa de implantação** (onboarding/integração) e um **tier de serviço
gerenciado** (DaaS) como upsell para quem não quer operar drone próprio.

> 🟡 **[PREMISSA-CHAVE]** O **preço por hectare** é a variável mais sensível do modelo. Ele precisa
> ser ancorado em **benchmark real de concorrentes** (Seção 4). Todo o resultado abaixo se move com ele.

#### 3.2.2 Taxa Mínima de Atratividade (TMA)

Conforme o material, a TMA é o **custo de oportunidade**: a melhor aplicação de baixo risco
disponível. Hoje a referência é a **Selic = 14,50% a.a. (Copom, jun/2026)**.

| Cenário de TMA | Valor | Justificativa |
| --- | --- | --- |
| **Piso (custo de oportunidade puro)** | **14,5% a.a.** | Selic — "deixar o dinheiro no banco sem dor de cabeça" |
| **Recomendada (projeto/venture)** | **20% a.a.** | Selic + ~5,5 p.p. de prêmio de risco para um negócio early-stage |
| **Estresse (conservadora)** | **30% a.a.** | Investidor exige retorno alto pelo risco de adoção |

> Defesa de banca: "Usamos a Selic como piso porque é o que o material define como TMA; adicionamos
> prêmio de risco porque um projeto de tecnologia tem risco maior que um título público. Mostramos que
> o projeto sobrevive **mesmo a 30%**." *(Conferir Selic na data da entrega — há reunião do Copom em
> 17/06/2026 e o mercado projeta queda para ~13% até o fim de 2026.)*

#### 3.2.3 Premissas do modelo *(ilustrativas — substituir por dados reais no Case)*

🟡 **Todos os valores abaixo são PREMISSAS de trabalho.** Eles existem para demonstrar o *método* e
foram **conferidos matematicamente** (script reproduzível). Não são dados de mercado verificados.

- **Investimento inicial (Ano 0):** R$ 380.000 — desenvolvimento do MVP, infraestrutura inicial,
  drone + sensores do piloto, registro/jurídico.
- **Modelo:** SaaS asset-light a **R$ 25/ha/ano**.
- **Curva de adoção (ha contratados):** Ano 1: 25 mil · Ano 2: 70 mil · Ano 3: 160 mil ·
  Ano 4: 320 mil · Ano 5: 550 mil.
- **Custo variável** (nuvem, processamento, suporte): **30% da receita**.
- **Custo fixo** (equipe + infra base), por ano: 0,9 · 1,2 · 1,9 · 3,2 · 5,0 (em R$ milhões).
- **Horizonte:** 5 anos (igual ao exemplo do material de aula).

**Fluxo de caixa líquido resultante (R$):**

| Ano | 0 | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| **Receita** | — | 625.000 | 1.750.000 | 4.000.000 | 8.000.000 | 13.750.000 |
| **Fluxo líquido** | −380.000 | −462.500 | +25.000 | +900.000 | +2.400.000 | +4.625.000 |

#### 3.2.4 Indicadores — Cenário Base

| Indicador | TMA 14,5% | TMA 20% | TMA 30% | Leitura |
| --- | --- | --- | --- | --- |
| **VPL** | R$ 3.581.113 | R$ 2.788.869 | R$ 1.774.627 | **> 0 → viável** em todas |
| **TIR** | 79,9% a.a. | 79,9% | 79,9% | **≫ TMA** (TIR não muda com a TMA) |
| **Payback simples** | 2,91 anos | 2,91 | 2,91 | recupera o capital em ~2 anos e 11 meses |
| **Payback descontado** | 3,12 anos | 3,20 | 3,37 | recupera **considerando o custo do dinheiro** |
| **IBC** | 10,42 | 8,34 | 5,67 | **> 1 → cria valor** |
| **ROIA** | 59,8% a.a. | 52,8% | 41,5% | ganho real **acima** da TMA |

> ⚠️ **Honestidade analítica:** a TIR de ~80% é **alta porque a curva de adoção premissada é
> agressiva** (escala de software). Não vendam isso como certeza — a prova de robustez está na
> **análise de sensibilidade abaixo**, que mostra o que acontece se a adoção decepcionar.

#### 3.2.5 "A partir de quando se tem lucro?" — três respostas (e a correta)

A pergunta tem três significados; o relatório fica forte ao distinguir os três:

1. **Break-even operacional** (o ano em que o fluxo anual deixa de ser negativo): **Ano 2/3** no
   cenário base. É quando a operação "se sustenta no ano".
2. **Payback simples** (quando a soma acumulada zera o investimento, sem desconto): **≈ 2,91 anos**.
3. **Payback descontado** (quando se recupera o investimento **já pagando a TMA** — a definição mais
   rigorosa de "começar a criar riqueza"): **≈ 3,1 a 3,4 anos**, conforme a TMA.

> **Resposta de banca:** "O projeto recupera o capital investido em **menos de 3 anos** e, mesmo
> descontando o custo do dinheiro a uma TMA exigente, **cria valor a partir do 4º ano**. Como o
> horizonte é de 5 anos, ele é **viável** — VPL positivo, TIR muito acima da TMA e IBC > 1."

#### 3.2.6 Análise de Sensibilidade (o teste de estresse)

O material enfatiza que o **motor comercial (vendas/adoção)** é o parâmetro crítico. Variando adoção,
preço e custo:

| Cenário | Premissa | VPL (TMA 20%) | TIR | Payback desc. | Veredito |
| --- | --- | --- | --- | --- | --- |
| **Otimista** | adoção +25%, preço +10% | R$ 6.003.722 | 127,7% | 2,35 anos | Muito viável |
| **Base** | premissas centrais | R$ 2.788.869 | 79,9% | 3,20 anos | Viável |
| **Pessimista** | adoção −40%, preço −15% | **−R$ 572.163** | −2,2% | **não recupera** | **Inviável no horizonte** |

> **Conclusão da sensibilidade (e a tese central de risco):** a viabilidade **depende da adoção**.
> Se o ritmo de contratação de hectares ficar ~40% abaixo do esperado, o projeto **não se paga em 5
> anos**. Por isso o foco de execução e o risco número 1 do negócio é a **velocidade de aquisição de
> clientes/hectares** — e é nela que a defesa financeira deve concentrar o argumento de mitigação
> (pilotos com ROI provado, canal via cooperativas/revendas, contratos plurianuais).

#### 3.2.7 Onde o capital é mais sensível (próximos refinamentos)

- **Preço/ha** e **curva de adoção** → maior impacto (ver sensibilidade).
- **Custo de nuvem/processamento** → empurrar inferência leve para a borda reduz OPEX variável.
- **Frota de drones (se modelo B)** → vira CAPEX pesado e muda o payback; por isso o núcleo
  recomendado é asset-light.

> *Reprodutibilidade:* os indicadores acima foram calculados por um script de fluxo de caixa
> descontado (VPL/TIR por bissecção; payback simples e descontado; IBC = VP dos benefícios ÷
> investimento; ROIA = IBC^(1/n) − 1). Recomenda-se anexar a planilha/Excel equivalente ao relatório.

---

## 4. Case Real *(<<< Dados Reais — a coletar)*

Esta seção é onde o trabalho ganha nota: **trocar as premissas 🟡 por dados verificáveis.** Roteiro:

4.1 Validar o tamanho de mercado (com fonte e data)

- Confirmar números atuais de: área agrícola com conectividade, ritmo de expansão de área plantada,
  tamanho do mercado de agricultura de precisão/agtech no Brasil.
- ⚠️ Há projeções antigas circulando (ex.: "mercado deve crescer R$ 40 bi até 2026", de 2022).
  **Use uma fonte atual e cite-a** — não repita projeção velha como se fosse fato de hoje.
 **4.2 Mapear concorrentes reais (já existem — isto valida a demanda)**

- **Perfect Flight** (SP) — gestão/rastreabilidade de pulverização aérea; reporta dezenas de milhões
  de hectares digitalizados.
- **SIMA** (origem argentina, atua no Brasil) — monitoramento agrícola georreferenciado, com modo
  offline; reporta milhões de hectares monitorados.
- **SSCrop** e outras plataformas de gestão rural.
- Levantar **preço, escopo e o que cada um NÃO faz** → é aí que se posiciona o diferencial de integração.
**4.3 Construir o caso de uma fazenda real (ou representativa)**

- Escolher um perfil de fazenda do Centro-Oeste (grãos) — **vocês estão em Goiânia, no coração do
  agro**, o que facilita acesso a um caso real.
- Levantar: área (ha), cultura, **perda média por safra** por detecção tardia, **gasto com insumos**,
  horas de inspeção. Traduzir em **R$ economizados/ano** com a plataforma → essa é a **proposta de
  valor quantificada** e o que justifica o preço/ha.
**4.4 Cotações reais para o CAPEX/OPEX (substituir as premissas da Seção 3.2.3)**

- Cotar: 1 drone (RGB e/ou multiespectral), kit de sensores IoT, custo de nuvem/processamento,
  conectividade rural, custo de equipe.
- ⚠️ **Não inventar preços.** Cada número deve vir de uma cotação ou fonte; marcar a data.

**4.5 Recalcular os indicadores com os dados reais** e comparar com o cenário ilustrativo da Seção 3.2.

---

## 5. Conclusões

- **O problema é real e já validado pelo mercado** (concorrentes ativos, adoção crescente de agtech):
  o risco não é de demanda, é de **execução comercial**.
- **A solução tem diferencial defensável**: integração ponta-a-ponta + operação offline-first +
  tradução em prescrição acionável, onde os concorrentes cobrem só um pedaço.
- **Tecnicamente é construível em fases**, com um MVP enxuto até julho.
- **Financeiramente, o modelo ilustrativo é viável**: VPL > 0 e TIR ≫ TMA em todos os níveis de
  TMA testados (14,5% / 20% / 30%), com **payback descontado de ~3 anos**.
- **A honestidade da análise está na sensibilidade**: se a adoção ficar ~40% abaixo do esperado, o
  projeto **não se paga no horizonte** — logo, a tese de investimento é, no fundo, uma **tese sobre
  velocidade de adoção de hectares**, e é isso que o plano de execução precisa endereçar.

> ⚠️ **Limite de confiança deste documento:** os números financeiros são **premissas conferidas
> matematicamente**, não dados de mercado verificados. A nota e a defesa dependem de substituí-los
> pelos dados reais da Seção 4. Não apresente os valores ilustrativos como se fossem reais.

---

## 6. Anexo A — Perguntas-chave e como respondê-las

Mapa das perguntas que uma banca/juiz faz, e onde/como respondê-las.

| # | Pergunta | Como responder | Onde está |
| --- | --- | --- | --- |
| 1 | Qual o problema e quem sofre? | Dado de perda/custo por safra de um perfil real de fazenda | §1, §4.3 |
| 2 | Por que agora? | Conectividade rural + custo de drone/IoT caindo + IA madura | §0 |
| 3 | Já não existe isso? | Sim, mas fragmentado — mostrar o que concorrentes NÃO fazem | §2, §4.2 |
| 4 | Como funciona tecnicamente? | Arquitetura em camadas + faseamento MVP→V2 | §3.1 |
| 5 | Como ganha dinheiro? | SaaS R$/ha recorrente + setup + DaaS (upsell) | §3.2.1 |
| 6 | **A partir de quando dá lucro?** | Break-even (ano 2/3), payback simples (~2,9a), **payback descontado (~3,1–3,4a)** | §3.2.5 |
| 7 | É viável? Prove. | VPL>0, TIR≫TMA, IBC>1, ROIA>0 em TMA de 14,5/20/30% | §3.2.4 |
| 8 | E se der errado? | Sensibilidade: pessimista não se paga → risco = adoção | §3.2.6 |
| 9 | Qual o maior risco? | Velocidade de aquisição de hectares; mitigação via pilotos/cooperativas | §3.2.6, §5 |
| 10 | Qual a fonte dos números? | Cotações + concorrentes + caso real, datados | §4 (a preencher) |

---

## 7. Anexo B — Mapa dos entregáveis

| Entregável | Duração/limite | O que priorizar | Fonte no doc |
| --- | --- | --- | --- |
| **Apresentação** | 3 min | Problema (1 número de dor) → solução → **payback** → 1 slide de sensibilidade | §1, §2, §3.2.5–6 |
| **Relatório** | 6 páginas | 0–5 condensados; tabela de indicadores + gráfico de fluxo acumulado | doc inteiro |
| **Vídeo (YouTube)** | 3 min | Narrativa: dor real → demo/mockup → "se paga em ~3 anos" | §1, §2, §3.2.5 |
| **Artigo** *(opcional)* | — | Aprofundar metodologia financeira (VPL/TIR/sensibilidade) + arquitetura | §3 |

**Sugestão de 3 minutos (roteiro de apresentação):**

1. (0:00–0:30) A dor, com **um número real** de perda por safra.
2. (0:30–1:15) A solução e o diferencial de integração.
3. (1:15–1:45) Como funciona (arquitetura em 1 imagem).
4. (1:45–2:30) **Viabilidade:** payback ~3 anos, VPL>0, TIR≫TMA.
5. (2:30–3:00) Risco (adoção) + pedido (piloto/investimento).

---

## 8. Anexo C — Premissas e pendências de verificação

| Item | Valor usado | Status | Ação |
| --- | --- | --- | --- |
| Selic (base da TMA) | 14,50% a.a. | ✅ Real (Copom, jun/2026) | Reconferir na data da entrega |
| Preço por hectare | R$ 25/ha/ano | 🟡 Premissa | Benchmark com concorrentes (§4.2) |
| Curva de adoção (ha) | 25k→550k em 5 anos | 🟡 Premissa | Calibrar com canal de vendas realista |
| CAPEX inicial | R$ 380.000 | 🟡 Premissa | Cotar drone, sensores, infra, equipe (§4.4) |
| Custos fixo/variável | ver §3.2.3 | 🟡 Premissa | Substituir por cotações reais |
| Tamanho de mercado | — | ⚠️ Pendente | Buscar fonte atual e citar (§4.1) |
| Concorrentes | Perfect Flight, SIMA, SSCrop | ✅ Reais | Levantar preço/escopo de cada um |
| Integração maquinário | ISOBUS/ISO-XML | 🟡 A confirmar | Validar na doc atual do fabricante |

---

## 9. Anexo D — Ideias de nome *(a decidir)*

Direções possíveis (apenas pontos de partida): **AgriSense, CampoVivo, TerraIQ, SafraVision,
AgroVista, RaízData, Lavoura.AI, SoloVivo, AgroPulse**.
> Antes de adotar, **verificar disponibilidade** de marca (INPI) e domínio — não assumido aqui.

---

*Documento de concepção — base de trabalho. Recalibrar Seções 3.2 e 4 com dados reais antes da entrega.*
