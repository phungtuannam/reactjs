import videoHomePage from '../../assets/video-homepage.mp4'

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="hompage-content">
        <h2 className="homepage-title">Make forms worth filling out</h2>
        <p className="homepage-text">
          Get more data—like signups, feedback, and anything else—with forms
          designed to be refreshingly different.
        </p>
        <div>
          <button className="homepage-btn">Get started-it's free</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
