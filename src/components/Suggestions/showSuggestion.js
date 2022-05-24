import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { showSuggestion, deleteSuggestion } from '../../api/suggestions.js'
import Button from 'react-bootstrap/Button'

class ShowSuggestion extends Component {
  constructor (props) {
    super(props)

    this.state = {
      suggestion: null
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showSuggestion(match.params.id, user)
      .then((res) => this.setState({ suggestion: res.data.suggestion }))
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

  handleDelete = () => {
    const { match, user, msgAlert, history } = this.props

    deleteSuggestion(match.params.id, user)
      .then(() => history.push('/suggestions/'))
      .then(() => {
        msgAlert({
          heading: 'Successfully Deleted Suggestion',
          message: 'WooHoo!',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Delete Suggestion Failed',
          message: 'Error message: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    if (this.state.suggestion === null) {
      return 'Loading...'
    }

    const { title, owner } = this.state.suggestion
    const { user, match, history } = this.props
    return (
      <div>
        <h4>{title}</h4>
        {user._id === owner && (
          <>
            <Button
              onClick={() => history.push(`/suggestions/${match.params.id}/update`)}>
              Update
            </Button>
            <Button onClick={this.handleDelete}>
              Delete
            </Button>
          </>
        )}
      </div>
    )
  }
}

export default withRouter(ShowSuggestion)
