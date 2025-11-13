
export default function Gallery() {
  const images = [
    { src: "/assets/gallery/1.jpg", caption: "Fresh from our oven" },
    { src: "/assets/gallery/2.jpg", caption: "Crafted daily" },
    { src: "/assets/gallery/3.jpg", caption: "Perfect mornings start here" },
    { src: "/assets/gallery/4.jpg", caption: "The aroma of freshly baked bagels" },
    { src: "/assets/gallery/5.jpg", caption: "From our kitchen to your table" },
    { src: "/assets/gallery/6.jpg", caption: "Baked with love and passion" },
    { src: "/assets/gallery/7.jpg", caption: "Coffee, friends, and bagels" },
    { src: "/assets/gallery/8.jpg", caption: "A taste of Chicago in Bahrain" },
  ];

  return (
    <section className="gallery-page">
      <div className="container">
        <h1 className="display-sm" style={{ textAlign: "center", marginBottom: "32px" }}>
          Gallery
        </h1>

        {/* Optional Video Loop */}
        <div className="video-section">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="baking-video"
            src="/assets/gallery/baking-loop.mp4"
          />
        </div>

        {/* Image Grid */}
        <div className="gallery-grid">
          {images.map((img, i) => (
            <div className="gallery-item" key={i}>
              <img src={img.src} alt={img.caption} />
              <div className="gallery-overlay">
                <p>{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
