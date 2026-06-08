"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@") || !email.includes(".")) {
      setError("Adresse email invalide.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <main style={{ fontFamily: "'Georgia', serif", background: "#0d0c0a", minHeight: "100vh", color: "#e8e0d0", overflow: "hidden", position: "relative" }}>

      {/* Grain texture overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        opacity: 0.4
      }} />

      {/* Radial glow top */}
      <div style={{
        position: "fixed", top: "-200px", left: "50%", transform: "translateX(-50%)",
        width: "800px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(180,130,60,0.12) 0%, transparent 70%)",
        zIndex: 0, pointerEvents: "none"
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto", padding: "0 24px" }}>

        {/* Nav */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "32px 0 0" }}>
          <span style={{ fontFamily: "'Georgia', serif", fontSize: "13px", letterSpacing: "0.2em", color: "#a09070", textTransform: "uppercase" }}>
            ◈ ENIGMA
          </span>
          <span style={{
            fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#0d0c0a", background: "#c8a45a", padding: "5px 14px", borderRadius: "2px",
            fontFamily: "system-ui, sans-serif", fontWeight: 500
          }}>
            Bientôt
          </span>
        </nav>

        {/* Hero */}
        <section style={{ paddingTop: "96px", paddingBottom: "64px" }}>

          {/* Eyebrow */}
          <p style={{
            fontFamily: "system-ui, sans-serif", fontSize: "11px",
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "#c8a45a", marginBottom: "28px"
          }}>
            Escape game · En ligne
          </p>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Georgia', serif", fontSize: "clamp(40px, 8vw, 72px)",
            fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.01em",
            color: "#f0e8d8", marginBottom: "32px", maxWidth: "560px"
          }}>
            L'aventure commence<br />
            <em style={{ color: "#c8a45a", fontStyle: "italic" }}>dans votre navigateur.</em>
          </h1>

          {/* Description */}
          <p style={{
            fontFamily: "system-ui, sans-serif", fontSize: "16px", lineHeight: 1.7,
            color: "#8a8070", maxWidth: "480px", marginBottom: "56px"
          }}>
            Des scénarios d'exploration immersifs à jouer seul ou entre amis, 
            où chaque énigme vous rapproche d'une vérité enfouie.
          </p>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #3a3020)" }} />
            <span style={{ fontSize: "12px", color: "#4a4030", letterSpacing: "0.2em" }}>✦</span>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #3a3020)" }} />
          </div>

          {/* Form */}
          {!submitted ? (
            <div>
              <p style={{
                fontFamily: "system-ui, sans-serif", fontSize: "13px",
                color: "#6a6050", marginBottom: "16px", letterSpacing: "0.05em"
              }}>
                Soyez parmi les premiers à jouer — accès anticipé gratuit.
              </p>
              <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0", maxWidth: "420px" }}>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{
                    flex: 1, padding: "14px 18px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid #3a3020",
                    borderRight: "none",
                    borderRadius: "2px 0 0 2px",
                    color: "#e8e0d0", fontSize: "14px",
                    fontFamily: "system-ui, sans-serif",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "14px 24px",
                    background: "#c8a45a", color: "#0d0c0a",
                    border: "none", borderRadius: "0 2px 2px 0",
                    fontSize: "13px", fontWeight: 600,
                    fontFamily: "system-ui, sans-serif",
                    letterSpacing: "0.05em", cursor: "pointer",
                    whiteSpace: "nowrap"
                  }}
                >
                  Me prévenir
                </button>
              </form>
              {error && (
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "#c87050", marginTop: "8px" }}>
                  {error}
                </p>
              )}
            </div>
          ) : (
            <div style={{
              background: "rgba(200,164,90,0.08)", border: "1px solid rgba(200,164,90,0.25)",
              borderRadius: "4px", padding: "20px 24px", maxWidth: "420px"
            }}>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "14px", color: "#c8a45a", margin: 0 }}>
                ✓ Parfait — on vous contacte dès l'ouverture.
              </p>
            </div>
          )}
        </section>

        {/* Teaser cards */}
        <section style={{ paddingBottom: "80px" }}>
          <p style={{
            fontFamily: "system-ui, sans-serif", fontSize: "11px",
            letterSpacing: "0.25em", textTransform: "uppercase",
            color: "#4a4030", marginBottom: "24px"
          }}>
            En préparation
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1px", background: "#2a2010" }}>
            {[
              { icon: "🗺", label: "Scénario 01", title: "L'Expédition Perdue", sub: "Jungle · 60 min" },
              { icon: "🏛", label: "Scénario 02", title: "Les Cryptes d'Amon", sub: "Égypte antique · 45 min" },
              { icon: "⛵", label: "Scénario 03", title: "Naufrage à Crestholm", sub: "Mer du Nord · 75 min" },
            ].map((s, i) => (
              <div key={i} style={{
                background: "#0d0c0a", padding: "28px 24px",
                position: "relative", overflow: "hidden"
              }}>
                <div style={{ fontSize: "24px", marginBottom: "16px", opacity: 0.6 }}>{s.icon}</div>
                <p style={{
                  fontFamily: "system-ui, sans-serif", fontSize: "10px",
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "#4a4030", marginBottom: "6px"
                }}>{s.label}</p>
                <p style={{ fontFamily: "'Georgia', serif", fontSize: "15px", color: "#c8b890", marginBottom: "6px" }}>
                  {s.title}
                </p>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "#4a4030" }}>
                  {s.sub}
                </p>
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: "2px",
                  background: i === 0 ? "#c8a45a" : "transparent"
                }} />
              </div>
            ))}
          </div>
          <p style={{
            fontFamily: "system-ui, sans-serif", fontSize: "11px",
            color: "#3a3020", marginTop: "16px", textAlign: "right",
            letterSpacing: "0.1em"
          }}>
            + d'autres à venir
          </p>
        </section>

        {/* Footer */}
        <footer style={{
          borderTop: "1px solid #1e1c14", paddingTop: "24px", paddingBottom: "40px",
          display: "flex", justifyContent: "space-between", alignItems: "center"
        }}>
          <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", color: "#3a3020", letterSpacing: "0.1em" }}>
            © 2025 ENIGMA
          </span>
          <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", color: "#3a3020" }}>
            contact@enigma.gg
          </span>
        </footer>

      </div>
    </main>
  );
}
