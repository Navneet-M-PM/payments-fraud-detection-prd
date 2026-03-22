export const PRD_META = {
  title: "AI-Powered Payments Fraud Detection Platform",
  version: "1.0.0",
  date: "March 2026",
  status: "Draft for Review",
  author: "Product Management",
  classification: "Internal – Confidential",
};

export const SECTIONS = [
  { id: "executive-summary", label: "Executive Summary", icon: "FileText" },
  { id: "problem-statement", label: "Problem Statement", icon: "AlertTriangle" },
  { id: "product-vision", label: "Product Vision & Goals", icon: "Target" },
  { id: "scope", label: "Fraud Types & Scope", icon: "Layers" },
  { id: "user-personas", label: "User Personas", icon: "Users" },
  { id: "functional-requirements", label: "Functional Requirements", icon: "CheckSquare" },
  { id: "non-functional", label: "Non-Functional Requirements", icon: "Settings" },
  { id: "ml-architecture", label: "ML Model Architecture", icon: "Cpu" },
  { id: "system-architecture", label: "System Architecture", icon: "Server" },
  { id: "decisioning", label: "Decisioning & Rules Engine", icon: "Zap" },
  { id: "data-privacy", label: "Data, Privacy & Compliance", icon: "Shield" },
  { id: "kpis", label: "KPIs & Success Metrics", icon: "BarChart2" },
  { id: "risks", label: "Risks & Mitigations", icon: "AlertOctagon" },
  { id: "roadmap", label: "Roadmap & Milestones", icon: "Calendar" },
  { id: "appendix", label: "Appendix & Glossary", icon: "BookOpen" },
];

export const EXECUTIVE_SUMMARY = {
  overview: `This Product Requirements Document specifies the design of an AI-Powered Payments Fraud Detection Platform for a retail bank processing high-volume card and digital payment transactions. The platform uses real-time machine learning models, a hybrid rules-and-AI decisioning engine, and a closed-loop feedback system to detect, score, and act on fraudulent payment transactions in under 100 milliseconds — with zero customer friction on legitimate payments.

The solution is architected to balance two competing business imperatives: maximizing fraud capture rate to protect the bank and its customers from financial loss, while minimizing false positives that block legitimate transactions and drive customer churn. A poorly calibrated fraud system can cost as much in lost revenue and customer attrition as the fraud it prevents.`,

  keyCapabilities: [
    "Real-time transaction scoring in < 100ms for 100% of payment volume",
    "Multi-model ensemble: velocity, behavioural, graph network, and device intelligence signals",
    "Adaptive learning — models retrained automatically on new fraud patterns weekly",
    "Hybrid decisioning: ML scores + configurable business rules + analyst overrides",
    "Case management system for fraud analyst investigation and disposition workflows",
    "Customer-facing friction calibration: step-up auth only when risk score warrants it",
    "Full regulatory compliance: PCI-DSS, GDPR, CCPA, Basel III operational risk, AML/BSA",
    "Closed-loop: every analyst decision feeds back into model retraining pipeline",
  ],

  targetOutcomes: [
    { metric: "Fraud Detection Rate (FDR)", target: "≥ 92%" },
    { metric: "False Positive Rate (FPR)", target: "≤ 0.5% of transactions" },
    { metric: "Transaction Scoring Latency", target: "< 100ms p99" },
    { metric: "Annual Fraud Loss Prevention", target: "$50M+ (Year 1)" },
    { metric: "Customer Friction Rate", target: "< 2% step-up challenges" },
    { metric: "Analyst Case Review Time", target: "< 8 minutes per case" },
  ],
};

export const PROBLEM_STATEMENT = {
  context: `Payments fraud is the fastest-growing financial crime category globally. Card-not-present (CNP) fraud alone reached $9.5 billion in losses in the US in 2025, driven by the proliferation of synthetic identity fraud, account takeover via credential stuffing, and sophisticated social engineering attacks. Retail banks face a dual threat: direct financial losses from fraud, and indirect losses from the customer friction required to prevent it.`,

  painPoints: [
    {
      title: "Escalating Fraud Losses",
      description: "Card fraud, account takeover, and synthetic identity fraud collectively cost retail banks an average of 0.07% of payment volume annually. For a bank processing $50B/year in payments, that's $35M in direct losses before operational costs of investigation and chargebacks.",
      severity: "Critical",
    },
    {
      title: "High False Positive Rate Destroying Customer Experience",
      description: "Legacy rule-based systems block 8–15 legitimate transactions for every fraud case caught. False positives cost the bank ~$6 per declined transaction in customer service calls, re-processing, and churn. At scale, false positives cost more than the fraud.",
      severity: "Critical",
    },
    {
      title: "Static Rules Cannot Keep Pace with Evolving Attack Patterns",
      description: "Fraud rings adapt tactics within days of a new rule being deployed. Rule maintenance requires constant analyst time. Legacy systems have 2–4 week rule deployment cycles — fraudsters exploit the gap.",
      severity: "High",
    },
    {
      title: "Synthetic Identity Fraud Invisible to Point-in-Time Checks",
      description: "Synthetically constructed identities pass KYC checks at onboarding. Only behavioural patterns over time and graph-based relationship analysis reveal the fraud — capabilities absent in most legacy systems.",
      severity: "High",
    },
    {
      title: "Analyst Workload & Alert Fatigue",
      description: "Fraud analysts review 300–500 alerts per day with legacy systems. Low signal-to-noise means 60–70% of reviewed cases are legitimate. Burnout and attrition result in experienced analyst loss, degrading investigation quality.",
      severity: "High",
    },
    {
      title: "Fragmented Data & Siloed Detection",
      description: "Card fraud, digital payments, ACH, and wire transfer fraud are detected by separate systems with no cross-channel signal sharing. Fraudsters exploit channel blind spots — the same compromised account is not flagged across channels.",
      severity: "High",
    },
  ],

  opportunityStatement: `A unified, AI-powered fraud detection platform that ingests signals across all payment channels, applies real-time multi-model scoring, and continuously adapts to emerging attack patterns — while surgically minimising customer friction — can reduce annual fraud losses by 60%+ while improving customer experience and analyst productivity simultaneously.`,
};

export const PRODUCT_VISION = {
  vision: `"Stop fraud before it happens, invisibly to the honest customer. Continuously learn from every transaction, every analyst decision, and every emerging attack pattern — so that the bank is always one step ahead of the fraudster, never one step behind."`,

  strategicGoals: [
    {
      goal: "Real-Time, Frictionless Fraud Prevention",
      description: "Score 100% of payment transactions in real time at < 100ms, blocking only genuine fraud while letting legitimate transactions flow without interruption. False positive rate below 0.5%.",
    },
    {
      goal: "Adaptive Intelligence That Evolves Faster Than Fraud",
      description: "Deploy weekly model updates incorporating the latest fraud signals. Reduce time-to-detect for new attack patterns from weeks (rule deployment) to hours (model inference).",
    },
    {
      goal: "Unified Cross-Channel Detection",
      description: "Single fraud brain covering card present, card not present, digital wallets, ACH, wire transfers, and P2P payments. Cross-channel signals improve detection of sophisticated multi-step fraud.",
    },
    {
      goal: "Analyst Empowerment, Not Alert Fatigue",
      description: "Reduce analyst caseload from 500 alerts/day to 150 high-priority cases by improving signal quality. Case management with AI-generated investigation summaries cuts case review time by 50%.",
    },
    {
      goal: "Explainable Decisions for Compliance & Customer Communication",
      description: "Every decline and challenge decision is explainable — required by regulators and essential for customer dispute resolution. No black-box decisions affecting customers.",
    },
  ],

  outOfScope: [
    "Anti-Money Laundering (AML) transaction monitoring (separate product)",
    "KYC/identity verification at onboarding (separate platform)",
    "Internal employee fraud detection",
    "Insurance claims fraud",
    "Merchant fraud underwriting",
  ],
};

export const FRAUD_TYPES = [
  {
    id: "FT-001",
    name: "Card Not Present (CNP) Fraud",
    priority: "P0",
    description: "Stolen card credentials used for online/phone purchases without physical card.",
    signal: "Device fingerprint mismatch, unusual merchant category, velocity spike",
    volume: "45% of fraud cases",
    avgLoss: "$320 per case",
    detection: "ML + Rules",
  },
  {
    id: "FT-002",
    name: "Account Takeover (ATO)",
    priority: "P0",
    description: "Fraudster gains control of legitimate customer account via credential stuffing, phishing, or SIM swap.",
    signal: "Login from new device/IP, password reset + immediate transaction, rapid profile changes",
    volume: "22% of fraud cases",
    avgLoss: "$1,200 per case",
    detection: "Behavioural AI + Device",
  },
  {
    id: "FT-003",
    name: "Synthetic Identity Fraud",
    priority: "P0",
    description: "Fraudulent identity constructed from real and fabricated PII elements, built up over months.",
    signal: "Graph network anomalies, PII reuse across accounts, dormant-then-bust-out pattern",
    volume: "18% of fraud cases",
    avgLoss: "$15,000 per case",
    detection: "Graph ML + Velocity",
  },
  {
    id: "FT-004",
    name: "Authorised Push Payment (APP) Fraud",
    priority: "P0",
    description: "Customer deceived into voluntarily sending money to fraudster (romance, investment, invoice scams).",
    signal: "First-time payee, unusually large amount, customer under call, urgent transfer pattern",
    volume: "12% of fraud cases",
    avgLoss: "$8,400 per case",
    detection: "Behavioural AI + Rules",
  },
  {
    id: "FT-005",
    name: "Card Present Counterfeit",
    priority: "P1",
    description: "Cloned physical card used at POS terminal, typically via skimming device compromise.",
    signal: "Transaction geography vs. recent customer location, EMV downgrade, unusual MCC",
    volume: "8% of fraud cases",
    avgLoss: "$180 per case",
    detection: "Rules + Location ML",
  },
  {
    id: "FT-006",
    name: "First-Party Misuse / Friendly Fraud",
    priority: "P1",
    description: "Customer disputes legitimate transaction (chargeback fraud) or misuses credit facilities.",
    signal: "Chargeback history, dispute pattern analysis, merchant confirmation of delivery",
    volume: "5% of fraud cases",
    avgLoss: "$240 per case",
    detection: "ML + Rules",
  },
];

export const USER_PERSONAS = [
  {
    name: "Sarah, the Fraud Analyst",
    age: "31",
    role: "Senior Fraud Analyst",
    goal: "Investigate high-priority fraud cases efficiently, make accurate dispositions, and catch patterns before they scale.",
    frustration: "Alert queues with 500+ cases of which 70% are false positives. No AI assistance in case investigation — all manual research.",
    techComfort: "High",
    usage: "Daily, 8+ hours",
    keyNeeds: ["AI-generated case summaries", "Cross-account relationship graphs", "One-click disposition with feedback capture", "Pattern alerts for emerging fraud rings"],
  },
  {
    name: "Marcus, the Fraud Strategy Manager",
    age: "44",
    role: "Head of Payments Fraud",
    goal: "Optimise the fraud/friction trade-off across all payment channels. Report losses to ExCo and regulators. Tune model thresholds.",
    frustration: "No real-time visibility into fraud trends. Rule changes take 3 weeks to deploy. Can't see the impact of threshold changes before applying them.",
    techComfort: "Medium",
    usage: "Daily dashboards, weekly deep-dives",
    keyNeeds: ["Real-time fraud loss dashboard", "Threshold simulation sandbox", "Model performance monitoring", "Regulatory reporting automation"],
  },
  {
    name: "Priya, the Legitimate Customer",
    age: "35",
    role: "E-commerce Shopper",
    goal: "Complete her online purchase quickly without interruption.",
    frustration: "Card declined on a legitimate transaction while travelling. Had to call the bank to unblock — embarrassing and time-consuming.",
    techComfort: "High",
    usage: "Impacted when false positive occurs",
    keyNeeds: ["Legitimate transactions never blocked", "If challenged: seamless OTP, not a call", "Immediate resolution if declined in error"],
  },
  {
    name: "David, the Risk CTO",
    age: "52",
    role: "Chief Risk Officer",
    goal: "Minimise operational risk exposure. Ensure regulatory compliance. Understand model explainability for Board reporting.",
    frustration: "Regulators asking for explainability on AI decisions. ML models are black boxes — hard to justify to regulators.",
    techComfort: "Low-Medium",
    usage: "Monthly reports, quarterly reviews",
    keyNeeds: ["Explainable AI decisions", "Regulatory audit trails", "Model governance documentation", "Fraud loss trend reporting vs. industry benchmarks"],
  },
];

export const FUNCTIONAL_REQUIREMENTS = [
  {
    category: "Real-Time Transaction Scoring",
    items: [
      { id: "FR-S01", req: "Score 100% of inbound payment transactions synchronously before authorisation", priority: "P0" },
      { id: "FR-S02", req: "End-to-end scoring latency < 100ms at p99 (from transaction receipt to score return)", priority: "P0" },
      { id: "FR-S03", req: "Return a fraud score (0–1000), a risk tier (Low/Medium/High/Critical), and top contributing features", priority: "P0" },
      { id: "FR-S04", req: "Support three decisioning outcomes: Approve, Challenge (step-up auth), Decline", priority: "P0" },
      { id: "FR-S05", req: "Handle 10,000+ transactions per second at peak without latency degradation", priority: "P0" },
      { id: "FR-S06", req: "Graceful degradation: if ML scoring fails, fall back to rules-only decisioning within 20ms", priority: "P0" },
    ],
  },
  {
    category: "ML Model Suite",
    items: [
      { id: "FR-M01", req: "Velocity model: detect unusual frequency, amount, and geography patterns per customer", priority: "P0" },
      { id: "FR-M02", req: "Behavioural biometric model: detect ATO via typing speed, device handling, navigation pattern anomalies", priority: "P0" },
      { id: "FR-M03", req: "Graph neural network model: detect synthetic identity rings via shared PII node analysis", priority: "P0" },
      { id: "FR-M04", req: "Device intelligence model: fingerprint, IP reputation, VPN/proxy detection, emulator detection", priority: "P0" },
      { id: "FR-M05", req: "APP fraud propensity model: real-time call centre + transaction correlation", priority: "P1" },
      { id: "FR-M06", req: "Ensemble scoring: combine model outputs via a meta-learner with configurable weights", priority: "P0" },
      { id: "FR-M07", req: "Online learning: models update on new fraud signals within 24 hours; full retrain weekly", priority: "P1" },
    ],
  },
  {
    category: "Decisioning & Rules Engine",
    items: [
      { id: "FR-D01", req: "Configurable rules engine: analysts can create, test, and deploy rules without engineering involvement", priority: "P0" },
      { id: "FR-D02", req: "Threshold management: configurable per-channel, per-product, per-customer-segment score thresholds", priority: "P0" },
      { id: "FR-D03", req: "Rule simulation: preview impact of rule changes on historical data before deployment", priority: "P1" },
      { id: "FR-D04", req: "Allowlist/blocklist management: manual customer and merchant-level overrides", priority: "P0" },
      { id: "FR-D05", req: "Time-based rules: different thresholds for high-risk time windows (e.g., 2–5am transactions)", priority: "P1" },
    ],
  },
  {
    category: "Case Management & Investigation",
    items: [
      { id: "FR-C01", req: "Auto-generated case summary: ML-produced plain-language investigation brief per alert", priority: "P0" },
      { id: "FR-C02", req: "Link analysis visualisation: interactive graph showing related accounts, devices, PII", priority: "P1" },
      { id: "FR-C03", req: "One-click disposition: Confirm Fraud / Confirm Legitimate / Escalate with mandatory reason code", priority: "P0" },
      { id: "FR-C04", req: "Analyst workqueue with SLA tracking and priority routing based on fraud score + potential loss", priority: "P0" },
      { id: "FR-C05", req: "Bulk action: apply disposition to clusters of related cases (fraud ring management)", priority: "P1" },
      { id: "FR-C06", req: "Customer contact workflow: one-click initiate SMS/email/call to customer from case", priority: "P1" },
    ],
  },
  {
    category: "Customer Friction Management",
    items: [
      { id: "FR-F01", req: "Step-up authentication: biometric, OTP, or KBA based on risk score band", priority: "P0" },
      { id: "FR-F02", req: "Soft decline with challenge: high-risk transactions offered step-up before hard decline", priority: "P0" },
      { id: "FR-F03", req: "Customer notification: real-time push notification for high-risk declined transaction", priority: "P1" },
      { id: "FR-F04", req: "Self-service dispute: customer can mark a decline as legitimate via app, triggering expedited review", priority: "P1" },
    ],
  },
];

export const NON_FUNCTIONAL_REQUIREMENTS = [
  {
    category: "Performance",
    items: [
      { id: "NFR-P01", req: "Transaction scoring latency p50 < 30ms, p95 < 60ms, p99 < 100ms", target: "< 100ms p99" },
      { id: "NFR-P02", req: "Throughput: 10,000 TPS sustained, 25,000 TPS peak burst for 60 seconds", target: "10K TPS sustained" },
      { id: "NFR-P03", req: "System availability: 99.999% uptime (< 5 minutes downtime/year)", target: "99.999% SLA" },
      { id: "NFR-P04", req: "Auto-scale horizontally to handle 3× normal load within 60 seconds", target: "< 60s scale-out" },
    ],
  },
  {
    category: "ML Model Quality",
    items: [
      { id: "NFR-M01", req: "Fraud Detection Rate (FDR) at 0.5% FPR threshold: ≥ 92% on holdout test set", target: "≥ 92% FDR" },
      { id: "NFR-M02", req: "Model AUC-ROC: ≥ 0.97 across all fraud type sub-models", target: "≥ 0.97 AUC-ROC" },
      { id: "NFR-M03", req: "Model staleness alert: trigger retraining if FDR drops > 2% week-on-week", target: "Auto-retrain" },
      { id: "NFR-M04", req: "Bias testing: model performance must not vary > 5% across protected demographic groups", target: "< 5% variance" },
    ],
  },
  {
    category: "Security",
    items: [
      { id: "NFR-S01", req: "PCI-DSS Level 1: all cardholder data encrypted, network segmented, quarterly pen-tested", target: "Level 1" },
      { id: "NFR-S02", req: "Zero-trust architecture: all service-to-service calls authenticated and authorised", target: "Zero-trust" },
      { id: "NFR-S03", req: "Model endpoint protected against adversarial attacks and model inversion attempts", target: "Mandatory" },
    ],
  },
  {
    category: "Explainability & Compliance",
    items: [
      { id: "NFR-C01", req: "Every decline decision accompanied by top-3 contributing factors in plain language", target: "Mandatory" },
      { id: "NFR-C02", req: "GDPR Article 22: customers have right to human review of automated adverse decisions", target: "Full compliance" },
      { id: "NFR-C03", req: "Basel III Op Risk: all fraud events logged in operational risk register within 24 hours", target: "24-hour SLA" },
      { id: "NFR-C04", req: "Full immutable audit trail of all model decisions and analyst overrides, 7-year retention", target: "7-year retention" },
    ],
  },
];

export const ML_ARCHITECTURE = {
  overview: `The fraud detection platform uses a multi-model ensemble approach. No single model excels across all fraud types — the ensemble combines specialist models' outputs via a meta-learner, achieving detection rates impossible with any single model while controlling false positives through calibrated probability estimates.`,

  models: [
    {
      name: "Velocity & Rules Model",
      type: "Gradient Boosted Trees (XGBoost)",
      inputFeatures: ["Transaction frequency (1h, 6h, 24h, 7d windows)", "Amount percentiles vs. customer baseline", "Merchant category code patterns", "Geographic distance from home country"],
      strength: "Fast, interpretable, handles structured tabular data",
      weakness: "Cannot detect novel patterns outside training distribution",
      latency: "< 5ms",
      fdr: "78%",
    },
    {
      name: "Behavioural Biometric Model",
      type: "LSTM Neural Network",
      inputFeatures: ["Session keystroke dynamics", "Mouse/touch movement patterns", "Navigation sequence", "Time-on-page distributions", "Copy-paste vs. typed fields"],
      strength: "Highly effective for ATO — detects human vs. bot/fraudster interaction style",
      weakness: "Requires session data; not applicable to card-present or batch payments",
      latency: "< 15ms",
      fdr: "85% (ATO)",
    },
    {
      name: "Graph Neural Network",
      type: "Graph Convolutional Network (GCN)",
      inputFeatures: ["Shared device across accounts", "Shared phone/email/address nodes", "Co-application patterns", "Beneficiary network relationships"],
      strength: "Uniquely effective for synthetic identity rings and mule account networks",
      weakness: "Computationally expensive; requires graph database with sub-second query",
      latency: "< 40ms",
      fdr: "91% (Synthetic ID)",
    },
    {
      name: "Device Intelligence Model",
      type: "Random Forest + Rule Overlay",
      inputFeatures: ["Browser fingerprint hash", "IP geolocation & ISP", "VPN/proxy/Tor detection", "Device emulator signals", "Cookie/localStorage persistence"],
      strength: "Catches new-device attacks immediately; low latency",
      weakness: "Sophisticated fraudsters use residential proxies to evade detection",
      latency: "< 8ms",
      fdr: "72%",
    },
    {
      name: "Meta-Learner Ensemble",
      type: "Logistic Regression (calibrated)",
      inputFeatures: ["Output scores from all sub-models", "Model confidence intervals", "Channel, product, and time context"],
      strength: "Optimal combination of specialist models; produces calibrated probability",
      weakness: "Only as good as its component models; requires all inputs to be available",
      latency: "< 5ms (additional)",
      fdr: "92%+",
    },
  ],

  trainingPipeline: [
    { stage: "Data Ingestion", description: "Raw transaction, device, session, and graph data from source systems → Feature Store", frequency: "Real-time streaming" },
    { stage: "Feature Engineering", description: "Windowed aggregations, graph embeddings, and behavioural sequence encoding in Feature Store", frequency: "Real-time + batch" },
    { stage: "Online Learning", description: "Analyst dispositions trigger incremental model updates (gradient updates on confirmed fraud/legit)", frequency: "Hourly" },
    { stage: "Batch Retraining", description: "Full model retraining on rolling 90-day labelled dataset with hyperparameter tuning", frequency: "Weekly" },
    { stage: "Champion/Challenger", description: "New model version scored against holdout set; if FDR ≥ current model → shadow deploy", frequency: "Per retrain" },
    { stage: "Production Promotion", description: "Canary 1% traffic → 10% → 100% with automated rollback if FPR rises > 0.1%", frequency: "Per cycle" },
  ],
};

export const SYSTEM_ARCHITECTURE = {
  layers: [
    {
      name: "Payment Gateway & Ingestion",
      color: "blue",
      components: ["Payment Gateway (ISO 8583 / REST)", "Kafka Event Streaming", "Schema Registry", "Dead Letter Queue"],
      description: "Receives payment authorisation requests in real time, normalises to internal event schema, and fans out to scoring pipeline with sub-millisecond overhead.",
    },
    {
      name: "Feature Store & Enrichment",
      color: "purple",
      components: ["Real-time Feature Store (Redis)", "Batch Feature Store (BigQuery)", "Device Intelligence API", "Graph Database (Neo4j)", "Third-party Enrichment APIs"],
      description: "Assembles all features needed for scoring in < 20ms. Pre-computed windowed aggregations served from in-memory store. Graph relationships queried from Neo4j.",
    },
    {
      name: "ML Scoring Engine",
      color: "indigo",
      components: ["Model Serving Platform (Triton)", "Sub-model Endpoints (x4)", "Meta-Learner Ensemble", "Score Calibration Layer"],
      description: "Runs all four specialist models in parallel, combines outputs via meta-learner, and returns a calibrated fraud probability score.",
    },
    {
      name: "Decisioning Engine",
      color: "orange",
      components: ["Rules Engine (Drools)", "Threshold Manager", "Allowlist / Blocklist Service", "Decision Explainer (SHAP)"],
      description: "Applies business rules and thresholds to ML score to produce Approve / Challenge / Decline. Generates SHAP-based explanation for every non-Approve decision.",
    },
    {
      name: "Case Management & Analytics",
      color: "green",
      components: ["Case Management Platform", "Analyst Workqueue", "Link Analysis (Graph viz)", "Fraud Dashboard", "Regulatory Reporting Engine"],
      description: "Analyst-facing tools for case investigation, disposition, and feedback capture. Management dashboards and automated regulatory reporting.",
    },
    {
      name: "MLOps & Feedback Loop",
      color: "cyan",
      components: ["Kubeflow Training Pipelines", "Model Registry & Versioning", "Champion/Challenger Framework", "Data Quality Monitor", "Model Drift Detector"],
      description: "Continuous model improvement pipeline. Analyst dispositions feed labelled training data. Automated drift detection triggers retraining.",
    },
  ],

  dataFlows: [
    { step: "1", description: "Payment authorisation request arrives at gateway", latency: "0ms" },
    { step: "2", description: "Event normalised and published to Kafka topic", latency: "2ms" },
    { step: "3", description: "Feature enrichment: retrieve pre-computed + real-time features", latency: "20ms" },
    { step: "4", description: "Parallel ML model scoring (all 4 models run concurrently)", latency: "45ms" },
    { step: "5", description: "Ensemble meta-learner combines scores", latency: "5ms" },
    { step: "6", description: "Decisioning engine applies rules and thresholds", latency: "8ms" },
    { step: "7", description: "Decision (Approve/Challenge/Decline) returned to gateway", latency: "80ms total" },
    { step: "8", description: "Alert created for Challenge/Decline; case routed to analyst queue", latency: "async" },
  ],
};

export const DECISIONING = {
  overview: `The decisioning engine sits between the ML score and the payment outcome. It translates a continuous fraud probability score (0–1000) into a binary or ternary decision, applying business context, segment-specific thresholds, and mandatory rules that ML alone cannot enforce.`,

  scoreBands: [
    { band: "0–200", tier: "Low Risk", action: "Approve", rationale: "High confidence legitimate. No friction applied.", customerImpact: "None", analystAction: "None — sampled 1% for quality" },
    { band: "201–450", tier: "Medium Risk", action: "Approve with monitoring", rationale: "Slightly elevated risk but below challenge threshold. Flag for post-hoc review.", customerImpact: "None", analystAction: "Queued for review if pattern emerges" },
    { band: "451–700", tier: "High Risk", action: "Challenge (Step-up)", rationale: "Risk warrants friction. Soft decline with step-up auth opportunity.", customerImpact: "OTP or biometric prompt", analystAction: "Alert created if step-up fails" },
    { band: "701–850", tier: "Very High Risk", action: "Decline + Customer Alert", rationale: "High confidence fraud. Decline and notify customer immediately.", customerImpact: "Decline + push notification", analystAction: "Auto-case created, priority queue" },
    { band: "851–1000", tier: "Critical Risk", action: "Decline + Block + Case", rationale: "Extremely high confidence fraud. Decline, block card/account, and escalate.", customerImpact: "Decline + card block + SMS", analystAction: "Immediate escalation to senior analyst" },
  ],

  mandatoryRules: [
    { id: "MR-001", rule: "Block transaction if card reported lost/stolen", type: "Hard Block", override: "None" },
    { id: "MR-002", rule: "Block if customer on regulatory sanctions list", type: "Hard Block", override: "Compliance only" },
    { id: "MR-003", rule: "Challenge if transaction > $5,000 to first-time payee", type: "Mandatory Challenge", override: "Customer whitelist" },
    { id: "MR-004", rule: "Block if device on confirmed fraud device blocklist", type: "Hard Block", override: "Fraud Manager" },
    { id: "MR-005", rule: "Challenge all international wire > $2,000 between 10pm–6am", type: "Time-based Challenge", override: "Customer pre-approval" },
    { id: "MR-006", rule: "Block if cumulative daily loss exposure > $50,000 per account", type: "Loss Limit Block", override: "Risk Manager" },
  ],
};

export const DATA_PRIVACY = {
  dataTypes: [
    { type: "Cardholder PAN / Card Data", classification: "Highly Sensitive / PCI", storage: "Tokenised — never stored in plain text in fraud platform", retention: "Tokenised reference only" },
    { type: "Transaction Records", classification: "Sensitive / PCI", storage: "Encrypted at rest, masked in logs", retention: "7 years (regulatory)" },
    { type: "Device Fingerprint / Behavioural Data", classification: "Personal Data (GDPR)", storage: "Hashed / pseudonymised; linked to account token not PII", retention: "13 months rolling" },
    { type: "Graph Relationship Data", classification: "Sensitive", storage: "Graph database with encrypted PII nodes; analyst-access only", retention: "Duration of relationship + 7 years" },
    { type: "ML Model Training Data", classification: "Pseudonymised", storage: "Stripped of direct identifiers; federated where possible", retention: "36 months" },
    { type: "Fraud Case & Disposition Records", classification: "Sensitive / Audit", storage: "Immutable audit store; access-controlled", retention: "7 years" },
    { type: "Analyst Activity Logs", classification: "Internal", storage: "SIEM-integrated; tamper-evident", retention: "5 years" },
  ],

  complianceFramework: [
    { framework: "PCI-DSS Level 1", scope: "All cardholder data processing, storage, and transmission", controls: "Tokenisation, network segmentation, WAF, quarterly pen-tests, P2PE for card-present" },
    { framework: "GDPR Article 22", scope: "Automated decision-making affecting customers (declines, blocks)", controls: "Explainability for every adverse decision; right to human review; consent for behavioural biometrics" },
    { framework: "Basel III Operational Risk", scope: "Fraud event classification and capital adequacy reporting", controls: "Fraud losses logged in OpRisk system within 24h; scenario analysis for stress testing" },
    { framework: "CCPA", scope: "California customer data rights", controls: "Data inventory, deletion API, opt-out of behavioural profiling (with reduced protection disclosure)" },
    { framework: "AML/BSA", scope: "Transaction monitoring intersection with fraud patterns", controls: "SAR filing integration; fraud-AML correlation reporting; FinCEN 314(a) list screening" },
    { framework: "FTC Act Section 5", scope: "Unfair or deceptive practices — wrongful declines at scale", controls: "False positive rate monitoring by segment; disparate impact testing; remediation SLA" },
  ],
};

export const KPIS = [
  {
    category: "Fraud Detection Effectiveness",
    metrics: [
      { name: "Fraud Detection Rate (FDR)", target: "≥ 92%", baseline: "71% (current)", measurement: "Confirmed fraud caught / Total fraud occurring (estimated via loss data)" },
      { name: "False Positive Rate (FPR)", target: "≤ 0.5%", baseline: "3.2% (current rules)", measurement: "Legitimate transactions declined or challenged / Total legitimate transactions" },
      { name: "Precision (at 0.5% FPR threshold)", target: "≥ 94%", baseline: "58% (current)", measurement: "True fraud alerts / Total alerts generated" },
      { name: "AUC-ROC Score", target: "≥ 0.97", baseline: "N/A (new ML)", measurement: "Model evaluation on monthly holdout test set" },
    ],
  },
  {
    category: "Financial Impact",
    metrics: [
      { name: "Annual Fraud Loss Prevented", target: "$50M+ (Year 1)", baseline: "$0 (new platform)", measurement: "Fraud losses at current FDR vs. projected losses at target FDR" },
      { name: "Cost Per Fraud Case Resolved", target: "< $45", baseline: "$120 (current)", measurement: "Total fraud operations cost / Cases resolved" },
      { name: "Chargeback Rate", target: "< 0.15%", baseline: "0.38% (current)", measurement: "Chargebacks received / Total transactions (Visa/MC threshold: 0.9%)" },
      { name: "False Positive Revenue Recovery", target: "$8M+/year", baseline: "$0", measurement: "Legitimate transactions previously declined × average transaction value" },
    ],
  },
  {
    category: "Customer Experience",
    metrics: [
      { name: "Customer Friction Rate", target: "< 2% of transactions", baseline: "8% (current rules)", measurement: "Transactions requiring step-up auth / Total transactions" },
      { name: "Step-up Auth Completion Rate", target: "≥ 85%", baseline: "N/A", measurement: "Customers completing step-up / Customers presented with step-up" },
      { name: "False Decline NPS Impact", target: "< 0.5 NPS point impact", baseline: "−3.2 NPS (current)", measurement: "NPS survey of customers experiencing declines" },
      { name: "Customer Dispute Resolution Time", target: "< 4 hours", baseline: "72 hours (current)", measurement: "Time from customer dispute to resolution" },
    ],
  },
  {
    category: "Analyst Productivity",
    metrics: [
      { name: "Alerts per Analyst per Day", target: "≤ 150", baseline: "500 (current)", measurement: "Total alerts generated / Analyst FTE count" },
      { name: "Average Case Review Time", target: "< 8 minutes", baseline: "22 minutes (current)", measurement: "Time from case open to disposition, sampled monthly" },
      { name: "Analyst False Positive Rate", target: "< 20%", baseline: "68% (current)", measurement: "Cases dispositioned Legitimate / Total cases reviewed" },
      { name: "Model Deployment Frequency", target: "Weekly", baseline: "Quarterly (rules)", measurement: "Production model updates per month" },
    ],
  },
];

export const RISKS = [
  {
    id: "R-001",
    risk: "Adversarial Attacks on ML Models",
    probability: "Medium",
    impact: "Critical",
    rating: "High",
    mitigation: "Model endpoints not externally accessible; adversarial robustness testing in CI pipeline; rate limiting on scoring API; feature importance monitoring for anomalous shifts; red team quarterly testing",
  },
  {
    id: "R-002",
    risk: "Model Drift — New Fraud Patterns Not Detected",
    probability: "High",
    impact: "High",
    rating: "High",
    mitigation: "Automated drift detection triggers retraining when FDR drops > 2%; online learning updates model within 24 hours of confirmed fraud disposition; emerging threat feed integration",
  },
  {
    id: "R-003",
    risk: "Scoring Latency Breach Causing Payment Authorisation Timeout",
    probability: "Low",
    impact: "Critical",
    rating: "High",
    mitigation: "Circuit breaker: if scoring > 80ms, fall back to rules-only (< 10ms additional); load test to 3× peak TPS monthly; auto-scaling with 60-second scale-out SLA; multi-region deployment",
  },
  {
    id: "R-004",
    risk: "Discriminatory Model Outcomes (Fair Lending / ECOA Risk)",
    probability: "Medium",
    impact: "Critical",
    rating: "High",
    mitigation: "Quarterly disparate impact analysis by protected class proxy; FDR and FPR must not vary > 5% across demographic segments; independent fairness audit annually; features that could act as demographic proxies excluded",
  },
  {
    id: "R-005",
    risk: "GDPR Article 22 Non-Compliance on Automated Declines",
    probability: "Low",
    impact: "High",
    rating: "Medium",
    mitigation: "Every decline accompanied by plain-language explanation (SHAP-based); human review process available for all automated decisions; consent framework for behavioural biometric collection",
  },
  {
    id: "R-006",
    risk: "High False Positive Rate Driving Customer Churn",
    probability: "Medium",
    impact: "High",
    rating: "Medium",
    mitigation: "FPR monitored in real-time dashboard; alert if FPR exceeds 1% in any 1-hour window; segment-level FPR tracking; customer feedback loop from dispute data; A/B threshold testing before rollout",
  },
  {
    id: "R-007",
    risk: "Graph Database Performance Degrading Under High Transaction Volume",
    probability: "Medium",
    impact: "High",
    rating: "Medium",
    mitigation: "Graph queries pre-computed and cached for high-frequency nodes; real-time queries time-boxed to 35ms with fallback to cached result; read replicas scaled independently; weekly load testing",
  },
];

export const ROADMAP = [
  {
    phase: "Phase 0",
    name: "Foundation & Data Infrastructure",
    duration: "Months 1–3",
    status: "Planning",
    milestones: [
      "Feature Store deployed with historical transaction data backfilled (24 months)",
      "Kafka event streaming pipeline live — all payment events flowing to platform",
      "Graph database populated with account relationship data",
      "Baseline model trained on historical fraud labels: AUC-ROC ≥ 0.93",
      "PCI-DSS scoping completed and security architecture reviewed",
      "Analyst case management tool selected and configured",
    ],
  },
  {
    phase: "Phase 1",
    name: "MVP — Core ML Scoring & Decisioning",
    duration: "Months 4–7",
    status: "Planned",
    milestones: [
      "Velocity + Device Intelligence models live in shadow mode (not blocking traffic)",
      "Shadow mode validation: FDR ≥ 85%, FPR ≤ 1.5% on live traffic",
      "Decisioning engine live with configurable score bands and mandatory rules",
      "Case management platform live for analyst team — alert queue active",
      "Canary rollout: 5% of CNP transaction volume (highest-risk fraud type first)",
      "Gate criteria: FDR ≥ 88%, FPR ≤ 0.8%, p99 latency < 100ms → scale to 25%",
    ],
  },
  {
    phase: "Phase 2",
    name: "Full Model Suite & Channel Expansion",
    duration: "Months 8–13",
    status: "Planned",
    milestones: [
      "Behavioural biometric model live (ATO detection)",
      "Graph Neural Network model live (synthetic identity)",
      "Ensemble meta-learner replacing individual model decisions",
      "APP fraud propensity model live with call centre integration",
      "100% of card payment volume on platform (all channels)",
      "Automated weekly retraining pipeline operational",
      "Gate criteria: FDR ≥ 92%, FPR ≤ 0.5% → Phase 3",
    ],
  },
  {
    phase: "Phase 3",
    name: "Intelligence & Optimisation",
    duration: "Months 14–20",
    status: "Future",
    milestones: [
      "Cross-channel fraud brain: ACH, wire, P2P payments unified scoring",
      "Predictive fraud prevention: proactive card block before fraud attempt",
      "Fraud ring disruption: automated bulk action on GNN-detected networks",
      "Real-time threshold optimisation: Bayesian optimisation of score thresholds",
      "Regulatory reporting fully automated (Basel III, SAR filing integration)",
      "Target: FDR ≥ 95%, FPR ≤ 0.3%, $50M+ annual fraud loss prevention",
    ],
  },
];

export const GLOSSARY = [
  { term: "FDR", definition: "Fraud Detection Rate — percentage of actual fraud caught by the system" },
  { term: "FPR", definition: "False Positive Rate — percentage of legitimate transactions incorrectly flagged as fraud" },
  { term: "AUC-ROC", definition: "Area Under the ROC Curve — model performance metric; 1.0 = perfect, 0.5 = random" },
  { term: "CNP", definition: "Card Not Present — transactions where the physical card is not used (online, phone)" },
  { term: "ATO", definition: "Account Takeover — fraudster gains control of a legitimate customer account" },
  { term: "APP Fraud", definition: "Authorised Push Payment Fraud — customer deceived into willingly sending money to fraudster" },
  { term: "GNN", definition: "Graph Neural Network — ML model operating on graph-structured data (relationships between entities)" },
  { term: "SHAP", definition: "SHapley Additive exPlanations — method for explaining individual ML model predictions" },
  { term: "Feature Store", definition: "Centralised repository of pre-computed ML features serving real-time and batch model training" },
  { term: "Ensemble", definition: "Combination of multiple ML models whose outputs are aggregated to improve performance" },
  { term: "Meta-Learner", definition: "A model that learns how to combine the outputs of multiple base models optimally" },
  { term: "Champion/Challenger", definition: "A/B testing framework for ML models — challenger must beat champion before promotion" },
  { term: "Step-up Auth", definition: "Additional authentication (OTP, biometric) triggered for high-risk transactions" },
  { term: "SAR", definition: "Suspicious Activity Report — regulatory filing required when fraud or money laundering is suspected" },
  { term: "MCC", definition: "Merchant Category Code — 4-digit code classifying a merchant's business type" },
  { term: "PAN", definition: "Primary Account Number — the 16-digit card number" },
  { term: "P2PE", definition: "Point-to-Point Encryption — encrypts cardholder data from card swipe to processor" },
  { term: "TPS", definition: "Transactions Per Second — throughput measure for payment processing systems" },
];
