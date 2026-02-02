import { useEffect, useState, useMemo } from "react";

// ===============================
// AUTO-LOAD ALL IMAGES (Vite)
// ===============================
const menuImages = Object.fromEntries(
  Object.entries(
    import.meta.glob("../assets/menu/*.{png,jpg,jpeg,webp}", {
      eager: true,
    })
  ).map(([path, mod]) => {
    const fileName = path
      .split("/")
      .pop()
      .replace(/\.(png|jpg|jpeg|webp)$/i, "")
      .toLowerCase();
    return [fileName, mod.default];
  })
);

export default function Menu() {
  const [groups, setGroups] = useState({});
  const [err, setErr] = useState(null);

  const API_BASE = (import.meta.env.VITE_API_BASE || "http://localhost:5272").replace(/\/$/, "");

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`${API_BASE}/api/MenuItems/grouped`);
        if (!r.ok) throw new Error(await r.text());
        const data = await r.json();
        setGroups(data);
      } catch (e) {
        console.error(e);
        setErr("Failed to load menu");
      }
    })();
  }, [API_BASE]);

  // ===============================
  // UPDATED CATEGORY ORDERING
  // Added: Smoothie Blends + G&G Drinks
  // ===============================
  const orderedCats = useMemo(() => {
    const order = [
      "Bagels",
      "Super Bagel",
      "Sandwiches",
      "Breakfast Specials",
      "Sides & Salads",
      "Beverages",
       // ⭐ NEW CATEGORIES
      "Smoothie Blends",
      "G&G Drinks",
      "Desserts",
    ];

    const present = Object.keys(groups);

    return order
      .filter((c) => present.includes(c))
      .concat(present.filter((c) => !order.includes(c)));
  }, [groups]);

  if (err) return <div className="error-msg">{err}</div>;
  if (!Object.keys(groups).length) return <div className="error-msg">Loading…</div>;

  return (
    <section className="menu-section">
      <div className="container">
        <h1 className="menu-title">Menu</h1>

        {orderedCats.map((cat) => (
          <div key={cat} className="menu-category">
            <div className="category-divider">
              <span className="category-title">{cat}</span>
            </div>

            {groups[cat].map((item) => {
              // Generate filename key
              const fileKey = item.name
                .toLowerCase()
                .replace(/&/g, "and")
                .replace(/[^\w\s-]/g, "")
                .trim()
                .replace(/\s+/g, "-");

              const imgSrc = menuImages[fileKey];

              return (
                <div key={item.id} className="menu-item">

                  {/* IMAGE */}
                  {imgSrc && (
                    <div className="menu-item-image">
                      <img src={imgSrc} alt={item.name} loading="lazy"/>
                    </div>
                  )}

                  {/* INFO */}
                  <div className="menu-item-info">
                    <div className="item-name">{item.name}</div>
                    {item.description && <p className="item-desc">{item.description}</p>}
                  </div>

                  {/* <div className="item-price">
                    BHD {Number(item.price).toFixed(3)}
                  </div> */}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
