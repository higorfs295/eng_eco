import React, { useState, useMemo } from "react";
import {
  ResponsiveContainer, BarChart, Bar, LineChart, Line, XAxis, YAxis,
  Tooltip, CartesianGrid, ReferenceLine, Cell,
} from "recharts";

// ---- paleta (agronômica, sóbria) ----
const C = {
  paper: "#F6F4EC", card: "#FFFFFF", ink: "#1C2620", muted: "#6B7264",
  line: "#E4E0D6", green: "#2E5A2E", greenSoft: "#5C8A4A", wheat: "#B8860B",
  red: "#B23A3A", blue: "#3E6B8A",
};
const MODEL_COLOR = { A: C.blue, B: C.red, C: C.green };

// ---- premissas fixas (curvas) — editáveis via multiplicadores ----
const HA = [0, 25000, 50000, 80000, 115000, 150000];
const HN = [0, 25000, 25000, 30000, 35000, 35000];
const CF_AC = [0, 900000, 1150000, 1500000, 1850000, 2200000];
const CF_B = [0, 900000, 1150000, 1500000, 1850000, 2200000];

// ---- matemática financeira ----
const npv = (r, f) => f.reduce((s, cf, t) => s + cf / Math.pow(1 + r, t), 0);
function irr(f) {
  let lo = -0.95, hi = 20, a = npv(lo, f);
  if (a * npv(hi, f) > 0) return null;
  for (let i = 0; i < 300; i++) {
    const m = (lo + hi) / 2, fm = npv(m, f);
    if (Math.abs(fm) < 1e-7) return m;
    if (a * fm < 0) hi = m; else { lo = m; a = fm; }
  }
  return (lo + hi) / 2;
}
function payback(f, disc, r) {
  let cum = 0, prev = 0;
  for (let t = 0; t < f.length; t++) {
    const v = disc ? f[t] / Math.pow(1 + r, t) : f[t];
    prev = cum; cum += v;
    if (prev < 0 && cum >= 0) return (t - 1) + (-prev) / v;
  }
  return null;
}

function buildModel(kind, p) {
  const { invest, tma, adoc, price, cost, pA, pB, pC, setup, fm } = p;
  const flows = [-invest];
  let units = [0, 0, 0, 0, 0, 0];
  if (kind === "B") units = HA.map((h) => Math.ceil((h * adoc) / 12000));
  for (let i = 1; i <= 5; i++) {
    const ha = HA[i] * adoc;
    let cf;
    if (kind === "A") cf = ha * pA * price * 0.70 - CF_AC[i] * cost;
    else if (kind === "B") {
      const op = ha * pB * price * 0.28 - CF_B[i] * cost;
      cf = op - (units[i] - units[i - 1]) * 120000;
    } else {
      const rec = ha * pC * price + ((HN[i] * adoc) / fm) * setup;
      cf = rec * 0.70 - CF_AC[i] * cost;
    }
    flows.push(cf);
  }
  const inv = -flows[0];
  const vpBen = npv(tma, [0, ...flows.slice(1)]);
  const ibc = vpBen / inv;
  return {
    flows,
    vpl: npv(tma, flows),
    vpl145: npv(0.1425, flows),
    vpl30: npv(0.30, flows),
    tir: irr(flows),
    pbs: payback(flows, false, tma),
    pbd: payback(flows, true, tma),
    ibc,
    roia: ibc > 0 ? Math.pow(ibc, 1 / 5) - 1 : null,
  };
}

const brl0 = (n) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(n);
const pct = (n) => (n == null ? "—" : (n * 100).toFixed(1) + "%");
const yrs = (n) => (n == null ? "não recup." : n.toFixed(2) + " a");

function Slider({ label, value, min, max, step, onChange, fmt }) {
  return (
    <label className="block mb-3">
      <div className="flex justify-between items-baseline mb-1">
        <span className="text-sm" style={{ color: C.ink }}>{label}</span>
        <span className="text-sm font-semibold tabular-nums" style={{ color: C.green }}>{fmt(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full" style={{ accentColor: C.green }} />
    </label>
  );
}

function Verdict({ ok }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold"
      style={{ background: ok ? "#E5EFE0" : "#F6E0DE", color: ok ? C.green : C.red }}>
      <span style={{ width: 8, height: 8, borderRadius: 99, background: ok ? C.green : C.red }} />
      {ok ? "Viável" : "Inviável"}
    </span>
  );
}

export default function App() {
  const [s, setS] = useState({
    invest: 380000, tma: 0.20, adoc: 1.0, price: 1.0, cost: 1.0,
    pA: 40, pB: 80, pC: 40, setup: 20000, fm: 3000,
  });
  const set = (k) => (v) => setS((o) => ({ ...o, [k]: v }));
  const [tab, setTab] = useState("comp");
  const [adv, setAdv] = useState(false);

  const A = useMemo(() => buildModel("A", s), [s]);
  const B = useMemo(() => buildModel("B", s), [s]);
  const Cm = useMemo(() => buildModel("C", s), [s]);
  const models = { A, B, C: Cm };

  // break-even em adoção para o modelo C (mantendo demais inputs)
  const beAdoc = useMemo(() => {
    let lo = 0.05, hi = 3.0;
    const v = (k) => npv(s.tma, buildModel("C", { ...s, adoc: k }).flows);
    if (v(hi) < 0) return null;
    for (let i = 0; i < 80; i++) { const m = (lo + hi) / 2; if (v(m) > 0) hi = m; else lo = m; }
    return (lo + hi) / 2;
  }, [s]);

  const cashData = useMemo(() => {
    const acc = { A: 0, B: 0, C: 0 };
    return [0, 1, 2, 3, 4, 5].map((t) => {
      acc.A += A.flows[t]; acc.B += B.flows[t]; acc.C += Cm.flows[t];
      return { ano: "Ano " + t, A: Math.round(acc.A), B: Math.round(acc.B), C: Math.round(acc.C) };
    });
  }, [A, B, Cm]);

  const beCurve = useMemo(() => {
    const out = [];
    for (let k = 0.4; k <= 1.51; k += 0.05) {
      out.push({ k: Math.round(k * 100), vpl: Math.round(npv(s.tma, buildModel("C", { ...s, adoc: k }).flows)) });
    }
    return out;
  }, [s]);

  const vplBars = [
    { name: "A) SaaS", vpl: Math.round(A.vpl), key: "A" },
    { name: "B) DaaS", vpl: Math.round(B.vpl), key: "B" },
    { name: "C) Híbrido", vpl: Math.round(Cm.vpl), key: "C" },
  ];

  const rows = [
    ["VPL (TMA atual)", (m) => brl0(m.vpl)],
    ["VPL a 14,25%", (m) => brl0(m.vpl145)],
    ["VPL a 30%", (m) => brl0(m.vpl30)],
    ["TIR", (m) => pct(m.tir)],
    ["Payback simples", (m) => yrs(m.pbs)],
    ["Payback descontado", (m) => yrs(m.pbd)],
    ["IBC", (m) => (m.ibc).toFixed(2)],
    ["ROIA", (m) => pct(m.roia)],
  ];

  const Card = ({ label, value, ok }) => (
    <div className="rounded-xl p-3" style={{ background: C.card, border: `1px solid ${C.line}` }}>
      <div className="text-xs mb-1" style={{ color: C.muted }}>{label}</div>
      <div className="text-lg font-bold tabular-nums" style={{ color: ok === false ? C.red : C.ink }}>{value}</div>
    </div>
  );

  const tabBtn = (id, txt) => (
    <button onClick={() => setTab(id)}
      className="px-3 py-1.5 rounded-lg text-sm font-medium"
      style={{ background: tab === id ? C.green : "transparent", color: tab === id ? "#fff" : C.muted }}>
      {txt}
    </button>
  );

  return (
    <div style={{ background: C.paper, color: C.ink, minHeight: "100%", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
      <div className="max-w-5xl mx-auto p-4 sm:p-6">
        {/* header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-1">
          <h1 className="text-2xl font-bold tracking-tight" style={{ color: C.green }}>
            Modelo financeiro interativo
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-sm" style={{ color: C.muted }}>Modelo C (recomendado):</span>
            <Verdict ok={Cm.vpl > 0} />
          </div>
        </div>
        <p className="text-sm mb-5" style={{ color: C.muted }}>
          Monitoramento rural · IA/Drones/IoT. Mexa nas variáveis e leia o efeito ao vivo nos indicadores de Engenharia Econômica.
        </p>

        <div className="grid md:grid-cols-5 gap-4">
          {/* controles */}
          <div className="md:col-span-2 rounded-2xl p-4" style={{ background: C.card, border: `1px solid ${C.line}` }}>
            <div className="text-sm font-semibold mb-3" style={{ color: C.ink }}>Variáveis</div>
            <Slider label="TMA (taxa mínima)" value={s.tma} min={0.10} max={0.35} step={0.005} onChange={set("tma")} fmt={pct} />
            <Slider label="Adoção (× curva base)" value={s.adoc} min={0.4} max={1.5} step={0.01} onChange={set("adoc")} fmt={(v) => v.toFixed(2) + "×"} />
            <Slider label="Preço (× base)" value={s.price} min={0.7} max={1.3} step={0.01} onChange={set("price")} fmt={(v) => v.toFixed(2) + "×"} />
            <Slider label="Custo fixo (× base)" value={s.cost} min={0.7} max={1.3} step={0.01} onChange={set("cost")} fmt={(v) => v.toFixed(2) + "×"} />
            <Slider label="Investimento Ano 0" value={s.invest} min={150000} max={800000} step={10000} onChange={set("invest")} fmt={brl0} />

            <button onClick={() => setAdv((v) => !v)} className="text-xs mt-1 mb-2 underline" style={{ color: C.muted }}>
              {adv ? "ocultar" : "mostrar"} preços-base por modelo
            </button>
            {adv && (
              <div className="grid grid-cols-2 gap-2">
                {[["pA", "A: R$/ha"], ["pB", "B: R$/ha"], ["pC", "C: R$/ha"], ["setup", "C: setup R$"]].map(([k, lb]) => (
                  <label key={k} className="text-xs" style={{ color: C.muted }}>
                    {lb}
                    <input type="number" value={s[k]} onChange={(e) => set(k)(parseFloat(e.target.value) || 0)}
                      className="w-full mt-0.5 px-2 py-1 rounded border tabular-nums"
                      style={{ borderColor: C.line, color: C.ink }} />
                  </label>
                ))}
              </div>
            )}
            <button onClick={() => setS({ invest: 380000, tma: 0.20, adoc: 1, price: 1, cost: 1, pA: 40, pB: 80, pC: 40, setup: 20000, fm: 3000 })}
              className="mt-3 w-full py-1.5 rounded-lg text-sm font-medium"
              style={{ background: "#EDEAE0", color: C.ink }}>
              Restaurar premissas base
            </button>
          </div>

          {/* KPIs do modelo recomendado */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
              <Card label="VPL (TMA atual)" value={brl0(Cm.vpl)} ok={Cm.vpl > 0} />
              <Card label="TIR" value={pct(Cm.tir)} />
              <Card label="Payback descontado" value={yrs(Cm.pbd)} />
              <Card label="IBC" value={Cm.ibc.toFixed(2)} ok={Cm.ibc > 1} />
              <Card label="ROIA" value={pct(Cm.roia)} />
              <Card label="Break-even adoção" value={beAdoc ? Math.round(beAdoc * 100) + "%" : "—"} ok={beAdoc ? s.adoc >= beAdoc : true} />
            </div>
            <div className="rounded-xl p-3 text-sm" style={{ background: "#EEF3E9", border: `1px solid ${C.line}`, color: C.ink }}>
              {beAdoc
                ? <>Leitura: o modelo C continua viável enquanto a adoção ficar acima de <b>{Math.round(beAdoc * 100)}%</b> da curva base (≈ {Math.round(150000 * beAdoc).toLocaleString("pt-BR")} ha no Ano 5). Hoje você está em <b>{Math.round(s.adoc * 100)}%</b>.</>
                : <>Nesta combinação de preço/custo, o modelo C não atinge VPL = 0 dentro da faixa de adoção testada.</>}
            </div>
          </div>
        </div>

        {/* abas de gráficos */}
        <div className="flex gap-1 mt-6 mb-3">
          {tabBtn("comp", "Comparativo")}
          {tabBtn("cash", "Fluxo de caixa")}
          {tabBtn("be", "Break-even")}
        </div>

        <div className="rounded-2xl p-4" style={{ background: C.card, border: `1px solid ${C.line}` }}>
          {tab === "comp" && (
            <div className="grid lg:grid-cols-2 gap-4">
              <div style={{ height: 260 }}>
                <div className="text-sm font-semibold mb-1">VPL por modelo (TMA atual)</div>
                <ResponsiveContainer width="100%" height="90%">
                  <BarChart data={vplBars}>
                    <CartesianGrid strokeDasharray="3 3" stroke={C.line} />
                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: C.muted }} />
                    <YAxis tickFormatter={(v) => (v / 1e6).toFixed(1) + "M"} tick={{ fontSize: 11, fill: C.muted }} />
                    <Tooltip formatter={(v) => brl0(v)} />
                    <ReferenceLine y={0} stroke={C.ink} />
                    <Bar dataKey="vpl" radius={[4, 4, 0, 0]}>
                      {vplBars.map((d) => <Cell key={d.key} fill={MODEL_COLOR[d.key]} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm tabular-nums">
                  <thead>
                    <tr style={{ color: C.muted }}>
                      <th className="text-left font-medium py-1">Indicador</th>
                      <th className="text-right font-medium" style={{ color: MODEL_COLOR.A }}>A</th>
                      <th className="text-right font-medium" style={{ color: MODEL_COLOR.B }}>B</th>
                      <th className="text-right font-medium" style={{ color: MODEL_COLOR.C }}>C</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(([lab, fn]) => (
                      <tr key={lab} style={{ borderTop: `1px solid ${C.line}` }}>
                        <td className="py-1.5" style={{ color: C.ink }}>{lab}</td>
                        <td className="text-right">{fn(A)}</td>
                        <td className="text-right">{fn(B)}</td>
                        <td className="text-right font-semibold" style={{ color: C.green }}>{fn(Cm)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === "cash" && (
            <div style={{ height: 300 }}>
              <div className="text-sm font-semibold mb-1">Fluxo de caixa acumulado — onde cruza zero é o payback</div>
              <ResponsiveContainer width="100%" height="90%">
                <LineChart data={cashData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={C.line} />
                  <XAxis dataKey="ano" tick={{ fontSize: 12, fill: C.muted }} />
                  <YAxis tickFormatter={(v) => (v / 1e6).toFixed(1) + "M"} tick={{ fontSize: 11, fill: C.muted }} />
                  <Tooltip formatter={(v) => brl0(v)} />
                  <ReferenceLine y={0} stroke={C.ink} strokeWidth={1.5} />
                  <Line type="monotone" dataKey="A" stroke={MODEL_COLOR.A} strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="B" stroke={MODEL_COLOR.B} strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="C" stroke={MODEL_COLOR.C} strokeWidth={3} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          {tab === "be" && (
            <div style={{ height: 300 }}>
              <div className="text-sm font-semibold mb-1">VPL do modelo C × nível de adoção — o ponto de virada</div>
              <ResponsiveContainer width="100%" height="90%">
                <LineChart data={beCurve}>
                  <CartesianGrid strokeDasharray="3 3" stroke={C.line} />
                  <XAxis dataKey="k" unit="%" tick={{ fontSize: 12, fill: C.muted }} />
                  <YAxis tickFormatter={(v) => (v / 1e6).toFixed(1) + "M"} tick={{ fontSize: 11, fill: C.muted }} />
                  <Tooltip formatter={(v) => brl0(v)} labelFormatter={(l) => "Adoção " + l + "% da base"} />
                  <ReferenceLine y={0} stroke={C.ink} strokeWidth={1.5} />
                  {beAdoc && <ReferenceLine x={Math.round(beAdoc * 100)} stroke={C.wheat} strokeDasharray="4 4"
                    label={{ value: "break-even " + Math.round(beAdoc * 100) + "%", position: "top", fill: C.wheat, fontSize: 11 }} />}
                  <ReferenceLine x={Math.round(s.adoc * 100)} stroke={C.green} strokeDasharray="2 2"
                    label={{ value: "atual", position: "insideTopRight", fill: C.green, fontSize: 11 }} />
                  <Line type="monotone" dataKey="vpl" stroke={C.green} strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        <p className="text-xs mt-4" style={{ color: C.muted }}>
          A TMA recomendada (20%) parte da Selic de 14,25% (Copom, 17/06/2026) mais prêmio de risco . Modelo B compra frota "quando necessária" (capacidade 12.000 ha/unidade, R$ 120 mil/unidade).
        </p>
      </div>
    </div>
  );
}
