import { useEffect } from "react";
import { FaStore, FaBreadSlice, FaGlobe } from "react-icons/fa";

import story1 from "../assets/story/img1.jpg";
import story2 from "../assets/story/img2.jpg";
import story3 from "../assets/story/img3.jpg";


export default function Story() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="story-page">
      {/* Header */}
      <div className="story-header reveal-up">
        <h1>OUR STORY</h1>
        <p>
          From Chicago’s neighborhood ovens to Bahrain’s favorite bagel shop — 
          a journey built on passion, craftsmanship, and the joy of sharing real food.
        </p>
      </div>

      {/* BLOCK 1 */}
      <div className="story-block reveal-up">
        <img src={story1} className="story-photo" alt="Story 1" />
        <div className="story-content">
          <div className="story-icon-wrap">
            <FaStore className="story-icon" />
          </div>
          <h3>1987 — A Small Chicago Bakery</h3>
          <p>
            What began as a humble bakery in Chicago quickly became a favorite.
            Our founders believed good food should feel comforting, familiar,
            and made with genuine care.
          </p>
        </div>
      </div>

      {/* BLOCK 2 */}
      <div className="story-block reverse reveal-up">
        <img src={story2} className="story-photo" alt="Story 2" />
        <div className="story-content">
          <div className="story-icon-wrap">
            <FaBreadSlice className="story-icon" />
          </div>
          <h3>Crafting the Perfect Bagel</h3>
          <p>
            Using traditional techniques, our bakers perfected the soft–chewy texture
            customers fell in love with.
          </p>
        </div>
      </div>

      {/* BLOCK 3 */}
      <div className="story-block reveal-up">
        <img src={story3} className="story-photo" alt="Story 3" />
        <div className="story-content">
          <div className="story-icon-wrap">
            <FaGlobe className="story-icon" />
          </div>
          <h3>Now in Bahrain</h3>
          <p>
            Bringing Chicago’s original taste to the Middle East —
            serving freshness, comfort, and happiness daily.
          </p>
        </div>
      </div>
    </section>
  );
}
