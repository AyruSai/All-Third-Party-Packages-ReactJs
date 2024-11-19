import {Link} from 'react-router-dom'

import './index.css'

const Home = () => (
  <ul className="home-container">
    <h1 className="heading">Third-Party Packages</h1>
    <h2>React Player</h2>
    <li className="list-item">
      <Link to="/video-player">Video Player</Link>
    </li>
    <h2>Recharts</h2>
    <li className="list-item">
      <Link to="/bar-chart">Bar Chart</Link>
    </li>
    <li className="list-item">
      <Link to="/pie-chart">Pie Chart</Link>
    </li>
    <h2>React Chrono</h2>
    <li className="list-item">
      <Link to="/react-chrono">React Chrono</Link>
    </li>
    <li className="list-item">
      <Link to="/react-slick">React Slick</Link>
    </li>
    <li className="list-item">
      <Link to="/react-popup">React Popup</Link>
    </li>
  </ul>
)

export default Home
