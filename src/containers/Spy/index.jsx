import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// variable which will point to react-router history
let globalDispatch = null

// component which we will mount on top of the app
@connect()
export class Spy extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const { dispatch } = this.props
    globalDispatch = dispatch
  }

  componentWillReceiveProps(nextProps) {
    globalDispatch = nextProps.dispatch
  }

  render() {
    return null
  }
}

export function getDispatch() {
  return globalDispatch
}
