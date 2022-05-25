import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { showThing } from '../../api/things.js'

class ShowThing extends Component {
  constructor (props) {
    super(props)

    this.state = {
      thing: null
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showThing(match.params.id, user)
      .then((res) => {
        console.log(res.data)
        this.setState({ thing: res.data.thing })
        console.log(this.state.thing.title)
      })
      .then(() => {
        msgAlert({
          heading: 'Successfully Showing Suggestion',
          message: 'WooHoo!',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Show Suggestion Failed',
          message: 'Error message: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    if (this.state.thing === null) {
      return (
        <p>Loading...</p>
      )
    } else {
      const gooderJSX = this.state.thing.gooders.map((gooder) => {
        return (
          <p key={gooder._id}>{gooder.email} gooded this thing.</p>
        )
      })
      const baderJSX = this.state.thing.baders.map((bader) => {
        return (
          <p key={bader._id}>{bader.email} badded this thing.</p>
        )
      })
      return (
        <div>
          <h2>{this.state.thing.title}</h2>
          {gooderJSX}
          {baderJSX}
        </div>
      )
    }
  }
}

export default withRouter(ShowThing)
