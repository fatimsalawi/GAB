import { useEffect, useState, useMemo } from "react";


export default function Menu() {
  const [groups, setGroups] = useState({});
  const [err, setErr] = useState(null);

  const API_BASE = (import.meta.env.VITE_API_BASE || "http://localhost:5272").replace(/\/$/, "");

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`${API_BASE}/api/MenuItems/grouped`, { mode: "cors" });
        if (!r.ok) throw new Error(await r.text());
        const data = await r.json();
        setGroups(data);
      } catch (e) {
        console.error(e);
        setErr("Failed to load menu");
      }
    })();
  }, [API_BASE]);

  const orderedCats = useMemo(() => {
    const order = [
      "Bagels",
      "Sandwiches",
      "Breakfast Specials",
      "Sides & Salads",
      "Beverages",
      "Desserts",
    ];
    const present = Object.keys(groups);
    return order.filter(c => present.includes(c)).concat(present.filter(c => !order.includes(c)));
  }, [groups]);

  if (err) return <div className="error-msg">{err}</div>;
  if (!Object.keys(groups).length) return <div className="error-msg">Loading menu…</div>;

  return (
    <section className="menu-section">
      <div className="container">
        <h1 className="menu-title">Menu</h1>

        {orderedCats.map(cat => (
          <div key={cat} className="menu-category">
            <div className="category-divider">
              <span className="category-title">{cat}</span>
            </div>

            {groups[cat].map(item => (
              <div key={item.id} className="menu-item">
                <div className="menu-item-info">
                  <div className="item-name">
                    {item.name}
                    <Badges it={item} />
                  </div>
                  {item.description && <p className="item-desc">{item.description}</p>}
                  {item.is_signature && <span className="signature">⭐ Customer Favorite</span>}
                </div>

                {"price" in item && (
                  <div className="item-price">BHD {Number(item.price).toFixed(3)}</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Badges({ it }) {
  const chip = (txt, title) => (
    <span className="badge" title={title}>{txt}</span>
  );

  return (
    <span className="badge-row">
      {it.is_vegetarian && chip("🌿", "Vegetarian")}
      {it.is_spicy && chip("🌶️", "Spicy")}
    </span>
  );
}
