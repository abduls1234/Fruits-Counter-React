// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {bananas: 0, mangoes: 0}

  bananasCount = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  mangoesCount = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  render() {
    const {bananas, mangoes} = this.state
    return (
      <div className="fruits-bg-container">
        <div className="fruits-counter-card">
          <h1 className="heading">
            Bob ate <span className="count-value">{mangoes}</span> mangoes{' '}
            <span className="count-value">{bananas}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
                className="image"
              />
              <div className="button-container">
                <button
                  type="button"
                  onClick={this.mangoesCount}
                  className="button"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="image"
              />
              <div className="button-container">
                <button
                  type="button"
                  onClick={this.bananasCount}
                  className="button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
