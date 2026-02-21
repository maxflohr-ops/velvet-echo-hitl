export default function DashboardCard({ title, value }) {
  return (
    <div style={{ padding: 16, border: '1px solid #eee', borderRadius: 8 }}>
      <div style={{ fontSize: 12, color: '#888' }}>{title}</div>
      <div style={{ fontSize: 28, fontWeight: 700 }}>{value}</div>
    </div>
  );
}
