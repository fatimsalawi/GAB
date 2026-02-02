import { useEffect } from "react";
import { Link } from "react-router-dom";
import turkey from "../assets/picks/classicTurkey.JPG";
import salmon from "../assets/picks/salmon.JPG";
import jalapeno from "../assets/picks/jalapeno.JPG";

import heroImg from "../assets/hero/Bakedbagels.jpg";
import bakingImg from "../assets/about/bagel2.jpg";
import qrDownload from "../assets/qr/qr.webp";
import qrImg from "../assets/qr/qr.webp";
import talabatLogo from "../assets/logo/talabat-logo.png";
import jahezLogo from "../assets/logo/jahez-logo.png";
import ahlanLogo from "../assets/logo/ahlan-logo.png";

export default function Home() {

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-up");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="home-page">

      {/* HERO */}
      <section className="hero reveal-up">
        <div className="hero__media">
          <img src={heroImg} alt="Freshly baked bagels" loading="lazy"/>
        </div>
        <div className="hero__overlay">
          <h1 className="display">Daily Delight. Perfectly American.</h1>
          <p className="lead">
            Experience the authentic taste of handcrafted bagels, made fresh
            daily with love, right here in Bahrain.
          </p>
          <div className="actions">
            <Link className="btn btn--solid" to="/menu">View Menu</Link>
            <Link className="btn btn--ghost" to="/locations">Find a Location</Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section section--split reveal-up">
        <div className="container split">
          <div className="split__media">
            <img src={bakingImg} alt="Bagels baking" loading="lazy"/>
          </div>
          <div className="split__text">
            <h2 className="display-sm">Baked Fresh, Every Morning</h2>
            <p>
              At The Great American Bagel, freshness is our secret ingredient.
              From savory sandwiches to sweet cream cheese bagels, every bite
              captures Chicago’s classic bakery heritage.
            </p>
            <Link className="link" to="/story">Discover Our Story →</Link>
          </div>
        </div>
      </section>

      {/* FAVORITES */}
      <section className="section reveal-up">
        <div className="container">
          <div className="section__head">
            <h2 className="display-sm">Customer Favorites</h2>
            <Link to="/menu" className="btn btn--pill">Order Now</Link>
          </div>

          <div className="grid grid--3">
            {[
              { name: "Classic Turkey Club", desc: "Our #1 sandwich.", img: turkey },
              { name: "Smoked Salmon & Cream Cheese", desc: "On sesame or plain.", img: salmon },
              { name: "Jalapeño Cheddar Melt", desc: "Spicy + cheesy.", img: jalapeno },
            ].map((it, i) => (
              <article key={i} className="card reveal-up">
                <img src={it.img} alt={it.name} loading="lazy" />
                <div className="card__body">
                  <h3>{it.name}</h3>
                  <p className="muted">{it.desc}</p>
                  <Link className="btn btn--ghost" to="/menu">See Menu</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section className="section partners-section reveal-up">
        <div className="container partners">
          <h2 className="display-sm">Order From Your Favorite App</h2>
          <p className="muted">Prefer delivery? We’ve got you covered.</p>

          <div className="partners__row logos-inside">
            <a className="partner partner-with-logo" href="https://www.talabat.com/bahrain" target="_blank" rel="noreferrer">
              <img src={talabatLogo} alt="Talabat" loading="lazy"/>
              <span>Order on Talabat</span>
            </a>

            <a className="partner partner-with-logo" href="https://www.jahez.net/index-en.html" target="_blank" rel="noreferrer">
              <img src={jahezLogo} alt="Jahez" loading="lazy"/>
              <span>Order on Jahez</span>
            </a>

            <a className="partner partner-with-logo" href="https://ahlanapp.com/pages/home.php" target="_blank" rel="noreferrer">
              <img src={ahlanLogo} alt="Ahlan" loading="lazy"/>
              <span>Order on Ahlan</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
