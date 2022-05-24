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
      .then(() => {
        console.log(this.state.things)
      })
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
        key={thing.title}
        onSwipe={this.onSwipe}
        onCardLeftScreen={() => this.onCardLeftScreen(thing.title)}
        preventSwipe={['up', 'down']}>
        <img src='https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/find-a-card/other/card-image-standard-credit-card.png' />
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
