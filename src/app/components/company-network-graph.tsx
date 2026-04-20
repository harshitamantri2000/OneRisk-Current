import { useState, useCallback, useMemo, useRef } from "react";
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { useNavigate } from "react-router";

interface NetworkNode {
  id: string;
  label: string;
  type: "company" | "person" | "entity";
  x: number;
  y: number;
  risk: "high" | "medium" | "low";
}

interface NetworkEdge {
  source: string;
  target: string;
  label?: string;
}

/* Nodes are spread across an 800×380 viewBox with ample spacing */
const nodes: NetworkNode[] = [
  { id: "main", label: "Nexagen Infra Pvt Ltd", type: "company", x: 400, y: 165, risk: "medium" },
  { id: "sub1", label: "Pinnacle Realtors Pvt Ltd", type: "company", x: 165, y: 58, risk: "high" },
  { id: "sub2", label: "Greenscape Developers LLP", type: "entity", x: 635, y: 58, risk: "medium" },
  { id: "sub3", label: "Arihant BuildTech Pvt Ltd", type: "company", x: 68, y: 200, risk: "low" },
  { id: "entity1", label: "NexaVentures Capital LLP", type: "entity", x: 732, y: 200, risk: "medium" },
  { id: "person1", label: "Raj Kumar Sharma", type: "person", x: 175, y: 320, risk: "low" },
  { id: "person2", label: "Sunita Devi Agarwal", type: "person", x: 625, y: 320, risk: "medium" },
];

const edges: NetworkEdge[] = [
  { source: "main", target: "sub1", label: "Subsidiary" },
  { source: "main", target: "sub2", label: "Associate" },
  { source: "main", target: "sub3", label: "Shareholder" },
  { source: "main", target: "entity1", label: "Investor" },
  { source: "main", target: "person1", label: "Director" },
  { source: "main", target: "person2", label: "Director" },
  { source: "sub1", target: "person1", label: "Director" },
  { source: "sub2", target: "person2", label: "Partner" },
  { source: "entity1", target: "person1", label: "Partner" },
];

const nodeRadius: Record<NetworkNode["type"], number> = {
  company: 24,
  person: 19,
  entity: 21,
};

const riskColorVar: Record<NetworkNode["risk"], string> = {
  high: "var(--risk-high)",
  medium: "var(--risk-medium)",
  low: "var(--risk-low)",
};

const riskBgVar: Record<NetworkNode["risk"], string> = {
  high: "var(--destructive-light)",
  medium: "var(--warning-light)",
  low: "var(--success-light)",
};

const typeIcon: Record<NetworkNode["type"], string> = {
  company: "\u{1F3E2}",
  person: "\u{1F464}",
  entity: "\u{1F3E6}",
};

const BASE_VIEWBOX = { x: 0, y: 0, w: 800, h: 380 };
const ZOOM_STEP = 0.2;
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;

export function CompanyNetworkGraph() {
  const navigate = useNavigate();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0, ox: 0, oy: 0 });

  const handleNodeHover = useCallback((id: string | null) => {
    setHoveredNode(id);
  }, []);

  const handleNodeClick = useCallback((id: string) => {
    navigate(`/company/${id}`);
  }, [navigate]);

  const handleNodeDoubleClick = useCallback((id: string) => {
    navigate(`/company/${id}`);
  }, [navigate]);

  const handleZoomIn = useCallback(() => {
    setZoom((prev) => Math.min(prev + ZOOM_STEP, MAX_ZOOM));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom((prev) => Math.max(prev - ZOOM_STEP, MIN_ZOOM));
  }, []);

  const handleReset = useCallback(() => {
    setZoom(1);
    setPanOffset({ x: 0, y: 0 });
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -ZOOM_STEP * 0.5 : ZOOM_STEP * 0.5;
    setZoom((prev) => Math.min(Math.max(prev + delta, MIN_ZOOM), MAX_ZOOM));
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if ((e.target as Element).closest("[data-node]")) return;
      setIsPanning(true);
      panStart.current = { x: e.clientX, y: e.clientY, ox: panOffset.x, oy: panOffset.y };
      (e.target as Element).setPointerCapture?.(e.pointerId);
    },
    [panOffset]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isPanning) return;
      const dx = e.clientX - panStart.current.x;
      const dy = e.clientY - panStart.current.y;
      setPanOffset({
        x: panStart.current.ox + dx / zoom,
        y: panStart.current.oy + dy / zoom,
      });
    },
    [isPanning, zoom]
  );

  const handlePointerUp = useCallback(() => {
    setIsPanning(false);
  }, []);

  const viewBox = useMemo(() => {
    const w = BASE_VIEWBOX.w / zoom;
    const h = BASE_VIEWBOX.h / zoom;
    const cx = BASE_VIEWBOX.w / 2 - panOffset.x;
    const cy = BASE_VIEWBOX.h / 2 - panOffset.y;
    return `${cx - w / 2} ${cy - h / 2} ${w} ${h}`;
  }, [zoom, panOffset]);

  const connectedEdges = useMemo(() => {
    const active = hoveredNode;
    if (!active) return new Set<string>();
    return new Set(
      edges
        .filter((e) => e.source === active || e.target === active)
        .map((e) => `${e.source}-${e.target}`)
    );
  }, [hoveredNode]);

  const connectedNodes = useMemo(() => {
    const active = hoveredNode;
    if (!active) return new Set<string>();
    const set = new Set<string>([active]);
    edges.forEach((e) => {
      if (e.source === active) set.add(e.target);
      if (e.target === active) set.add(e.source);
    });
    return set;
  }, [hoveredNode]);

  const hasActive = hoveredNode !== null;

  const nodeMap = useMemo(() => {
    const map = new Map<string, NetworkNode>();
    nodes.forEach((n) => map.set(n.id, n));
    return map;
  }, []);

  const zoomPercent = Math.round(zoom * 100);
  const isReset = zoom === 1 && panOffset.x === 0 && panOffset.y === 0;

  return (
    <div
      className="relative w-full h-full"
      style={{ fontFamily: "var(--font-family, 'Plus Jakarta Sans', sans-serif)" }}
    >
      <svg
        viewBox={viewBox}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        style={{
          cursor: isPanning ? "grabbing" : "grab",
          fontFamily: "var(--font-family, 'Plus Jakarta Sans', sans-serif)",
        }}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <defs>
          <pattern id="netgrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--border)" strokeWidth="0.5" opacity="0.35" />
          </pattern>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker id="arrow" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 7 2.5, 0 5" fill="var(--muted-foreground)" opacity="0.45" />
          </marker>
          <marker id="arrow-active" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
            <polygon points="0 0, 7 2.5, 0 5" fill="var(--primary)" />
          </marker>
        </defs>

        {/* Background */}
        <rect x="-800" y="-800" width="2400" height="2000" fill="var(--card)" />
        <rect x="-800" y="-800" width="2400" height="2000" fill="url(#netgrid)" />

        {/* Edges */}
        {edges.map((edge) => {
          const source = nodeMap.get(edge.source);
          const target = nodeMap.get(edge.target);
          if (!source || !target) return null;

          const edgeKey = `${edge.source}-${edge.target}`;
          const isActive = connectedEdges.has(edgeKey);
          const dimmed = hasActive && !isActive;

          const dx = target.x - source.x;
          const dy = target.y - source.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const srcR = nodeRadius[source.type] + 2;
          const tgtR = nodeRadius[target.type] + 9;
          const sx = source.x + (dx / dist) * srcR;
          const sy = source.y + (dy / dist) * srcR;
          const tx = target.x - (dx / dist) * tgtR;
          const ty = target.y - (dy / dist) * tgtR;

          const mx = (sx + tx) / 2;
          const my = (sy + ty) / 2;
          const perpX = -(ty - sy);
          const perpY = tx - sx;
          const perpDist = Math.sqrt(perpX * perpX + perpY * perpY) || 1;
          const curve = 10;
          const cx = mx + (perpX / perpDist) * curve;
          const cy = my + (perpY / perpDist) * curve;

          return (
            <g key={edgeKey} opacity={dimmed ? 0.12 : 1} style={{ transition: "opacity 0.2s ease" }}>
              <path
                d={`M ${sx} ${sy} Q ${cx} ${cy} ${tx} ${ty}`}
                fill="none"
                stroke={isActive ? "var(--primary)" : "var(--muted-foreground)"}
                strokeWidth={isActive ? 1.5 : 0.8}
                strokeDasharray={isActive ? "none" : "4 3"}
                markerEnd={isActive ? "url(#arrow-active)" : "url(#arrow)"}
                opacity={isActive ? 1 : 0.45}
                style={{ transition: "all 0.2s ease" }}
              />
              {edge.label && (isActive || !hasActive) && (
                <g>
                  <rect
                    x={cx - 25}
                    y={cy - 7}
                    width="50"
                    height="14"
                    rx="3"
                    fill="var(--card)"
                    stroke="var(--border)"
                    strokeWidth="0.5"
                  />
                  <text
                    x={cx}
                    y={cy + 2.5}
                    textAnchor="middle"
                    fill="var(--muted-foreground)"
                    fontSize="8"
                    style={{ fontFamily: "var(--font-family, 'Plus Jakarta Sans', sans-serif)" }}
                  >
                    {edge.label}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const r = nodeRadius[node.type];
          const isHovered = hoveredNode === node.id;
          const isConnected = connectedNodes.has(node.id);
          const dimmed = hasActive && !isConnected;
          const highlighted = isHovered;

          return (
            <g
              key={node.id}
              data-node
              style={{
                cursor: "pointer",
                transition: "opacity 0.2s ease",
                opacity: dimmed ? 0.18 : 1,
              }}
              onMouseEnter={() => handleNodeHover(node.id)}
              onMouseLeave={() => handleNodeHover(null)}
              onClick={() => handleNodeClick(node.id)}
              filter={highlighted ? "url(#glow)" : undefined}
            >
              {/* Risk ring */}
              <circle
                cx={node.x}
                cy={node.y}
                r={r + 3}
                fill="none"
                stroke={riskColorVar[node.risk]}
                strokeWidth={highlighted ? 2 : 1.2}
                strokeDasharray={node.risk === "medium" ? "3 2" : "none"}
                opacity={highlighted ? 1 : 0.5}
                style={{ transition: "all 0.2s ease" }}
              />
              {/* Node fill */}
              <circle
                cx={node.x}
                cy={node.y}
                r={r}
                fill={riskBgVar[node.risk]}
                stroke={riskColorVar[node.risk]}
                strokeWidth={highlighted ? 1.8 : 0.8}
                style={{ transition: "all 0.2s ease" }}
              />
              {/* Icon */}
              <text
                x={node.x}
                y={node.y + 1}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={r * 0.6}
                style={{ pointerEvents: "none" }}
              >
                {typeIcon[node.type]}
              </text>
              {/* Label pill */}
              <rect
                x={node.x - 60}
                y={node.y + r + 6}
                width="120"
                height="16"
                rx="3"
                fill="var(--card)"
                stroke="var(--border)"
                strokeWidth="0.5"
                opacity={dimmed ? 0 : 1}
                style={{ transition: "opacity 0.2s ease" }}
              />
              <text
                x={node.x}
                y={node.y + r + 16}
                textAnchor="middle"
                fill="var(--foreground)"
                fontSize="9"
                opacity={dimmed ? 0 : 1}
                style={{
                  fontFamily: "var(--font-family, 'Plus Jakarta Sans', sans-serif)",
                  fontWeight: "var(--font-weight-medium, 500)",
                  transition: "opacity 0.2s ease",
                }}
              >
                {node.label}
              </text>
              {/* Active indicator dot */}
              {highlighted && (
                <circle
                  cx={node.x + r - 2}
                  cy={node.y - r + 2}
                  r="4"
                  fill={riskColorVar[node.risk]}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Zoom controls */}
      <div
        className="absolute flex flex-col items-center gap-[4px]"
        style={{
          bottom: "12px",
          right: "12px",
          zIndex: 10,
          fontFamily: "var(--font-family, 'Plus Jakarta Sans', sans-serif)",
        }}
      >
        <button
          onClick={handleZoomIn}
          disabled={zoom >= MAX_ZOOM}
          className="flex items-center justify-center rounded-[var(--radius)] border border-border"
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: "var(--card)",
            color: zoom >= MAX_ZOOM ? "var(--muted-foreground)" : "var(--foreground)",
            opacity: zoom >= MAX_ZOOM ? 0.4 : 1,
            cursor: zoom >= MAX_ZOOM ? "not-allowed" : "pointer",
            transition: "background-color 0.15s ease, opacity 0.15s ease",
            boxShadow: "var(--elevation-sm)",
          }}
          onMouseEnter={(e) => {
            if (zoom < MAX_ZOOM) e.currentTarget.style.backgroundColor = "var(--muted)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--card)";
          }}
          aria-label="Zoom in"
        >
          <ZoomIn size={14} />
        </button>

        <button
          onClick={handleZoomOut}
          disabled={zoom <= MIN_ZOOM}
          className="flex items-center justify-center rounded-[var(--radius)] border border-border"
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: "var(--card)",
            color: zoom <= MIN_ZOOM ? "var(--muted-foreground)" : "var(--foreground)",
            opacity: zoom <= MIN_ZOOM ? 0.4 : 1,
            cursor: zoom <= MIN_ZOOM ? "not-allowed" : "pointer",
            transition: "background-color 0.15s ease, opacity 0.15s ease",
            boxShadow: "var(--elevation-sm)",
          }}
          onMouseEnter={(e) => {
            if (zoom > MIN_ZOOM) e.currentTarget.style.backgroundColor = "var(--muted)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--card)";
          }}
          aria-label="Zoom out"
        >
          <ZoomOut size={14} />
        </button>

        <button
          onClick={handleReset}
          disabled={isReset}
          className="flex items-center justify-center rounded-[var(--radius)] border border-border"
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: "var(--card)",
            color: isReset ? "var(--muted-foreground)" : "var(--primary)",
            opacity: isReset ? 0.4 : 1,
            cursor: isReset ? "not-allowed" : "pointer",
            transition: "background-color 0.15s ease, opacity 0.15s ease",
            marginTop: "4px",
            boxShadow: "var(--elevation-sm)",
          }}
          onMouseEnter={(e) => {
            if (!isReset) e.currentTarget.style.backgroundColor = "var(--muted)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--card)";
          }}
          aria-label="Reset view"
        >
          <Maximize2 size={12} />
        </button>
      </div>
    </div>
  );
}