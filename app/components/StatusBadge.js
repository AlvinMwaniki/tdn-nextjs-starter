//Holds color and label for status badges
const STATUS_STYLES = {
  active: { label: 'Active', dot: 'bg-status-active', badge: 'bg-status-active-bg text-status-active' },
  paused: { label: 'Paused', dot: 'bg-status-paused', badge: 'bg-status-paused-bg text-status-paused' },
  'at-risk': { label: 'At risk', dot: 'bg-status-atrisk', badge: 'bg-status-atrisk-bg text-status-atrisk' },
};

export default function StatusBadge({ status }) {
  const style = STATUS_STYLES[status] ?? STATUS_STYLES.active;

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${style.badge}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
      {style.label}
    </span>
  );
}