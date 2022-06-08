import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { showSuggestion, updateSuggestion } from '../../api/suggestions'

class UpdateSuggestion extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showSuggestion(match.params.id, user)
      .then((res) => this.setState({ title: res.data.suggestion.title }))
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

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    })

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, msgAlert, match, history } = this.props

    updateSuggestion(match.params.id, this.state, user)
      .then(() => history.push('/suggestions'))
      .then(() => {
        msgAlert({
          heading: 'Suggestion updated',
          message: 'Now it\'s different!',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Suggestion update failed',
          message: 'Suggestion error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type='text'
              name='title'
              value={this.state.title}
              placeholder='Update Suggestion'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant='light' type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(UpdateSuggestion)
