import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f5f5f5"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}>
        <h1>Ebril HITL MVP</h1>
        <p style={{ color: "#666", marginBottom: "30px" }}>
          Sign in with your Google account to access the dashboard
        </p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#1f2937",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
