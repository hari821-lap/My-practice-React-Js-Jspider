import React, { useEffect } from "react";
import "./about.css";

const About = () => {
  
  useEffect(() => {
    const nav = document.getElementById("mainNav");
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 20) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="about-page">
     
      <section className="about-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
         
          <h1>
            KNIGHT BITE IS A<br />
            CLOUD KITCHEN WHICH<br />
            DELIVERS FOOD TO<br />
            THE NOCTURNALS<br />
            GIVING EQUAL<br />
            EMPHASIS ON FOOD,<br />
            TECHNOLOGY AND<br />
            LOGISTICS.
          </h1>
        </div>
      </section>

     
      <section className="about-long">
        <div className="about-container">
          <aside className="about-left">
            <div className="left-block">
              <img
                src="/assets/about-left-1.jpg"
                alt="kb-left-1"
                onError={(e) => {
                 
                  e.target.src =
                    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=60";
                }}
              />
              <p>Serving late-night cravings since day one</p>
            </div>

            <div className="left-block icons">
              
            </div>

            <div className="left-block">
              <img
                src="/assets/about-left-2.jpg"
                alt="kb-left-2"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=800&q=60";
                }}
              />
            </div>
          </aside>

          <section className="about-right">
            <article>
              <h2>About Knight Bite</h2>

              <p>
                Knight Bite started with the idea to serve all the hungry
                nocturnals who find it difficult to order late-night munchies.
                KB brought together late-night eaters and helped them order
                delicious meals at their convenience via Knight Bite App and
                call.
              </p>

              <p>
                The app gained traction quickly — trending among top food apps
                and downloaded by thousands across cities. We focus on fast
                delivery, consistent taste, and operational excellence.
              </p>

              <h3>Our Growth</h3>
              <p>
                Biters (customers) accepted and loved the KB app that made the
                ordering process easier. Quickly we expanded to multiple
                locations and improved our delivery logistics.
              </p>

              <h3>Locations</h3>
              <ul className="locations">
                <li>
                  <strong>Bengaluru</strong> — Hours: 7:00 pm - 4:00 am
                </li>
                <li>
                  <strong>Mangalore</strong> — Hours: 7:00 pm - 4:00 am
                </li>
                <li>
                  <strong>Manipal</strong> — Hours: 7:00 pm - 4:00 am
                </li>
              </ul>

              
              <p style={{ marginTop: 24 }}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <span key={i}>
                    Knight Bite continues to expand, focusing on technology,
                    logistics and the best late-night menu choices.{" "}
                  </span>
                ))}
              </p>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
};

export default About;
