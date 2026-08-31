// Filter controls for client dashboard
const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'paused', label: 'Paused' },
  { value: 'at-risk', label: 'At risk' },
];
// FilterControls component for client dashboard
export default function FilterControls({ activeFilter, onFilterChange }) {
  return (
    <div role="group" aria-label="Filter clients by status" className="flex flex-wrap gap-2">
      {FILTERS.map((filter) => {
        const isActive = filter.value === activeFilter;
        return (
          <button
            key={filter.value}
            type="button"
            //added this feature keyboard focus and ARIA on the filter buttons
            aria-pressed={isActive}
            onClick={() => onFilterChange(filter.value)}
            className={`rounded-md border px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 ${
              isActive
                ? 'border-brand bg-brand text-white'
                : 'border-line bg-white text-ink hover:border-brand/40'
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}

