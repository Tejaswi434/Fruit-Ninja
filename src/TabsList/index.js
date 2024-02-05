import {Component} from 'react'

import './index.css'

import ImageList from '../ImageList'

const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]

class TabsList extends Component {
  state = {tabItem: tabsList[0].tabId}

  tabSelecting = () => {
    const {imagesList} = this.props
    const {tabItem} = this.state
    const newone = imagesList.filter(each => each.category === tabItem)
    return newone
  }

  fruits = () => {
    this.setState({tabItem: tabsList[0].tabId})
  }

  Animals = () => {
    this.setState({tabItem: tabsList[1].tabId})
  }

  places = () => {
    this.setState({tabItem: tabsList[2].tabId})
  }

  render() {
    const {imagesList} = this.props
    const {tabitem} = this.state
    const filtereddata = this.tabSelecting()
    return (
      <div className="bg-container">
        <div className="heading-1">
          <div className="match_image_logo">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
            />
          </div>
          <div className="score_timer">
            <p className="score_white">score</p>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
                alt="timer"
              />
            </div>
          </div>
        </div>
        <div>
          <p>HI</p>
        </div>
        <div className="buttons_tab">
          <button className="button_1" onClick={this.fruits} type="button">
            Fruits
          </button>
          <button className="button_2" onClick={this.Animals} type="button">
            Animals
          </button>
          <button className="button_3" onClick={this.places} type="button">
            Places
          </button>
        </div>
        <div>
          <ul className="rowing">
            {filtereddata.map(each => (
              <ImageList each={each} tabitem={tabitem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TabsList
