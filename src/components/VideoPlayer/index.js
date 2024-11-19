import {Component} from 'react'

import ReactPlayer from 'react-player'

import './index.css'

const videoURL = 'https://youtu.be/YE7VzlLtp-4'

class VideoPlayer extends Component {
  state = {
    isPlaying: false,
  }

  onClickPlay = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  render() {
    const {isPlaying} = this.state
    const btnText = isPlaying ? 'Pause' : 'Play'

    return (
      <div className="video-container">
        <h1 className="heading">Video Player</h1>
        <div className="responsive-container">
          <ReactPlayer url={videoURL} playing={isPlaying} />
        </div>
        <button type="button" className="button" onClick={this.onClickPlay}>
          {btnText}
        </button>
      </div>
    )
  }
}

export default VideoPlayer
