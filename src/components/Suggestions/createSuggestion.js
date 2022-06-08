import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createSuggestion } from '../../api/suggestions'

class CreateSuggestion extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    })

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, msgAlert, history } = this.props

    createSuggestion(this.state, user)
      .then(() => history.push('/suggestions/'))
      .then(() => {
        msgAlert({
          heading: 'Suggestion created',
          message: 'Noted!',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Suggestion creation failed',
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
            <Form.Label><h3>Create Suggestion</h3></Form.Label>
            <Form.Control
              required
              type='text'
              name='title'
              value={this.state.title}
              placeholder='Suggestion'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant='light' type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(CreateSuggestion)
