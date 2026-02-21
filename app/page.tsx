'use client';

import { useState, useEffect } from 'react';
import DashboardCard from './components/DashboardCard';
import DraftList from './components/DraftList';
import ApprovalsList from './components/ApprovalsList';

export default function Dashboard() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    setStats({ budget: '$5,000', spend: '$1,200' });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <DashboardCard title="Total Budget" value={stats?.budget ?? '—'} />
        <DashboardCard title="Current Spend" value={stats?.spend ?? '—'} />
      </div>
      <div style={{ marginTop: 32 }}>
        <DraftList />
      </div>
      <div style={{ marginTop: 32 }}>
        <ApprovalsList />
      </div>
    </div>
  );
}
