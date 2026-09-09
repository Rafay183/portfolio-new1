import React, { useState } from 'react';
import {
  Layers,
  Database,
  Cpu,
  Workflow,
  Sparkles,
  BarChart3,
  CheckCircle2,
  Server,
  FileSpreadsheet,
  MessageSquare,
  Mail,
  Cloud,
  ChevronRight,
  Info
} from 'lucide-react';

interface EcosystemLayer {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
  nodes: {
    label: string;
    detail: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
}

export const EcosystemVisualizer: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('ai-layer');
  const [activeNode, setActiveNode] = useState<{ label: string; detail: string } | null>({
    label: 'LLMs & Claude Integration',
    detail: 'Evaluated & deployed frontier models reasoning over company context with strict latency, cost, and hallucination guardrails.',
  });

  const layers: EcosystemLayer[] = [
    {
      id: 'systems',
      number: '01',
      name: 'Business Systems',
      subtitle: 'Existing Tools & Sources',
      icon: Server,
      color: 'text-blue-400',
      bgColor: 'bg-blue-950/30',
      borderColor: 'border-blue-800/40',
      nodes: [
        { label: 'CRM & ERP', detail: 'Salesforce, HubSpot, SAP & internal ERP business databases.', icon: Server },
        { label: 'Documents & Files', detail: 'PDFs, contracts, spreadsheets, SOPs, and historical archives.', icon: FileSpreadsheet },
        { label: 'Slack & Teams', detail: 'Collaboration channels where team members collaborate daily.', icon: MessageSquare },
        { label: 'Business Email', detail: 'Inbound customer requests, alerts, and operational correspondence.', icon: Mail },
        { label: 'REST & Webhook APIs', detail: 'Custom internal endpoints and partner software feeds.', icon: Cloud },
      ],
    },
    {
      id: 'data-layer',
      number: '02',
      name: 'Data & Ingestion',
      subtitle: 'Structured & Vector Stores',
      icon: Database,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-950/30',
      borderColor: 'border-cyan-800/40',
      nodes: [
        { label: 'SQL / Postgres / MySQL', detail: 'Relational data normalized and secured with query optimization.', icon: Database },
        { label: 'Vector Indexing & Embeddings', detail: 'Semantic representations of enterprise documents for precision RAG.', icon: Layers },
        { label: 'ETL Pipelines', detail: 'Automated data extraction, cleaning, and validation routines.', icon: Workflow },
      ],
    },
    {
      id: 'ai-layer',
      number: '03',
      name: 'AI / LLM Layer',
      subtitle: 'Reasoning & Intelligence',
      icon: Cpu,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-950/30',
      borderColor: 'border-indigo-800/40',
      nodes: [
        { label: 'LLMs & Claude Integration', detail: 'Evaluated & deployed frontier models reasoning over company context with strict latency, cost, and hallucination guardrails.', icon: Sparkles },
        { label: 'AI Agents & Orchestrators', detail: 'Task planning, structured output enforcement, and function calling tools.', icon: Cpu },
        { label: 'Knowledge Assistants', detail: 'Context-grounded search delivering verifiable answers with citations.', icon: MessageSquare },
      ],
    },
    {
      id: 'automation-layer',
      number: '04',
      name: 'Intelligent Automation',
      subtitle: 'Execution & Control',
      icon: Workflow,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-950/30',
      borderColor: 'border-emerald-800/40',
      nodes: [
        { label: 'Event-Driven Triggers', detail: 'Instant webhook activation on new records, files, or messages.', icon: Workflow },
        { label: 'Human-in-the-Loop', detail: 'Review queues and Slack/email approvals for critical threshold decisions.', icon: CheckCircle2 },
        { label: 'System Action Dispatchers', detail: 'Autonomous execution of database updates, emails, and ticket triage.', icon: Cloud },
      ],
    },
    {
      id: 'outcomes-layer',
      number: '05',
      name: 'Business Outcomes',
      subtitle: 'Measurable Value',
      icon: BarChart3,
      color: 'text-amber-400',
      bgColor: 'bg-amber-950/30',
      borderColor: 'border-amber-800/40',
      nodes: [
        { label: 'Power BI & Dashboards', detail: 'Live executive reporting with real-time operational KPI metrics.', icon: BarChart3 },
        { label: 'Reclaimed Work Hours', detail: 'Elimination of repetitive manual copy-paste and document parsing.', icon: CheckCircle2 },
        { label: 'Scalable Operations', detail: 'Workflows that expand 10x without proportional headcount friction.', icon: Layers },
      ],
    },
  ];

  const currentLayer = layers.find((l) => l.id === selectedLayerId) || layers[2];

  return (
    <div className="w-full rounded-2xl bg-[#0b0f19]/90 border border-slate-800 p-4 sm:p-6 shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono tracking-wider uppercase text-cyan-400 font-semibold">
              Live Architecture View
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white mt-1">
            Enterprise AI Ecosystem Architecture
          </h3>
        </div>
        <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-300">
          <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Click any layer or node to trace integration flow</span>
        </div>
      </div>

      {/* Main visual layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Layer Selector Column (Vertical Pipeline) */}
        <div className="lg:col-span-5 space-y-2.5">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
            Integrated Data &amp; AI Flow
          </p>

          {layers.map((layer, index) => {
            const Icon = layer.icon;
            const isSelected = layer.id === selectedLayerId;

            return (
              <div key={layer.id} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedLayerId(layer.id);
                    setActiveNode(layer.nodes[0]);
                  }}
                  className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? `${layer.bgColor} ${layer.borderColor} shadow-lg shadow-cyan-950/50 ring-1 ring-cyan-500/30`
                      : 'bg-slate-900/40 border-slate-800/70 hover:bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-slate-500 w-5">
                      {layer.number}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-slate-900 ' + layer.color : 'bg-slate-800/80 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {layer.name}
                      </div>
                      <div className="text-[11px] text-slate-400">{layer.subtitle}</div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </button>

                {/* Subtle connecting connector line */}
                {index < layers.length - 1 && (
                  <div className="h-2 w-0.5 bg-slate-800 mx-auto my-0.5" />
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Layer Node Inspector Column */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-xl bg-slate-900/60 border border-slate-800/90 p-4 sm:p-5">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${currentLayer.bgColor} ${currentLayer.color}`}>
                  Layer {currentLayer.number}
                </span>
                <h4 className="text-sm font-bold text-white tracking-wide">
                  {currentLayer.name} Nodes
                </h4>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {currentLayer.nodes.length} Connected Components
              </span>
            </div>

            {/* Interactive Node Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4">
              {currentLayer.nodes.map((node) => {
                const NodeIcon = node.icon;
                const isNodeActive = activeNode?.label === node.label;
                return (
                  <button
                    key={node.label}
                    type="button"
                    onClick={() => setActiveNode(node)}
                    className={`p-3 rounded-lg text-left transition-all border cursor-pointer flex items-start gap-2.5 ${
                      isNodeActive
                        ? 'bg-cyan-950/50 border-cyan-500/50 text-white shadow-sm ring-1 ring-cyan-500/20'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded-md mt-0.5 ${
                        isNodeActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <NodeIcon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold leading-tight">{node.label}</div>
                      <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {node.detail}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Detailed Explanation */}
            {activeNode && (
              <div className="p-3.5 rounded-xl bg-[#080b12] border border-cyan-500/20 text-xs">
                <div className="flex items-center gap-2 font-mono text-cyan-400 text-[11px] uppercase tracking-wider mb-1 font-semibold">
                  <Sparkles className="w-3 h-3" />
                  <span>Architecture Role: {activeNode.label}</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{activeNode.detail}</p>
              </div>
            )}
          </div>

          {/* Bottom Philosophy Callout Box */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-400">
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-mono text-[10px] uppercase font-bold shrink-0 mt-0.5">
              Core Reality
            </span>
            <p className="leading-snug">
              <strong className="text-slate-200">AI is connected to the organization</strong> — not isolated in a chatbot. It orchestrates real databases, workflows, and tools to generate verifiable business outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
