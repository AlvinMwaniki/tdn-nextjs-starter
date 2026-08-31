import StatusBadge from './StatusBadge';
//COLORS OF CARDS 

const EDGE_COLOR = {
  active: 'border-l-status-active',
  paused: 'border-l-status-paused',
  'at-risk': 'border-l-status-atrisk',
};
//currency formatter for monthly budget
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}
//date formatter for last report date
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function ClientCard({ client }) {
  const edgeColor = EDGE_COLOR[client.status] ?? EDGE_COLOR.active;

  return (
   <div
  className={`rounded-lg border border-line border-l-4 ${edgeColor} bg-white p-5 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md`}>
      <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-base font-semibold leading-snug text-ink">{client.name}</h3>
        <StatusBadge status={client.status} />
      </div>

      <dl className="mt-4 space-y-2.5 border-t border-line pt-4 text-sm">
     <div className="flex items-center justify-between">
      <dt className="text-muted">Monthly budget</dt>
      <dd className="font-medium tabular-nums text-ink">{formatCurrency(client.monthlyBudget)}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-muted">Last report</dt>
          <dd className="font-medium tabular-nums text-ink">{formatDate(client.lastReportDate)}</dd>
        </div>
      </dl>
    </div>
  );
}