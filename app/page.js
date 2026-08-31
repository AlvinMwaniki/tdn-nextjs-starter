import clients from '../data/clients.json';
import ClientDashboard from './components/ClientDashboard';

// TODO (candidate task):
// Build a ClientDashboard component that renders `clients` as a responsive
// card grid. See README.md in this folder for the full spec.
//
// You can build it inline here, or break it out into its own component
// file(s) under app/ — your call.

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
      <ClientDashboard clients={clients} />

      {/* UPDATE BY ALVIN */}
    </main>
  );
}
