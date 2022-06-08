import TinderCard from 'react-tinder-card'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { indexThings, voteThing, voteUser } from '../../api/things'

class SwipeCard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      things: null
    }
  }

  componentDidMount () {
    indexThings(this.props.user)
      .then((res) =>
        this.setState({ things: res.data.things })
      )
  }

  onSwipe = (direction, id) => {
    voteThing(id, direction, this.props.user)
      .then(() => voteUser(id, direction, this.props.user))
      .catch((error) => console.log(error))
  }

  render () {
    if (this.state.things === null) {
      return 'Loading...'
    }
    const cardJSX = this.state.things.filter((thing) =>
      (!thing.gooders.includes(this.props.user._id) && !thing.baders.includes(this.props.user._id))).map((thing) => {
      return (
        <div className='card-container' key={thing.title}>
          <TinderCard
            className='tindercard'
            onSwipe={(direction) => this.onSwipe(direction, thing._id)}
            preventSwipe={['up', 'down']}>
            <div className='carddiv'>
              <img id='card-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_card.svg/788px-White_card.svg.png' />
              <h1 className='centered'>{thing.title}</h1>
            </div>
          </TinderCard>
        </div>
      )
    })
    return (
      <>
        {cardJSX}
        <div className="buttons-bar">
          <button>Bad</button>
          <button>Cannot decide?</button>
          <button>Good</button>
        </div>
      </>
    )
  }
}

export default withRouter(SwipeCard)
