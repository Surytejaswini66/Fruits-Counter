// Write your code here
import {Component} from 'react'
import './index.css'
class FruitsCounter extends Component {
  state = {count: 0, counter: 0}
  eatMango = () => {
    this.setState(prevStat => {
      return {count: prevStat.count + 1}
    })
  }
  eatBanana = () => {
    this.setState(prevStates => {
      return {counter: prevStates.counter + 1}
    })
  }
  render() {
    const {count} = this.state
    const {counter} = this.state
    return (
      <div>
        <div className="container">
          <div className="card-container">
            <h1 className="heading">
              Bob ate {count} mangoes {counter} bananas
            </h1>
            <div className="cards">
              <div>
                <img
                  className="image1"
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                />
                <button className="button" onClick={this.eatMango}>
                  Eat Mango
                </button>
              </div>
              <div>
                <img
                  className="image"
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                />
                <button className="button1" onClick={this.eatBanana}>
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
