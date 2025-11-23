  import { useEffect, useMemo, useState } from "react";

  export default function Locations() {
    const [list, setList] = useState([]);
    const [err, setErr] = useState(null);
    const [mapQuery, setMapQuery] = useState("Bahrain");
    const API_BASE = (import.meta.env.VITE_API_BASE || "http://localhost:5272").replace(/\/$/, "");

    useEffect(() => {
      (async () => {
        try {
          const r = await fetch(`${API_BASE}/api/locations`, { mode: "cors" });
          if (!r.ok) throw new Error(await r.text());
          const data = await r.json();
          setList(Array.isArray(data) ? data : []);
          if (Array.isArray(data) && data.length)
            setMapQuery(data[0].address || data[0].name || "Bahrain");
        } catch (e) {
          console.error(e);
          setErr("Failed to load locations.");
          setList([
            {
              name: "Fontana Tower – Juffair",
              address: "Fontana Tower, Juffair",
              hours: "8 AM – 11 PM",
              maps: "https://maps.google.com/?q=Fontana Tower Bahrain",
            },
            {
              name: "Villaggio – Saar",
              address: "Villaggio Mall, Saar",
              hours: "8 AM – 11 PM",
              maps: "https://maps.google.com/?q=Villaggio Mall Bahrain",
            },
          ]);
          setMapQuery("Bahrain");
        }
      })();
    }, [API_BASE]);

    const mapSrc = useMemo(() => {
      const q = encodeURIComponent(mapQuery || "Bahrain");
      return `https://maps.google.com/maps?q=${q}&z=14&output=embed`;
    }, [mapQuery]);

    return (
      <section className="locations-section">
        <header className="locations-header">
          <h1>Find a GAB Near You</h1>
          <p>Search our Bahrain locations and get directions instantly.</p>
        </header>

        <div className="locations-fullwidth">
          <div className="locations-list">
            {err && <div className="loc-error">{err}</div>}
            {list.map((loc, i) => (
              <div
                key={i}
                className="location-card"
                onClick={() => setMapQuery(loc.address || loc.name)}
              >
                <h3>{loc.name}</h3>
                <p className="muted">📍 {loc.address}</p>
                <p className="muted">⏰ {loc.hours}</p>
                <a
                  href={loc.maps}
                  className="btn-location"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Get Directions
                </a>
              </div>
            ))}
          </div>

          <div className="locations-map">
            <iframe
              title="GAB Map"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
