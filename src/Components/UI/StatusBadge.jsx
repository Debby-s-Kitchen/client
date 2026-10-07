

const STATUS_STYLES = {
  available: { bg: "#D1FAE5", text: "#065F46", label: "Available" },
  "few-minutes": { bg: "#FEF3C7", text: "#92400E", label: "Ready in a few minutes" },
  unavailable: { bg: "#FEE2E2", text: "#991B1B", label: "Not available" },
};

function StatusBadge({ status }) {
  const style = STATUS_STYLES[status] || STATUS_STYLES.unavailable;

  return (
    <span
      style={{
        backgroundColor: style.bg,
        color: style.text,
        padding: "2px 8px",
        borderRadius: "9999px",
        fontSize: "0.7rem",
        fontWeight: 600,
        display: "inline-block",
      }}
    >
      {style.label}
    </span>
  );
}

export default StatusBadge;