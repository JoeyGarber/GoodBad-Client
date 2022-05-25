import React, { Component } from 'react'
import { indexSuggestions } from '../../api/suggestions'
import { Link } from 'react-router-dom'

class IndexSuggestions extends Component {
  constructor (props) {
    super(props)

    this.state = {
      suggestions: [],
      inputText: ''
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexSuggestions(user)
      .then((res) => this.setState({ suggestions: res.data.suggestions }))
      .then(() => {
        msgAlert({
          heading: 'Index success',
          message: 'Showing all suggestions',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Index fail',
          message: 'Index error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  inputHandler = (event) => {
    const lowerCase = event.target.value.toLowerCase()
    this.setState({ inputText: lowerCase })
  }

  render () {
    const { suggestions } = this.state

    if (suggestions === null) {
      return 'Loading...'
    }
    let suggestionsJSX
    if (suggestions.length === 0) {
      suggestionsJSX = 'No suggestions. Try adding one'
    } else {
      suggestionsJSX = suggestions.filter((suggestion) => suggestion.title.toLowerCase().indexOf(this.state.inputText) > -1 || this.state.inputText === '').map((suggestion) => {
        return (
          <Link to={`/suggestions/${suggestion._id}`} key={suggestion._id}>
            <p>{suggestion.title}</p>
          </Link>
        )
      })
    }

    return (
      <div>
        <input type='text' onChange={this.inputHandler} />
        {suggestionsJSX}
      </div>
    )
  }
}

export default IndexSuggestions
