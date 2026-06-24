# Plataforma Inteligente de Monitoramento Rural com IA e Visão Computacional
## Viabilidade Econômica de Três Modelos de Receita B2B

**Autores:** Higor Ferreira Silva · Igor Barbosa Lino · Wallyson Miranda Aguiar
**Instituição:** Escola de Engenharia Elétrica, Mecânica e de Computação (EMC) — Universidade Federal de Goiás (UFG) — Goiânia, GO, Brasil
**Disciplina:** Engenharia Econômica — 2026

> Os valores financeiros são premissas de trabalho conferidas matematicamente, **não** dados de mercado verificados (ver Seção 5).

---

### Resumo

Este artigo avalia a viabilidade econômica de uma plataforma B2B de monitoramento rural que integra drones, sensores IoT e visão computacional com inteligência artificial, voltada a médias e grandes fazendas de grãos do Centro-Oeste brasileiro. O problema central de Engenharia Econômica é determinar se, e em quanto tempo, o investimento se paga. Comparam-se três arquiteturas de receita — SaaS *asset-light* (A), *Drone-as-a-Service* com frota própria (B) e Híbrido com taxa de implantação mais assinatura (C) — por meio de Valor Presente Líquido (VPL), Taxa Interna de Retorno (TIR), *payback* simples e descontado, Índice Benefício/Custo (IBC) e Retorno sobre Investimento Adicionado (ROIA). A Taxa Mínima de Atratividade (TMA) é ancorada na Selic vigente (14,25% a.a., Copom de 17/06/2026) e estressada a 20% e 30% a.a. O modelo Híbrido apresenta o melhor desempenho (VPL de R$ 2,94 mi a 20% de TMA; TIR de 85,6%; *payback* descontado de ≈3 anos). A análise de sensibilidade mostra que a viabilidade depende criticamente da velocidade de adoção de hectares: sob queda de 40% na adoção, o resultado migra de positivo para negativo, conforme a hipótese de elasticidade de custos. Conclui-se que a tese de investimento é, no fundo, uma tese sobre execução comercial.

**Palavras-chave:** Engenharia Econômica, VPL, TIR, *payback*, AgTech, agricultura de precisão, viabilidade econômica, SaaS.

---

## 1. Introdução e Contextualização

O agronegócio brasileiro opera sob margens apertadas, exigência crescente de rastreabilidade e janelas de decisão curtas: pragas, doenças e estresse hídrico podem comprometer a safra em poucos dias se não forem detectados a tempo. Simultaneamente, três habilitadores tecnológicos amadureceram: a expansão da conectividade rural, a queda no custo de drones e sensores, e o avanço da IA e da visão computacional a níveis de precisão operacional. O resultado é uma transição em curso para "fazendas inteligentes".

Diferentemente de mercados em que a tecnologia ainda precisa ser provada, aqui a demanda já está validada por concorrentes ativos com escala relevante (Seção 5). Esse movimento já se reflete no mercado: o segmento global de drones agrícolas foi avaliado em cerca de US$ 1,5 bilhão em 2025, com projeção de US$ 3,9 bilhões até 2031 (Mordor Intelligence, jan. 2026). O risco, portanto, não é de mercado, mas de execução comercial. O papel da análise de Engenharia Econômica é duplo: provar que o investimento se paga — e em quanto tempo — tanto para o produtor quanto para o negócio que oferece a plataforma.

Este trabalho concentra-se na perspectiva do negócio (a operação da plataforma) e responde à pergunta central da disciplina — "a partir de quando o projeto dá lucro?" — com os indicadores clássicos de fluxo de caixa descontado, acompanhados de análise de sensibilidade. Todos os valores monetários são premissas de trabalho, conferidas matematicamente por implementações independentes, e devem ser recalibrados com os dados reais discutidos na Seção 5.

## 2. Fundamentação Teórica e o Problema do Cliente

### 2.1 Fundamentação teórica

A agricultura digital, sistematizada por publicações institucionais brasileiras, utiliza dados para otimizar operações, prever problemas e melhorar a eficiência produtiva. Ela se apoia em três pilares que amadureceram em conjunto: a instrumentação do campo por sensores e dispositivos de IoT, a captação de imagens por drones e satélites, e a análise desses dados por modelos de aprendizado de máquina. No núcleo técnico, redes neurais convolucionais e arquiteturas como YOLO e EfficientNet têm sido aplicadas à identificação de pragas, à classificação de culturas e ao reconhecimento de padrões em imagens de campo, com acurácias operacionalmente úteis relatadas na literatura — por exemplo, 94,2% de acurácia com EfficientNet-B0 na detecção de pragas em ambiente natural. A integração entre robótica móvel, IoT e computação em nuvem para aquisição de dados agrícolas foi demonstrada em arquiteturas compostas por sensores, comunicação sem fio e servidores, enquanto a análise massiva de dados operacionais via IoT — exemplificada pelo processamento de mais de 18 milhões de registros oriundos de 352 secadores de grãos conectados — evidencia o potencial de diagnóstico e automação a partir de dados de campo.

No plano da validação comercial, o caso da WiMilk, AgTech brasileira que une IA, visão computacional e monitoramento contínuo na pecuária leiteira, é frequentemente citado como evidência de adoção e geração de valor real. Cabe a ressalva de que se trata de domínio distinto (pecuária leiteira, e não grãos): o caso sustenta a tese tecnológica — soluções baseadas em dados geram valor mensurável —, mas não constitui comparável direto de mercado para a plataforma de grãos aqui proposta, papel reservado aos concorrentes da Seção 5.

A literatura também adverte que o retorno da agricultura de precisão é **dependente de contexto**, e não automático. Em estudo experimental conduzido em áreas de pastagem (Tifton 85) no Oeste de Santa Catarina, Silva e Maccari (2014) compararam o manejo por taxa variável com o manejo convencional e observaram que a técnica de precisão resultou em custo cerca de 32% superior (R$ 1.295,70/ha contra R$ 979,20/ha), sem diferença estatisticamente significativa de produtividade entre os dois sistemas; os autores concluíram que, naquele contexto, a precisão não proporcionou ganho economicamente viável. Esse resultado — de domínio (pastagem) e escala distintos do aqui analisado — reforça a postura metodológica deste trabalho: o ganho por hectare é uma **premissa a ser medida em piloto**, não um número a ser assumido.

### 2.2 O problema: a dor do cliente

É contra esse pano de fundo que se define o problema concreto. Médias e grandes fazendas de grãos perdem produtividade por **detecção tardia** de pragas, doenças, falhas de plantio e estresse hídrico, e gastam mais que o necessário com insumos por aplicação uniforme. Hoje o problema é endereçado por inspeção manual amostral, lenta e sujeita a erro em áreas de milhares de hectares, somada a **ferramentas fragmentadas**: um aplicativo de satélite, outro fornecedor para o voo de drone, uma planilha para sensores e o ERP da fazenda à parte, sem integração. O dado existe, mas está disperso e raramente se converte em uma decisão acionável no tempo certo.

As soluções atuais falham por quatro motivos: (i) fragmentação dos dados, que existem mas estão dispersos; (ii) pressuposto de conectividade estável, que quebra no campo; (iii) entrega de "mapas", e não de **prescrições acionáveis**; e (iv) retorno não demonstrado em reais, o que trava a adoção. A consequência prática é uma perda financeira recorrente que o produtor sequer mede com precisão — e é justamente essa perda que dimensiona o valor a ser capturado pela solução. A própria evidência contraditória da pastagem reforça que esse valor não pode ser presumido: precisa ser demonstrado, em reais, para cada perfil de fazenda.

## 3. Proposta de Solução

Propõe-se uma plataforma única que conecta **drones, sensores IoT e visão computacional com IA** e transforma imagens e leituras de campo em **decisões acionáveis**: alertas priorizados de praga e doença, mapas de prescrição de taxa variável (VRT) exportáveis para o maquinário e indicadores de produtividade por talhão, funcionando mesmo com conectividade ruim (operação *offline-first*).

Os diferenciais defensáveis são: integração ponta a ponta (drone, IoT, satélite e ERP) em uma camada única; tradução do dado em prescrição e em reais, e não apenas em visualização; resiliência de conectividade por projeto; e uma base de dados proprietária que melhora os modelos a cada safra (efeito de rede de dados).

## 4. Metodologia da Solução

### 4.1 Dimensão Técnica: arquitetura

A arquitetura é organizada em camadas, o que permite um Produto Mínimo Viável (MVP) enxuto e a escala sem reescrita do núcleo. A decisão central é a separação entre borda (campo) e nuvem: tarefas leves e o *buffer offline* ficam em um *gateway* na fazenda, enquanto o processamento pesado (ortomosaico, treino de modelos) fica na nuvem, com custo elástico.

| Camada | Função | Racional |
|---|---|---|
| Captação (Edge) | Drone (RGB/multiespectral) + IoT + satélite | Redundância de fonte de dado |
| Borda (Gateway) | *Buffer offline*, pré-processamento, inferência leve | Resolve conectividade; reduz custo de nuvem |
| Processamento (Nuvem) | Ortomosaico, treino, VC pesada | Escala elástica de GPU |
| Dados | Geoespacial + séries temporais + imagens | Cada dado no banco adequado |
| Aplicação | *Dashboard*, alertas, prescrição | Onde o dado vira decisão |
| Integração | Exportar prescrição (ISO-XML) e ERP | O "último metro" do valor |

O faseamento previsto é: MVP (uma fonte de dado, um caso de IA, *dashboard* e uma fazenda-piloto) → V1 (IoT, satélite e mapa de prescrição) → V2 (modelos preditivos, integração com maquinário e base multifazenda).

**Pipeline de dados e modelos de IA.** A camada inteligente é alimentada por um pipeline com etapas de limpeza, normalização, padronização, enriquecimento e validação dos dados, armazenados em estrutura apropriada para análises históricas. As fontes podem combinar bases públicas (por exemplo, PlantVillage e conjuntos da Embrapa) com bases próprias (drones, *smartphones* e sensores locais). Para o treino dos modelos de visão computacional, adota-se a partição usual de 70% para treino, 15% para validação e 15% para teste, avaliada por métricas de classificação e detecção — acurácia, precisão, *recall*, *F1-score* e *mAP* —, além da matriz de confusão. Essa disciplina metodológica é o que permite, na dimensão financeira, tratar a melhoria contínua dos modelos como um ativo (efeito de rede de dados) e não como custo recorrente sem retorno.

```
Campo / Edge      Drone (RGB + multiespectral) · IoT · satélite
      │
      ▼
Borda / Gateway   buffer offline · pré-processamento · inferência leve
      │  (sync)
      ▼
Nuvem             ortomosaico · treino de modelos · visão computacional pesada
      │
      ▼
Dados             geoespacial · séries temporais · data lake de imagens
      │
      ▼
Aplicação/Integr. dashboard · alertas · mapas de prescrição (VRT) · ERP/ISO-XML
```

### 4.2 Dimensão Financeira: viabilidade

**Indicadores e regras de decisão.** Adotam-se os indicadores clássicos de Engenharia Econômica. A TMA é o custo de oportunidade que serve de taxa de desconto. O VPL mede a riqueza criada no presente (viável se VPL > 0). A TIR é a taxa que zera o VPL (atrativo se TIR > TMA). O *payback* simples e o descontado medem o tempo de recuperação do capital, sem e com o custo do dinheiro. O IBC é a razão entre o valor presente dos benefícios e o investimento (cria valor se IBC > 1), e o ROIA, dado por ROIA = IBC^(1/n) − 1, expressa o ganho percentual real acima da TMA. Formalmente, com fluxos FC_t e horizonte n = 5: VPL = Σ FC_t / (1+i)^t, e a TIR é a taxa que torna VPL = 0.

**Taxa Mínima de Atratividade (TMA).** A referência de custo de oportunidade é a Selic vigente, **14,25% a.a.**, definida pelo Copom em 17/06/2026 (ata divulgada em 23/06/2026). Utilizam-se três níveis: **piso de 14,25%** (custo de oportunidade puro), **recomendado de 20%** (Selic mais prêmio de risco de *venture*) e **estresse de 30%**. A taxa deve ser reconferida na data de defesa.

**Premissas centrais (ilustrativas).** As premissas, conferidas matematicamente mas *não* verificadas no mercado, são: investimento inicial de R$ 380.000 no Ano 0; horizonte de 5 anos; curva de adoção de 25 mil a 550 mil hectares ativos; fazenda média de 3.000 ha por cliente; e, no modelo recomendado, preço de R$ 22/ha/ano somado a uma taxa de implantação.

**Referências de mercado para CAPEX e OPEX.** Para ancorar a ordem de grandeza das premissas, levantaram-se faixas reais de preço de fornecedores e fontes setoriais brasileiros (2024–2026). São *referências de calibração*, não cotações fechadas: os valores oscilam com fornecedor, configuração, região e escala, e devem ser confirmados por orçamento na data da compra. No CAPEX, um drone de mapeamento multiespectral (classe DJI Mavic 3 Multispectral, com RTK) custa entre R$ 36 mil e R$ 41,5 mil no varejo nacional; sensores de solo partem de ~R$ 1,5 mil, enquanto estações agrometeorológicas profissionais são vendidas sob orçamento (sem preço público) — a camada de IoT por área é estimada em R$ 20–120/ha por ano. No modelo B (frota própria), um drone de pulverização classe DJI Agras T50 (kit) custa de R$ 135 mil a R$ 180 mil. No OPEX, a conectividade rural via satélite (Starlink) custa de R$ 164 a R$ 329/mês mais o kit de antena (R$ 0,8–2,4 mil); o chip M2M parte de ~R$ 10/mês por dispositivo; a equipe é o item dominante (desenvolvedores de R$ 3 mil júnior a R$ 12 mil+ sênior por mês na base CLT; pilotos de drone agrícola de R$ 4 mil a R$ 8 mil/mês), lembrando que o custo real ao empregador costuma ser 1,7–2× o salário-base por causa dos encargos. Como verificação de coerência, o preço de serviços de mapeamento por drone praticado no mercado (R$ 8–40/ha) é da mesma ordem de grandeza do preço de R$ 22/ha/ano do modelo recomendado, o que sustenta a plausibilidade da premissa de receita.

| Tipo | Item | Faixa (Brasil, 2024–2026) |
|---|---|---|
| CAPEX | Drone mapeamento multiespectral (RTK) | R$ 36–41,5 mil |
| CAPEX | Drone pulverização (DJI Agras T50, kit) — só modelo B | R$ 135–180 mil |
| CAPEX | Sensor de solo (umidade/EC/temp/NPK) | a partir de R$ 1,5 mil |
| CAPEX | Estação agrometeorológica profissional | sob orçamento |
| CAPEX | Kit Starlink (antena) | R$ 0,8–2,4 mil |
| CAPEX/OPEX | Camada IoT (sensores), por ha/ano | R$ 20–120/ha |
| OPEX | Conectividade Starlink, por mês | R$ 164–329 |
| OPEX | Conectividade M2M, por chip/mês | a partir de R$ 10 |
| OPEX | Dev. de software (júnior–sênior)/mês | R$ 3–12 mil+ |
| OPEX | Piloto de drone agrícola/mês | R$ 4–8 mil |
| Referência | Serviço de mapeamento por drone | R$ 8–40/ha |
| Referência | Serviço de pulverização por drone | R$ 80–250/ha |

*Fontes: drone mapeamento (DronesX/LiliVendas/CentralDrone); Agras T50 (Próspera/Lojão do Drone); sensor de solo (Hensistemas); estação agrometeorológica (Sigma Sensors/Agrosystem, sob orçamento); Starlink (minhaconexao/Compre Rural); camada IoT e serviços (Investidor Rural, 2026); M2M (IOT Conect); salários de dev (querobolsa/meutudo/Glassdoor); piloto (IstoÉ Dinheiro/O Tempo–Firjan). Faixas de calibração, não cotações.*

**Reconstrução bottom-up (verificação de coerência).** Para tornar as métricas o mais transparentes possível, a tabela abaixo reconstrói o investimento do Ano 0 a partir dos preços unitários acima, distinguindo o que tem **fonte** (preço unitário) do que é **premissa** (quantidade e duração). O total reconstruído (R$ 254–401 mil) contém a premissa de R$ 380 mil, sustentando sua ordem de grandeza. De modo análogo, um OPEX de Ano 1 reconstruído com uma equipe de ~5 pessoas (encargos de 1,8×) resulta em ~R$ 805 mil/ano, coerente com o custo fixo de R$ 900 mil adotado no Ano 1.

| Componente (Ano 0) | Base | Faixa |
|---|---|---|
| Drone multiespectral RTK (×1) | varejo [fonte] | R$ 36–41,5 mil |
| Sensores + estação IoT (piloto) | sensor ≥ R$ 1,5 mil [fonte]; estação sob orçamento | R$ 15–40 mil |
| Equipe MVP (~6 m, 2–3 devs) | unit. [fonte]; qtd [assumida] | R$ 173–259 mil |
| Infra inicial + jurídico | [estimado] | R$ 30–60 mil |
| **Total reconstruído** | | **R$ 254–401 mil** |
| **Premissa do modelo** | | **R$ 380 mil** |

*Preços unitários têm fonte; quantidades e durações são premissas, sinalizadas. Encargos sobre folha: 1,8× (regra prática 1,7–2×).*

**Fluxo de caixa do modelo recomendado (C — Híbrido), em R$:**

| Ano | Receita | Custo total | Fluxo líquido | Acumulado |
|---|---|---|---|---|
| 0 | — | — | −380.000 | −380.000 |
| 1 | 716.667 | 1.115.000 | −398.333 | −778.333 |
| 2 | 1.840.000 | 1.752.000 | 88.000 | −690.333 |
| 3 | 4.120.000 | 3.136.000 | 984.000 | 293.667 |
| 4 | 8.106.667 | 5.632.000 | 2.474.667 | 2.768.333 |
| 5 | 13.633.333 | 9.090.000 | 4.543.333 | 7.311.667 |

**Comparação dos três modelos de receita** (validada por duas implementações independentes — Python e JavaScript). Valores de VPL em R$:

| Indicador | A) SaaS *asset-light* | B) DaaS frota própria | C) Híbrido (*setup*+SaaS) |
|---|---|---|---|
| Investimento Ano 0 | 380.000 | 380.000 | 380.000 |
| VPL (TMA 14,25% — Selic atual) | 3.622.344 | 864.845 | **3.784.968** |
| VPL (TMA 20% — recomendada) | 2.788.869 | 431.690 | **2.937.891** |
| VPL (TMA 30% — estresse) | 1.774.627 | −67.162 | **1.903.646** |
| TIR | 79,9% | 28,3% | **85,6%** |
| *Payback* simples | 2,91 anos | 4,21 anos | **2,70 anos** |
| *Payback* descontado (20%) | 3,20 anos | 4,70 anos | **3,07 anos** |
| IBC (20%) | 8,34 | 2,14 | 8,73 |
| ROIA (20%) | 52,8% a.a. | 16,4% a.a. | 54,2% a.a. |

A leitura, sob o método de decisão entre alternativas mutuamente excludentes, é direta. O modelo **C (Híbrido)** é o melhor: a taxa de implantação adianta caixa e produz o menor *payback* com o maior VPL. O modelo **A (SaaS)** é uma alternativa enxuta, simples de escalar, quase tão boa quanto C. O modelo **B (DaaS)** parece atraente pelo *ticket* maior, mas é intensivo em capital (frota crescente até 46 unidades no Ano 5) e de margem fina (serviço de campo: pilotos, logística, manutenção); seu VPL é muito menor, com *payback* próximo de 4,7 anos e valor negativo sob TMA de 30%. Recomenda-se rejeitar B como núcleo, mantendo-o, no máximo, como serviço *premium* pago pelo cliente.

**A partir de quando há lucro?** A pergunta admite três respostas, da mais simples à mais rigorosa, para o modelo C: o **break-even operacional** (o fluxo anual deixa de ser negativo) ocorre no Ano 2 (+R$ 88 mil); o **payback simples** é de ≈2,7 anos; e o **payback descontado** — definição mais rigorosa de início de criação de riqueza — é de ≈3,1 anos. Como o horizonte é de 5 anos, o projeto é viável: VPL positivo, TIR muito acima da TMA e IBC maior que 1.

**Análise de sensibilidade.** O motor do resultado é a adoção. Para a hipótese pessimista, apresentam-se dois limites de elasticidade de custo: "custo fixo" (a estrutura de custos não cai com a menor adoção — conservador) e "custo escalável" (os custos acompanham proporcionalmente a queda de adoção — otimista). A faixa resultante é a informação honesta.

| Cenário | VPL (20%) | Veredito |
|---|---|---|
| Otimista (ad. +25%, pr. +10%) | R$ 4,80 a 6,36 mi | Muito viável |
| Base (premissas centrais) | R$ 2,94 mi | Viável |
| Pessimista (ad. −40%, pr. −15%) | R$ −1,63 a +0,87 mi | Limítrofe/inviável |

A conclusão de risco é que, se a contratação de hectares ficar cerca de 40% abaixo do esperado e os custos não se ajustarem na mesma velocidade, o projeto não se paga no horizonte. A tese é, no fundo, sobre velocidade de aquisição de hectares.

## 5. Case Real e Validação de Mercado

A força do trabalho está em substituir as premissas por dados verificáveis. Esta seção separa, deliberadamente, o que já é verificável do que ainda precisa ser coletado.

**Demanda validada por concorrentes (verificado).** A Perfect Flight, AgTech brasileira de gestão e rastreabilidade de pulverização aérea, reportou da ordem de 25 a 27 milhões de hectares digitalizados e monitorados (dados de 2022). A SIMA, plataforma de monitoramento agrícola de origem argentina presente em oito países da América Latina, reportava mais de 8 milhões de hectares monitorados em 2025. Esses números confirmam a existência de demanda e de disposição a pagar; o diferencial proposto está na integração ponta a ponta e na entrega de prescrição acionável, e não em uma única função isolada.

**Tamanho de mercado.** Para a ordem de grandeza atual, a página do relatório da Mordor Intelligence (dados de jan. 2026) avalia o segmento global de drones agrícolas em cerca de US$ 1,5 bilhão em 2025, com projeção de US$ 3,9 bilhões até 2031 (CAGR de ~16,7%). As estimativas, contudo, variam conforme a fonte e a edição — de ~US$ 1,5 bi a ~US$ 5 bi para 2025 —, o que reforça a cautela ao citar tamanho de mercado. Projeções mais antigas e amplamente repetidas — por exemplo, a estimativa de R$ 40 bilhões para o mercado de agricultura de precisão até 2026 — datam de 2022 e não devem ser apresentadas como número corrente; cite sempre a fonte e o ano.

**Ordem de grandeza do valor por hectare (referência jornalística, 2022).** Como ponto de partida para dimensionar a economia por hectare, reportagem setorial estimou que a conectividade associada à agricultura de precisão poderia gerar economia da ordem de R$ 178 por hectare. O número é uma referência datada (2022) e de natureza jornalística, útil apenas como ordem de grandeza inicial: a economia efetiva de cada fazenda deve ser medida em piloto, sobretudo à luz da evidência contrária observada em pastagem (Silva e Maccari).

**Adoção real por produtores (verificado em reportagem, 2025).** Além dos fornecedores de tecnologia, há evidências jornalísticas recentes de adoção por grandes produtores de grãos. Reportagem de 2025 descreve uma propriedade do **Grupo SLC Agrícola** que, com aplicação localizada de defensivos e monitoramento de máquinas (agricultura de precisão), reduziu o uso de defensivos em até 90%. Em Mato Grosso do Sul, o **Grupo José Pessoa** relata o uso de IA para identificar a variedade de soja ideal por talhão e o momento de plantio. São casos jornalísticos de fazendas individuais — não estudos controlados —, mas, somados aos concorrentes, indicam que a adoção em grãos já está em curso. O contraponto da Seção 2 (pastagem) permanece válido: o ganho varia por contexto e deve ser medido em piloto.

**Caso de fazenda (a coletar).** Para quantificar a proposta de valor, deve-se levantar, em uma fazenda representativa do Centro-Oeste: área, cultura, perda média por safra por detecção tardia, gasto com insumos e horas de inspeção, traduzindo-os em reais economizados por ano. Como a equipe está em Goiânia, no coração do agro, o acesso a um caso real é uma vantagem operacional.

**CAPEX/OPEX (a cotar).** Os preços por hectare, o custo de nuvem, os equipamentos (drone e sensores) e a equipe são premissas próprias deste estudo, sem fonte externa; devem ser substituídos por cotações reais, datadas, e os indicadores recalculados.

## 6. Riscos e Mitigações

O risco número um é a adoção mais lenta que a prevista; mitiga-se com pilotos que comprovem o retorno em reais, canal de vendas via cooperativas e revendas e contratos plurianuais que reduzem a rotatividade. A conectividade intermitente no campo é mitigada por projeto, pela operação *offline-first* no *gateway* de borda. O custo de nuvem e processamento é contido empurrando-se inferência leve para a borda, o que reduz o OPEX variável. A qualidade do dado e a segurança das recomendações são tratadas por validação humana (agrônomo) antes da ação em campo. Por fim, a concentração de receita em poucos clientes grandes é mitigada pela diversificação da base.

## 7. Conclusões

O problema é real e validado pelo mercado: o risco não é de demanda, mas de execução comercial. A solução proposta tem diferencial defensável — integração, operação *offline-first* e tradução em prescrição acionável — e é construível em fases. Financeiramente, no modelo recomendado (Híbrido), a análise indica viabilidade: VPL positivo e TIR muito acima da TMA em todos os níveis testados (14,25%, 20% e 30%), com *payback* descontado de aproximadamente três anos.

A honestidade analítica reside na sensibilidade: se a adoção decepcionar em cerca de 40% e os custos não se ajustarem, o projeto não se paga no horizonte. Logo, a decisão de investir é, fundamentalmente, uma decisão sobre a capacidade de acelerar a adoção de hectares — por pilotos que comprovem o retorno em reais, canais via cooperativas e revendas e contratos plurianuais. Os números aqui apresentados são premissas conferidas, não dados verificados; a defesa final depende de substituí-los pelos dados reais da Seção 5.

---

## Referências

As referências marcadas com **[verificar]** não foram totalmente confirmadas nesta revisão e devem ser conferidas antes da entrega; as demais foram verificadas.

1. EMBRAPA. *Agricultura digital e inteligência artificial*. Infoteca-e, Embrapa Agricultura Digital, 2025. https://www.infoteca.cnptia.embrapa.br/infoteca/handle/doc/1180748 (acesso em 24 jun. 2026).
2. SANTOS, T. T.; BARBEDO, J. G. A.; TERNES, S.; CAMARGO NETO, J.; KOENIGKAN, L. V.; SOUZA, K. X. S. de. *Visão computacional aplicada na agricultura*. In: *Agricultura digital*, cap. 6. Campinas: Embrapa Agricultura Digital, 2020. https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1126261/ **(verificado)**
3. MASSRUHÁ, S. M. F. S. *IoT na Embrapa*. BNDES — Estudo Nacional de IoT (Produção de Alimentos, Fibras e Energia), jun. 2018. https://www.bndes.gov.br/arquivos/iot/04-embrapa.pdf **(verificado)**
4. PRAKASH, C.; SINGH, L. P.; GUPTA, A.; LOHAN, S. K. *Advancements in smart farming: A comprehensive review of IoT, wireless communication, sensors, and hardware for agricultural automation*. Computers and Electronics in Agriculture, Elsevier, 2023. https://www.sciencedirect.com/science/article/abs/pii/S0924424723004545 **(verificado)**
5. OLIVEIRA, F. S. de; SANTOS, D. E.; BRUHN, F. R. P.; BOHM, B. C.; SANTANA, B. S. *Visão Computacional na Agricultura de Precisão: Uma Análise Comparativa de Arquiteturas CNN no Diagnóstico de Doenças Foliares do Milho*. In: Anais da I ERAMIA-RS, Porto Alegre, RS, 2025. https://sol.sbc.org.br/index.php/eramiars/article/view/39457 **(verificado)**
6. BORGES, F. R. D. C.; SILVA, J. M. da. *Visão computacional para agricultura de precisão: detecção de pragas com deep learning em ambientes naturais*. Revista DELOS, Curitiba, v. 19, n. 77, p. 01-14, 2026. DOI: 10.55905/rdelosv19.n77-133. **(verificado)**
7. DURMUŞ, H.; GÜNEŞ, E. O. *Integration of the Mobile Robot and Internet of Things to Collect Data from the Agricultural Fields*. In: 2019 8th International Conference on Agro-Geoinformatics, p. 1-5, 2019. DOI: 10.1109/Agro-Geoinformatics.2019.8820578. **(verificado)**
8. SCHMIDT, D.; SELLITTO, M. A. *Análise de Dados Massivos de Secadores de Grãos via IoT: Eficiência, Riscos e Oportunidades*. Revista SODEBRAS, v. 47, n. Especial (XLVII International Sodebras Congress), Campinas-SP, set. 2025. ISSN 1809-3957. **(verificado)**
9. SILVA, D.; MACCARI, M. (orient.). *Viabilidade Técnica e Econômica do Sistema de Agricultura de Precisão em Áreas de Pastagens*. Iniciação Científica, Curso de Agronomia, Universidade do Oeste de Santa Catarina (UNOESC), Xanxerê, SC, 2014. **(verificado)** Estudo experimental em pastagem Tifton 85 (custo da precisão ~32% superior; sem diferença significativa de produtividade).
10. Banco Central do Brasil. *Taxa Selic*. https://www.bcb.gov.br (acesso em 24 jun. 2026).
11. Banco Central do Brasil. *Comunicado e Ata do Copom de 17/06/2026 — Selic reduzida para 14,25% a.a.* (jun. 2026).
12. Perfect Flight. https://www.perfectflight.com.br (acesso em 24 jun. 2026).
13. *Perfect Flight atinge ~25 milhões de hectares digitalizados e monitorados*, 2022 (dados de 2022). — **[verificar veículo/data exatos]**
14. SIMA — Sistema Integrado de Monitoramento Agrícola. https://sima.ag/pt (acesso em 24 jun. 2026).
15. *SIMA ultrapassa 8 milhões de hectares monitorados*, 2025. — **[verificar veículo/data exatos]**
16. *Agricultura de Precisão deve crescer R$ 40 bi até 2026*, 2022 (projeção antiga; tratar com cautela — substituída no texto pela estimativa Mordor 2025).
17. WiMilk — AgTech de detecção precoce de mastite bovina (IA e visão computacional). Equipe: G. Vargas (UEG), L. Plaster (UFG), P. Viana (PUC-GO); vencedora do Desafio AgroStartup 2025 (Senar Goiás). *Mais Goiás*, dez. 2025. **(verificado)**
18. EMBRAPA — Agência de Informação Tecnológica (Ageitec). *Agricultura de Precisão* (cana-de-açúcar). https://www.embrapa.br/web/agencia-de-informacao-tecnologica/cultivos/cana-de-acucar/producao/avanco-tecnologico/agricultura-de-precisao (acesso em 24 jun. 2026).
19. *Radar em drone facilita monitoramento agrícola*. Pesquisa FAPESP. https://revistapesquisa.fapesp.br/radar-em-drone-facilita-monitoramento-agricola/ (acesso em 24 jun. 2026).
20. Fundação Joaquim Nabuco (Fundaj). *Drones agrícolas: tudo sobre essa inovação e como ela pode ser utilizada hoje*. Observa Fundaj. (acesso em 24 jun. 2026).
21. FAVERIN, V. *Conectividade no campo pode trazer economia de R$ 178 por hectare*. Canal Rural, jan. 2022. https://www.canalrural.com.br/projetos/alianca-da-soja/conectividade-agricultura-de-precisao-economia-custos-producao/ (acesso em 24 jun. 2026).
22. BONFIM, Y. *Fazenda reduz defensivos em 90% com agricultura de precisão* (propriedade do Grupo SLC Agrícola). Planeta Campo / Canal Rural, 2025. https://planetacampo.canalrural.com.br/noticias/fazenda-reduz-defensivos-em-90-com-agricultura-de-precisao/ (acesso em 24 jun. 2026). **(verificado)**
23. ALMEIDA, G. *"Quem não se moderniza fica para trás", diz sojicultor de MS que aposta em IA no campo* (Grupo José Pessoa). Canal Rural, nov. 2025. https://www.canalrural.com.br/agricultura/projeto-soja-brasil/quem-nao-se-moderniza-fica-para-tras-diz-sojicultor-de-ms-que-aposta-em-inteligencia-artificial-no-campo/ (acesso em 24 jun. 2026). **(verificado)**
24. Levantamento de preço de varejo do drone **DJI Mavic 3 Multispectral (RTK)** em lojas brasileiras (DronesX, LiliVendas, CentralDrone), 2025–2026. Faixa observada: R$ 36.000–41.500. **(verificado — varejo)**
25. *Tecnologia no campo: custos, economia e ROI da agricultura de precisão*. Investidor Rural, 2026. https://investidorrural.com.br/tecnologia-no-campo-custos-economia-e-roi-da-agricultura-de-precisao-no-agro/ (acesso em 24 jun. 2026). Faixas de mercado: IoT R$ 20–120/ha/ano; mapeamento R$ 8–40/ha; pulverização R$ 80–250/ha. **(conteúdo setorial — não é fonte primária)**
26. *Chip M2M: quanto custa e onde contratar*. IOT Conect, 2024. https://iotconect.com.br/chip-m2m-mensalidade-quanto-custa/ (acesso em 24 jun. 2026). Mensalidade a partir de R$ 10/chip. **(varejo/serviço)**
27. Levantamentos de salário de desenvolvedores no Brasil (2025–2026): querobolsa, meutudo, Microlins, Glassdoor (compilação). Faixas CLT-base: júnior R$ 3–6 mil; pleno R$ 5–11 mil; sênior R$ 8–12 mil+. **(compilação de portais)**
28. *Quanto ganha um piloto de drone agrícola* (compilação). IstoÉ Dinheiro, O Tempo (Firjan: média ≈ R$ 8,3 mil) e outros, 2025. Faixa típica no agro: R$ 4–8 mil/mês. **(compilação de portais)**
29. MORDOR INTELLIGENCE. *Agriculture Drones Market*. Página do relatório (dados de jan. 2026): US$ 1,5 bi (2025) → US$ 3,9 bi (2031), CAGR 16,72%. Nota: estimativas variam por edição (release de out. 2025: US$ 5 bi → US$ 13 bi até 2030). https://www.mordorintelligence.com/industry-reports/agriculture-drones-market **(verificado — fonte primária)**
30. Levantamento de preço de varejo do drone **DJI Agras T50** (kit de pulverização): Próspera Distribuição (R$ 135.000) e Lojão do Drone (R$ 179.780), 2025–2026. **(verificado — varejo)**
31. Medidor/sensor de solo (umidade, condutividade elétrica, temperatura, NPK): **Hensistemas**, a partir de R$ 1.499, 2024–2026. **(verificado — varejo, entrada)**
32. Estação agrometeorológica profissional: **Sigma Sensors; Agrosystem** — venda sob orçamento (sem preço público), 2025–2026. **(verificado — sem preço público)**
33. Kit e planos **Starlink Brasil**: kit R$ 799 (Mini) a R$ 2.400 (Padrão), até R$ 12.830 (alto desempenho); plano residencial R$ 236/mês (promo R$ 164/mês no 1º ano), comercial a partir de R$ 329/mês. minhaconexao/Compre Rural, 2025–2026. **(verificado — varejo)**

> **Limite de confiança:** os números financeiros são premissas conferidas matematicamente, não dados de mercado verificados. A defesa final depende de substituí-los pelos dados reais da Seção 5.
