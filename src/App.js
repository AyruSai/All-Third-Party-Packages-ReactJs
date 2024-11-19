import {BrowserRouter, Route, Switch} from 'react-router-dom'

import VideoPlayer from './components/VideoPlayer'
import BarChart from './components/Recharts/BarChart'
import PieChart from './components/Recharts/PieChart'

import ReactChrono from './components/ReactChrono'
import ReactSlick from './components/ReactSlick'
import ReactPopup from './components/ReactPopup'

import Home from './components/Home'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/video-player" component={VideoPlayer} />
      <Route exact path="/bar-chart" component={BarChart} />
      <Route exact path="/pie-chart" component={PieChart} />
      <Route exact path="/react-chrono" component={ReactChrono} />
      <Route exact path="/react-slick" component={ReactSlick} />
      <Route exact path="/react-popup" component={ReactPopup} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App
