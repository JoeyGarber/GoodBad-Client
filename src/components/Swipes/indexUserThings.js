import React, { Component } from 'react'
import { indexUserThings } from '../../api/things'
import { withRouter, Link } from 'react-router-dom'

class IndexUserThings extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userGoods: [],
      userBads: []
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexUserThings(user)
      .then((res) => {
        this.setState({ userGoods: res.data.user.goods })
        this.setState({ userBads: res.data.user.bads })
      })
      .then(() => {
        msgAlert({
          heading: 'Index success',
          message: 'Showing all user things',
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

  render () {
    const { userGoods, userBads } = this.state

    if (userGoods === null && userBads === null) {
      return 'Loading...'
    }
    const userGoodsJSX = userGoods.map((thing) => {
      const goods = thing.gooders.length
      const bads = thing.baders.length
      const total = goods + bads
      return (
        <div key={thing._id}>
          <Link to={'/thingstats/' + thing._id}>
            <h3>{thing.title} - User Vote: Good</h3>
          </Link>
          <p>Total goods: {goods}</p>
          <p>Good percentage: {((goods / total) * 100).toFixed()}%</p>
          <p>Total bads: {bads}</p>
          <p>Bad percentage: {((bads / total) * 100).toFixed()}%</p>
        </div>
      )
    })
    const userBadsJSX = userBads.map((thing) => {
      const goods = thing.gooders.length
      const bads = thing.baders.length
      const total = goods + bads
      return (
        <div key={thing._id}>
          <Link to={'/thingstats/' + thing._id}>
            <h3>{thing.title} - User Vote: Bad</h3>
          </Link>
          <p>Total goods: {goods}</p>
          <p>Good percentage: {((goods / total) * 100).toFixed()}%</p>
          <p>Total bads: {bads}</p>
          <p>Bad percentage: {((bads / total) * 100).toFixed()}%</p>
        </div>
      )
    })

    return (
      <>
        {userGoodsJSX}
        {userBadsJSX}
      </>
    )
  }
}

export default withRouter(IndexUserThings)
