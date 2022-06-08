import TinderCard from 'react-tinder-card'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { indexThings, voteThing, voteUser } from '../../api/things'

class SwipeCard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      things: null,
      showLeft: null,
      showRight: null,
      mustChoose: null,
      showInstructions: true
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
        <>
          <div className='card-container' key={thing.title}>
            <TinderCard
              className='tindercard'
              onSwipe={(direction) => this.onSwipe(direction, thing._id)}
              preventSwipe={['up', 'down']}>
              <div className='carddiv'>
                <img
                  id='card-img'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_card.svg/788px-White_card.svg.png'
                />
                <h1 className='centered'>{thing.title}</h1>
              </div>
            </TinderCard>
          </div>
          <div className='buttons-bar'>
            <button variant='light' onClick={() => this.setState({ showLeft: true })}>Bad</button>
            <button variant='light' onClick={() => this.setState({ mustChoose: true })}>Can&#8217;t decide?</button>
            <button variant='light' onClick={() => this.setState({ showRight: true })}>Good</button>
          </div>
        </>
      )
    })
    return (
      <>
        {this.state.showLeft && (
          <h5 className="left-side" onClick={() => this.setState({ showLeft: null })}>Swipe left, then, silly. It&#8217;s Tinder rules.</h5>
        )}
        {this.state.showRight && (
          <h5 className="right-side" onClick={() => this.setState({ showRight: null })}>Swipe right, then, silly. It&#8217;s Tinder rules.</h5>
        )}
        {this.state.mustChoose && (
          <h5 className="must-choose" onClick={() => this.setState({ mustChoose: null })}>Yes you can, I believe in you. Also you have to.</h5>
        )}
        {this.state.showInstructions && (
          <>
            <h2 onClick={() => this.setState({ showInstructions: false })}>Instructions!</h2>
            <p onClick={() => this.setState({ showInstructions: false })}>GoodBad is Tinder for things! If you think a thing is good, swipe right. If you think it&#8217;s bad, swipe left.
              After you&#8217;ve voted, you&#8217;ll be able to see how other people voted on that thing too, and even the usernames
              of the other voters! Just head over to User Things. (Hint: Clicking on text dismisses it.)
            </p>
          </>
        )}
        {this.state.showLeft}
        {cardJSX}
      </>
    )
  }
}

export default withRouter(SwipeCard)
