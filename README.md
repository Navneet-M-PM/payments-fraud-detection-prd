# AI-Powered Payments Fraud Detection Platform

### Product Requirements Document (PRD)

> **A fully interactive product specification** demonstrating how an AI-powered fraud detection system is designed, scoped, and delivered for a retail bank processing high-volume card and digital payment transactions — from problem framing to ML architecture to 20-month roadmap.

🔗 **[Live Interactive PRD →](https://bank-fraud-prd.replit.app)**

---

## About This Project

This PRD was built as a senior PM portfolio piece to demonstrate how I approach complex AI/ML product problems. Payments fraud is one of the most technically and commercially challenging domains in fintech — it requires balancing fraud loss prevention against customer friction, navigating strict regulatory compliance, and designing systems that must perform in real time at scale.

### What Makes This Different From a Static PDF

- **Navigable in-browser** — 15 sections accessible via sidebar, no scrolling through a 40-page document
- **Download as PDF** — print-ready layout triggered from the app
- **Built end-to-end by a PM** — from PRD structure to React component architecture

---

## PRD Scope & Contents

| Section | What's Covered |
|---|---|
| Executive Summary | Platform overview, 6 target KPIs, 8 key capabilities |
| Problem Statement | 6 pain points with severity, $35M+ loss framing, opportunity statement |
| Product Vision & Goals | 5 strategic goals, explicit out-of-scope decisions |
| Fraud Types & Scope | 6 fraud categories: CNP, ATO, Synthetic Identity, APP, Counterfeit, Friendly Fraud |
| User Personas | Fraud Analyst, Fraud Manager, Legitimate Customer, Chief Risk Officer |
| Functional Requirements | 26 requirements across Scoring, ML, Decisioning, Case Management, Customer Friction |
| Non-Functional Requirements | Latency targets, ML quality thresholds, PCI-DSS, GDPR compliance |
| ML Model Architecture | 5-model ensemble: Velocity, Behavioural Biometric, Graph Neural Network, Device Intelligence, Meta-Learner |
| System Architecture | 6-layer platform, end-to-end transaction flow with latency at each step |
| Decisioning & Rules Engine | Score band framework (0–1000), 6 mandatory hard-block rules |
| Data, Privacy & Compliance | PCI-DSS Level 1, GDPR Art. 22, Basel III, CCPA, AML/BSA |
| KPIs & Success Metrics | 16 metrics across Detection Quality, Financial Impact, Customer Experience, Analyst Productivity |
| Risks & Mitigations | 7 risks including adversarial ML attacks, model drift, GDPR non-compliance |
| Roadmap | 4-phase, 20-month delivery plan with gate criteria |
| Appendix & Glossary | 18 fraud and ML terms defined |

---

## Key Product Decisions Highlighted

**1. Ensemble ML over single model**
No single model excels across all fraud types. CNP fraud needs velocity signals; ATO needs behavioural biometrics; synthetic identity needs graph analysis. The ensemble achieves 92%+ FDR vs. 71–85% for any individual model.

**2. False positive rate as a primary success metric**
Most fraud systems optimise for fraud detection rate only. I explicitly co-optimise FPR (target ≤ 0.5%) because false positives cost $6 each in service + churn, and at scale cost more than the fraud itself.

**3. Hybrid decisioning: ML + rules, not ML only**
ML models cannot encode mandatory regulatory rules (sanctions lists, loss limits). The decisioning layer combines ML scores with hard-coded compliance rules and analyst overrides — giving flexibility without sacrificing control.

**4. Closed-loop learning as a core architectural principle**
Every analyst disposition (confirm fraud / confirm legitimate) feeds back into model retraining. The model improves continuously from analyst expertise rather than degrading over time.

**5. SHAP-based explainability as a compliance requirement, not a nice-to-have**
GDPR Article 22 requires explainable automated decisions affecting customers. Every decline ships with a top-3 SHAP factor explanation in plain language — required by law and essential for customer dispute resolution.

---

## Outcome Metrics (Target State — 20 Months)

| Metric | Baseline | Target |
|---|---|---|
| Fraud Detection Rate | 71% | ≥ 95% |
| False Positive Rate | 3.2% | ≤ 0.3% |
| Annual Fraud Loss Prevention | $0 (new platform) | $50M+ |
| Analyst Alerts per Day | 500 | ≤ 150 |
| Case Review Time | 22 minutes | < 8 minutes |
| Transaction Scoring Latency | N/A | < 100ms (p99) |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, TailwindCSS |
| Language | TypeScript |
| Build | pnpm |
| Hosting | Replit |

---

## How to Run Locally

```bash
# Clone the repo
git clone https://github.com/Navneet-M-PM/payments-fraud-detection-prd.git
cd payments-fraud-detection-prd

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## Portfolio Context

This PRD is part of a series of interactive product specifications I've built to demonstrate senior PM thinking across AI/ML domains:

| PRD | Domain | Link |
|---|---|---|
| Voice AI Agent — Retail Banking | Conversational AI, NLU, telephony | [GitHub](https://github.com/Navneet-M-PM/voice-ai-agent-prd) |
| Payments Fraud Detection Platform | ML, real-time systems, fintech compliance | This repo |

---

## About the Author

**Navneet M** — Senior Product Manager specialising in AI/ML products, fintech platforms, and data-driven product delivery.

- Experienced in defining and shipping complex AI-powered products from 0→1
- Deep understanding of ML model lifecycle: problem framing → feature engineering → deployment → feedback loops
- Skilled at navigating the intersection of product, compliance, and data science teams
- Comfortable with technical depth — able to write and review architecture specs, data schemas, and API contracts

📫 [Connect on LinkedIn](https://linkedin.com/in/navneet-m-pm) &nbsp;|&nbsp; 🌐 [Live PRD](https://bank-fraud-prd.replit.app)
