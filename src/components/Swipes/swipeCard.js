import TinderCard from 'react-tinder-card'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class SwipeCard extends Component {
  constructor (props) {
    super(props)

    this.state = null
  }

  db = [
    {
      name: 'Joey'
    },
    {
      name: 'Kevin'
    },
    {
      name: 'John'
    }
  ]

  onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }

  onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  characters = this.db

  render () {
    return (
      <div>
        {this.characters.map((character) => (
          <TinderCard
            key={character.name}
            onSwipe={this.onSwipe}
            onCardLeftScreen={() => this.onCardLeftScreen(character.name)}
            preventSwipe={['up', 'down']}>
            <img src='https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/find-a-card/other/card-image-standard-credit-card.png' />
          </TinderCard>
        ))}
      </div>
    )
  }
}

export default withRouter(SwipeCard)
