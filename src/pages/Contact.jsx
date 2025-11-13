import { useState } from "react";
import axios from "axios";

import talabatLogo from "../assets/logo/talabat-logo.png";
import jahezLogo from "../assets/logo/jahez-logo.png";
import ahlanLogo from "../assets/logo/ahlan-logo.png";


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  async function submit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE}/api/contact`, form);
      setStatus(res.status === 200 ? "success" : "error");
      if (res.status === 200) setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="contact-page">
      <div className="container">
        {/* Header */}
        <h1 className="display-sm" style={{ color: "var(--deep-red)" }}>
          We’d Love to Hear From You!
        </h1>

        <p className="contact-desc">
          {status === "success"
            ? "Thanks! We’ll get back to you soon."
            : status === "error"
            ? "Something went wrong, please try again."
            : "Send us a message or share your experience."}
        </p>

        {/* Contact Form */}
        {status !== "success" && (
          <form onSubmit={submit} className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message / Feedback"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />

            <button disabled={status === "submitting"} className="btn btn--solid contact-send-btn">
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}

        {/* FOOTER AREA */}
        <div className="contact-footer">

          {/* Social */}
          <div className="social-links">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a> |
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a> |
            <a href="https://goo.gl/maps/" target="_blank" rel="noreferrer">Google Maps</a>
          </div>

          {/* Delivery Partners WITH LOGOS */}
          <div className="contact-partners">
            <a href="https://www.talabat.com/bahrain" target="_blank" rel="noreferrer" className="partner partner-with-logo">
              <img src={talabatLogo} alt="Talabat" />
              <span>Order on Talabat</span>
            </a>

            <a href="https://www.jahez.net/index-en.html" target="_blank" rel="noreferrer" className="partner partner-with-logo">
              <img src={jahezLogo} alt="Jahez" />
              <span>Order on Jahez</span>
            </a>

            <a href="https://ahlanapp.com/pages/home.php" target="_blank" rel="noreferrer" className="partner partner-with-logo">
              <img src={ahlanLogo} alt="Ahlan" />
              <span>Order on Ahlan</span>
            </a>
          </div>

          {/* Franchise */}
          <div className="franchise">
            Interested in partnering with us?{" "}
            <a href="https://aubon.com" target="_blank" rel="noreferrer">
              Visit Au Bon.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
