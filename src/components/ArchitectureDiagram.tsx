import type { ArchNode, ArchEdge } from "../i18n";

interface Props {
  title: string;
  nodes: ArchNode[];
  edges: ArchEdge[];
}

const typeVars: Record<ArchNode["type"], { bg: string; border: string; text: string }> = {
  client:   { bg: "var(--color-node-client-bg)",   border: "var(--color-node-client-border)",   text: "var(--color-node-client-text)" },
  api:      { bg: "var(--color-node-api-bg)",      border: "var(--color-node-api-border)",      text: "var(--color-node-api-text)" },
  db:       { bg: "var(--color-node-db-bg)",       border: "var(--color-node-db-border)",       text: "var(--color-node-db-text)" },
  external: { bg: "var(--color-node-external-bg)", border: "var(--color-node-external-border)", text: "var(--color-node-external-text)" },
};

const typeOrder: ArchNode["type"][] = ["client", "api", "db", "external"];

export function ArchitectureDiagram({ title, nodes, edges }: Props) {
  return (
    <div className="rounded-xl bg-bg border border-border p-5 md:p-6 overflow-x-auto">
      <p className="font-mono text-[10px] text-text-faint uppercase tracking-widest mb-5">
        {title}
      </p>

      {/* Legend */}
      <ul className="flex flex-wrap gap-3 mb-5 list-none">
        {typeOrder.map((type) => (
          <li key={type} className="flex items-center gap-1.5 text-[11px] text-text-muted font-mono">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: typeVars[type].border }}
              aria-hidden="true"
            />
            {type}
          </li>
        ))}
      </ul>

      {/* Nodes */}
      <ul className="flex flex-wrap gap-2.5 mb-4 list-none">
        {nodes.map((node) => {
          const c = typeVars[node.type];
          return (
            <li
              key={node.id}
              className="flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-mono font-medium"
              style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: c.border }}
                aria-hidden="true"
              />
              {node.label}
            </li>
          );
        })}
      </ul>

      {/* Edges */}
      <ul className="flex flex-wrap gap-2 list-none">
        {edges.map((edge) => {
          const fromNode = nodes.find((n) => n.id === edge.from);
          const toNode = nodes.find((n) => n.id === edge.to);
          if (!fromNode || !toNode) return null;
          return (
            <li
              key={`${edge.from}-${edge.to}`}
              className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-mono"
            >
              <span style={{ color: typeVars[fromNode.type].text }}>{fromNode.label}</span>
              <span className="text-text-faint" aria-hidden="true">→</span>
              <span style={{ color: typeVars[toNode.type].text }}>{toNode.label}</span>
              {edge.label && (
                <span className="text-text-faint">· {edge.label}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
