import TinderCard from 'react-tinder-card'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { indexThings } from '../../api/things'

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

  onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }

  onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  render () {
    if (this.state.things === null) {
      return 'Loading...'
    }
    // const things = [{ Name: 'Johnny' }]
    const cardJSX = this.state.things.map((thing) => (
      <TinderCard
        className="tindercard"
        key={thing.title}
        onSwipe={this.onSwipe}
        onCardLeftScreen={() => this.onCardLeftScreen(thing.title)}
        preventSwipe={['up', 'down']}>
        <div className='carddiv'>
          <img src='https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/find-a-card/other/card-image-standard-credit-card.png' />
          <h1 className="centered">{thing.title}</h1>
        </div>
      </TinderCard>
    ))

    return (
      <div>
        {cardJSX}
      </div>
    )
  }
}

export default withRouter(SwipeCard)
