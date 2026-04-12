import React from 'react'
import './home.css'

const Home = () => {
  return (
    <>

      <div className="home">
        <div className="overlay">
          <div className="home-content">
            <h1>ORDER LATE NIGHT MEALS</h1>

            <div className="app-buttons">
              <a href="#" className="app-btn">
                <img
                  className="im"
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                />
              </a>
              <a href="#" className="app-btn">
                <img
                  className="im"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                />
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>Why Choose Knight Bite?</h2>
            <p>
              Knight Bite is your go-to destination for late-night cravings! Whether you're in the mood
              for juicy burgers, crispy fries, or refreshing beverages — we’ve got you covered.
            </p>
            <p>
              Operating till the late hours, we ensure your midnight hunger doesn’t stand a chance.
              With quick delivery, fresh ingredients, and delicious taste, Knight Bite brings happiness
              straight to your door.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="About Knight Bite"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
