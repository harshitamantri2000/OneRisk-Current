/**
 * Shared Typography System — IDfy OneRisk
 *
 * Hierarchy (top → bottom):
 *
 * | Level | Token              | CSS Var                  | Weight | Use                                       |
 * |-------|--------------------|--------------------------|--------|-------------------------------------------|
 * |   1   | pageTitleStyle     | --text-lg (18px)         | 500    | Page titles in headers (not bold)         |
 * |   2   | sectionHeadingStyle| --text-md (16px)         | 600    | Major section headings with icons         |
 * |   3   | cardTitleStyle     | --text-md (16px)         | 600    | Card / panel header titles                |
 * |  3b   | subHeadingStyle    | --text-md (16px)         | 600    | Sub-sections inside cards                 |
 * |   4   | bodyStyle          | --text-base (14px)       | 500    | Data values, table cells, body text       |
 * |   5   | labelStyle         | --text-sm (12px)         | 500    | Field labels, captions                    |
 * |  5b   | breadcrumbStyle    | --text-sm (12px)         | 400    | Breadcrumb items (inactive)               |
 * |  5c   | chipTextStyle      | --text-base (14px)       | 600    | Badges, chips, pills                      |
 * |  5d   | captionStyle       | --text-sm (12px)         | 500    | Uppercase section labels (HIGHLIGHTS)     |
 * |   6   | buttonTextStyle    | --text-base (14px)       | 500    | Button labels                             |
 * |   7   | tableHeaderStyle   | --text-base (14px)       | 600    | Table column headers                      |
 * |   8   | tableCellStyle     | --text-base (14px)       | 500    | Table cell data                           |
 *
 * All sizes use CSS variables so the design system can be updated from one place.
 * Only Plus Jakarta Sans (defined in fonts.css) is used.
 */

import type React from "react";

export const FONT = "var(--font-family, 'Plus Jakarta Sans', sans-serif)";
export const FEAT = "'case', 'liga' 0";

/* ─── Level 1 — Page title (18px, medium — not bold) ─── */
export const pageTitleStyle: React.CSSProperties = {
  fontFeatureSettings: "'case'",
  fontSize: "var(--text-lg)",
  fontWeight: "var(--font-weight-medium)" as any,
  lineHeight: 1.4,
  letterSpacing: "0.072px",
  fontFamily: FONT,
  color: "var(--foreground)",
};

/* ─── Level 2 — Section headings (16px, semibold) ─── */
export const sectionHeadingStyle: React.CSSProperties = {
  fontFeatureSettings: FEAT,
  fontSize: "var(--text-md)",
  fontWeight: 600,
  lineHeight: 1.4,
  letterSpacing: "0.064px",
  fontFamily: FONT,
  color: "var(--foreground)",
};

/* ─── Level 3 — Card / panel titles (16px, semibold) ─── */
export const cardTitleStyle: React.CSSProperties = {
  fontFeatureSettings: "'case'",
  fontSize: "var(--text-md)",
  fontWeight: 600,
  lineHeight: 1.4,
  letterSpacing: "0.064px",
  fontFamily: FONT,
  color: "var(--foreground)",
};

/* ─── Level 3b — Sub-section headings inside cards (16px, semibold) ─── */
export const subHeadingStyle: React.CSSProperties = {
  fontFeatureSettings: "'case'",
  fontSize: "var(--text-md)",
  fontWeight: 600,
  lineHeight: 1.4,
  letterSpacing: "0.064px",
  fontFamily: FONT,
  color: "var(--foreground)",
};

/* ─── Level 4 — Body / data values (14px, medium) ─── */
export const bodyStyle: React.CSSProperties = {
  fontFeatureSettings: FEAT,
  fontSize: "var(--text-base)",
  fontWeight: "var(--font-weight-medium)" as any,
  lineHeight: 1.4,
  letterSpacing: "0.056px",
  fontFamily: FONT,
  color: "var(--foreground)",
};

/* ─── Level 5 — Field labels & captions (12px, medium) ─── */
export const labelStyle: React.CSSProperties = {
  fontFeatureSettings: FEAT,
  fontSize: "var(--text-sm)",
  fontWeight: "var(--font-weight-medium)" as any,
  lineHeight: 1.3,
  letterSpacing: "0.048px",
  fontFamily: FONT,
  color: "var(--muted-foreground)",
};

/* ─── Level 5b — Breadcrumbs (inactive items, 12px, normal) ─── */
export const breadcrumbStyle: React.CSSProperties = {
  fontFeatureSettings: FEAT,
  fontSize: "var(--text-sm)",
  fontWeight: "var(--font-weight-normal)" as any,
  lineHeight: 1.3,
  letterSpacing: "0.048px",
  fontFamily: FONT,
  color: "var(--text-secondary)",
};

/* ─── Level 5c — Chip / badge / pill text (14px, semibold) ─── */
export const chipTextStyle: React.CSSProperties = {
  fontFeatureSettings: FEAT,
  fontSize: "var(--text-base)",
  fontWeight: 600,
  lineHeight: 1.3,
  letterSpacing: "0.056px",
  fontFamily: FONT,
};

/* ─── Level 5d — Uppercase section label (12px, medium) ─── */
export const captionStyle: React.CSSProperties = {
  fontFeatureSettings: FEAT,
  fontSize: "var(--text-sm)",
  fontWeight: "var(--font-weight-medium)" as any,
  lineHeight: 1.3,
  letterSpacing: "1px",
  textTransform: "uppercase",
  fontFamily: FONT,
  color: "var(--muted-foreground)",
};

/* ─── Active breadcrumb (last item) ─── */
export const breadcrumbActiveStyle: React.CSSProperties = {
  ...labelStyle,
  color: "var(--foreground)",
};

/* ─── Button text (14px, medium) ─── */
export const buttonTextStyle: React.CSSProperties = {
  fontFeatureSettings: FEAT,
  fontSize: "var(--text-base)",
  fontWeight: "var(--font-weight-medium)" as any,
  lineHeight: 1.4,
  letterSpacing: "0.056px",
  fontFamily: FONT,
};

/* ─── Table header text (14px, semibold) ─── */
export const tableHeaderStyle: React.CSSProperties = {
  fontFeatureSettings: FEAT,
  fontSize: "var(--text-base)",
  fontWeight: 600,
  lineHeight: 1.4,
  letterSpacing: "0.056px",
  fontFamily: FONT,
  color: "var(--foreground)",
};

/* ─── Table cell text (14px, medium) ─── */
export const tableCellStyle: React.CSSProperties = {
  fontFeatureSettings: FEAT,
  fontSize: "var(--text-base)",
  fontWeight: "var(--font-weight-medium)" as any,
  lineHeight: 1.4,
  letterSpacing: "0.056px",
  fontFamily: FONT,
  color: "var(--foreground)",
};