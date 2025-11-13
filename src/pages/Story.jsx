import storyBg from "../assets/banner/story-bg.jpg"; // your image file

export default function Story() {
  return (
    <section className="story-section">
      <div
        className="story-bg"
        style={{ backgroundImage: `url(${storyBg})` }}
      ></div>

      <div className="story-overlay">
        <h1 className="story-title">Our Story</h1>

        <p className="story-text">
          Baked fresh every morning. From Chicago heritage to Bahrain’s favorite bagel shop—
          freshness, craftsmanship, and community are at the heart of everything we do.
        </p>

        <p className="story-text">
          Every bagel is hand-crafted using traditional methods, ensuring the same authentic
          flavor and texture our customers have loved for years. Whether it’s your morning coffee
          companion or a family weekend treat, The Great American Bagel brings a taste of home
          and happiness to every bite.
        </p>
      </div>
    </section>
  );
}
