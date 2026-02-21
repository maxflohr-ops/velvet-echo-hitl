import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.accessToken) {
      fetchCampaigns();
    }
  }, [session]);

  const fetchCampaigns = async () => {
    try {
      const res = await fetch("/api/campaigns");
      const data = await res.json();
      setCampaigns(data.campaigns || []);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") {
    return <div style={{ padding: "20px" }}>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <nav style={{ backgroundColor: "#1f2937", color: "white", padding: "20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ margin: 0 }}>Ebril HITL MVP</h1>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <span>Welcome, {session.user?.email}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/signin" })}
              style={{
                padding: "8px 16px",
                backgroundColor: "#ef4444",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ backgroundColor: "white", padding: "30px", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h2 style={{ marginTop: 0 }}>Campaigns</h2>
          {loading ? (
            <p>Loading campaigns...</p>
          ) : campaigns.length === 0 ? (
            <p style={{ color: "#666" }}>No campaigns yet. Create one to get started.</p>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                  <th style={{ textAlign: "left", padding: "12px", fontWeight: "600" }}>Name</th>
                  <th style={{ textAlign: "left", padding: "12px", fontWeight: "600" }}>Platform</th>
                  <th style={{ textAlign: "left", padding: "12px", fontWeight: "600" }}>Target</th>
                  <th style={{ textAlign: "left", padding: "12px", fontWeight: "600" }}>Budget</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid #e5e7eb" }}>
                    <td style={{ padding: "12px" }}>{campaign.name || "—"}</td>
                    <td style={{ padding: "12px" }}>{campaign.platform || "—"}</td>
                    <td style={{ padding: "12px" }}>{campaign.target || "—"}</td>
                    <td style={{ padding: "12px" }}>{campaign.budget || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  return { props: {} };
}
