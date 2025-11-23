import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";

// ⭐ Import the flour texture image
import flourTexture from "../assets/patterns/light-beige.png";

export default function Gallery() {
  const images = [
    { src: img1, caption: "Fresh from our oven" },
    { src: img2, caption: "Crafted daily" },
    { src: img3, caption: "Perfect mornings start here" },
    { src: img4, caption: "Made with passion" },
    { src: img5, caption: "From our kitchen to you" },
    { src: img6, caption: "Handcrafted bagels" },
  ];

  return (
    <section className="gallery-page">
      <div className="container">

        {/* ⭐ Header with flour texture background */}
        <div
          className="gallery-header-bg"
          style={{ backgroundImage: `url(${flourTexture})` }}
        >
          <h1 className="display-sm gallery-title">Gallery</h1>
          <p className="gallery-subtitle">
            Discover our handcrafted bagels, freshly baked every day.
          </p>
        </div>

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
