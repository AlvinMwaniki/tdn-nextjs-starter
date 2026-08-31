'use client';

import { useMemo, useState } from 'react';
import ClientCard from './ClientCard';
import FilterControls from './FilterControls';

// Filter controls for  client dashboard
export default function ClientDashboard({ clients }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredClients = useMemo(() => {
    if (activeFilter === 'all') return clients;
    return clients.filter((client) => client.status === activeFilter);
  }, [clients, activeFilter]);

  return (
    <div>
<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
  <h1 className="font-display text-2xl font-semibold text-ink">Client dashboard</h1>
<p className="mt-1 text-sm text-muted">Account health at a glance, {clients.length} clients</p>  </div>
        <FilterControls activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </div>

      {filteredClients.length === 0 ? (
        <p className="rounded-lg border border-dashed border-line bg-white p-8 text-center text-sm text-muted">
          No clients match this filter.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredClients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      )}
    </div>
  );
}